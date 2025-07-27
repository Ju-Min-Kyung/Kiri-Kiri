// src/lib/follow.ts
"use server";

import prisma from "@/lib/prisma";

// 서버 액션으로 변경하여 직접 DB 조작
export async function followUser(followerId: number, followingId: number) {
  try {
    if (followerId === followingId) {
      throw new Error("자기 자신을 팔로우할 수 없습니다");
    }

    // 이미 팔로우 중인지 확인
    const existingFollow = await prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });

    if (existingFollow) {
      return { success: true, message: "이미 팔로우 중입니다" };
    }

    // 팔로우 추가
    await prisma.follow.create({
      data: {
        followerId,
        followingId,
      },
    });

    return { success: true, message: "팔로우 완료" };
  } catch (error) {
    console.error("팔로우 실패:", error);
    return { success: false, message: "팔로우에 실패했습니다" };
  }
}

export async function unfollowUser(followerId: number, followingId: number) {
  try {
    // 팔로우 관계 삭제
    const deleted = await prisma.follow.deleteMany({
      where: {
        followerId,
        followingId,
      },
    });

    if (deleted.count === 0) {
      return { success: false, message: "팔로우 관계를 찾을 수 없습니다" };
    }

    return { success: true, message: "언팔로우 완료" };
  } catch (error) {
    console.error("언팔로우 실패:", error);
    return { success: false, message: "언팔로우에 실패했습니다" };
  }
}

// 클라이언트에서 fetch로 호출하는 함수들 (기존 방식 유지하려면)
export async function follow(followerId: number, followingId: number) {
  const res = await fetch("/api/follow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ followerId, followingId }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "팔로우 실패");
  }

  return await res.json();
}

export async function unfollow(followerId: number, followingId: number) {
  const res = await fetch("/api/follow", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ followerId, followingId }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "언팔로우 실패");
  }

  return await res.json();
}