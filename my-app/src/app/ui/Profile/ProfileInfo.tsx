import { Button } from "@/components/ui/button";
import { UserPlus, UserMinus } from "lucide-react";

interface Props {
  isFollowing: boolean;
  followerCount: number;
  name: string;
  bio: string;
  onToggleFollow?: () => void;
}

export default function ProfileInfo({
  isFollowing,
  followerCount,
  name,
  bio,
  onToggleFollow,
}: Props) {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold text-[#123F6D]">{name}</h2>
        <Button
          onClick={onToggleFollow}
          className={`px-8 py-2.5 rounded-full font-medium transition-all ${
            isFollowing
              ? "bg-gray-100 text-[#123F6D] hover:bg-gray-200 border border-gray-300"
              : "bg-gradient-to-r from-[#0067AC] to-[#00AEC6] text-white hover:shadow-lg hover:scale-105"
          }`}
        >
          {isFollowing ? (
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
      </div>

      <p className="text-[#123F6D]/80 text-lg mb-6 leading-relaxed">
        {bio}
      </p>

      <div className="flex items-center gap-8 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#123F6D]">
            {followerCount.toLocaleString()}
          </div>
          <div className="text-sm text-[#123F6D]/60">팔로워</div>
        </div>
        {/* 팔로잉, 게시물은 하드코딩된 상태 */}
        <div className="text-center">
          <div className="text-2xl font-bold text-[#123F6D]">892</div>
          <div className="text-sm text-[#123F6D]/60">팔로잉</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#123F6D]">156</div>
          <div className="text-sm text-[#123F6D]/60">게시물</div>
        </div>
      </div>
    </div>
  );
}
