import prisma from "@/lib/prisma";
import { UserProfile } from "@/types/user";

export async function getUserProfile(profileId: number, currentUserId: number): Promise<UserProfile | null> {
  const user = await prisma.user.findUnique({
    where: { pid: profileId },
    select: {
      pid: true,
      name: true,
      id: true,
      createdAt: true,
      followers: { select: { followerId: true } },
      following: { select: { followingId: true } },
      posts: { select: { id: true } },
    },
  });

  if (!user) return null;

  const isFollowing = user.followers.some(f => f.followerId === currentUserId);
  const isOwner = profileId === currentUserId;

  return {
    pid: user.pid,
    name: user.name,
    userId: user.id,
    bio: `가입일: ${user.createdAt.toLocaleDateString()}`,
    followerCount: user.followers.length,
    followingCount: user.following.length,
    postCount: user.posts.length,
    isFollowing,
    isOwner,
  };
}