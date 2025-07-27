"use client";

import { Button } from "@/components/ui/button";
import { UserPlus, UserMinus } from "lucide-react";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { followUser, unfollowUser } from "@/lib/follow";

interface Props {
  isFollowing: boolean;
  isOwner: boolean;
  followerCount: number;
  followingCount: number;
  postCount: number;
  name: string;
  userId: string;
  bio: string;
  pid: number;
}

export default function ProfileInfo({
  isFollowing: initialIsFollowing,
  isOwner,
  followerCount: initialFollowerCount,
  followingCount,
  postCount,
  name,
  userId,
  bio,
  pid,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  
  // 로컬 상태로 관리하여 즉각적인 UI 업데이트
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [followerCount, setFollowerCount] = useState(initialFollowerCount);

  const MOCK_USER_ID = 1;

  const handleToggleFollow = async () => {
    if (isPending) return;

    // 낙관적 업데이트 (UI 먼저 변경)
    const wasFollowing = isFollowing;
    const prevFollowerCount = followerCount;
    
    setIsFollowing(!wasFollowing);
    // 팔로우 대상자(현재 프로필 주인)의 팔로워 수만 변경
    // (내가 팔로우하면 -> 상대방의 팔로워 +1, 언팔로우하면 -> 상대방의 팔로워 -1)
    setFollowerCount(prev => wasFollowing ? prev - 1 : prev + 1);

    startTransition(async () => {
      try {
        let result;
        if (wasFollowing) {
          result = await unfollowUser(MOCK_USER_ID, pid);
        } else {
          result = await followUser(MOCK_USER_ID, pid);
        }

        if (!result.success) {
          // 실패 시 롤백
          setIsFollowing(wasFollowing);
          setFollowerCount(prevFollowerCount);
          console.error("팔로우 요청 실패:", result.message);
          alert(result.message);
        } else {
          // 성공 시 서버 상태와 동기화
          router.refresh();
        }
      } catch (error) {
        // 에러 발생 시 롤백
        setIsFollowing(wasFollowing);
        setFollowerCount(prevFollowerCount);
        console.error("팔로우 요청 실패:", error);
        alert("팔로우 요청에 실패했습니다.");
      }
    });
  };

  return (
    <div className="flex-1">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold text-[#123F6D]">{name}</h2>
        {!isOwner && (
          <Button
            onClick={handleToggleFollow}
            disabled={isPending}
            className={`px-8 py-2.5 rounded-full font-medium transition-all ${
              isFollowing
                ? "bg-gray-100 text-[#123F6D] hover:bg-gray-200 border border-gray-300"
                : "bg-gradient-to-r from-[#0067AC] to-[#00AEC6] text-white hover:shadow-lg hover:scale-105"
            } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isPending ? (
              <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : isFollowing ? (
              <>
                <UserMinus className="w-4 h-4 mr-2" />
                언팔로우
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4 mr-2" />
                팔로우
              </>
            )}
          </Button>
        )}
      </div>

      <p className="text-[#123F6D]/80 text-lg mb-6 leading-relaxed">
        {bio} <br />
        @{userId}
      </p>

      <div className="flex items-center gap-8 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#123F6D]">
            {followerCount.toLocaleString()}
          </div>
          <div className="text-sm text-[#123F6D]/60">팔로워</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#123F6D]">
            {followingCount.toLocaleString()}
          </div>
          <div className="text-sm text-[#123F6D]/60">팔로잉</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#123F6D]">
            {postCount.toLocaleString()}
          </div>
          <div className="text-sm text-[#123F6D]/60">게시물</div>
        </div>
      </div>
    </div>
  );
}