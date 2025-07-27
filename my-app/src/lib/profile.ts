// src/lib/profile.ts
import prisma from "@/lib/prisma";
import { UserProfile } from "@/types/user";

export async function getUserProfile(profileId: number, currentUserId: number): Promise<UserProfile | null> {
  // 기본 사용자 정보 조회
  const user = await prisma.user.findUnique({
    where: { pid: profileId },
    select: {
      pid: true,
      name: true,
      id: true,
      createdAt: true,
      posts: { select: { id: true } },
    },
  });

  if (!user) return null;

  // 별도로 팔로워/팔로잉 수 계산
  const [followerCount, followingCount, followRelation] = await Promise.all([
    // 이 사용자를 팔로우하는 사람들의 수 (팔로워 수)
    prisma.follow.count({
      where: { followingId: profileId }
    }),
    // 이 사용자가 팔로우하는 사람들의 수 (팔로잉 수)
    prisma.follow.count({
      where: { followerId: profileId }
    }),
    // 현재 사용자가 이 프로필 주인을 팔로우하고 있는지 확인
    prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId: currentUserId,
          followingId: profileId,
        },
      },
    })
  ]);

  const isFollowing = !!followRelation;
  const isOwner = profileId === currentUserId;

  return {
    pid: user.pid,
    name: user.name,
    userId: user.id,
    bio: `가입일: ${user.createdAt.toLocaleDateString()}`,
    followerCount, // 이 사용자를 팔로우하는 사람들의 수
    followingCount, // 이 사용자가 팔로우하는 사람들의 수
    postCount: user.posts.length,
    isFollowing,
    isOwner,
  };
}