// src/app/api/follow/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// [POST] /api/follow → 팔로우 추가
export async function POST(req: NextRequest) {
  try {
    const { followerId, followingId } = await req.json();

    if (!followerId || !followingId) {
      return NextResponse.json({ message: "Missing ids" }, { status: 400 });
    }

    if (followerId === followingId) {
      return NextResponse.json({ message: "Cannot follow yourself" }, { status: 400 });
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
      return NextResponse.json({ message: "Already following" }, { status: 200 });
    }

    // 팔로우 추가
    await prisma.follow.create({
      data: {
        followerId,
        followingId,
      },
    });

    return NextResponse.json({ message: "Followed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Follow POST error:", error);
    return NextResponse.json({ message: "Follow failed" }, { status: 500 });
  }
}

// [DELETE] /api/follow → 언팔로우
export async function DELETE(req: NextRequest) {
  try {
    const { followerId, followingId } = await req.json();

    if (!followerId || !followingId) {
      return NextResponse.json({ message: "Missing ids" }, { status: 400 });
    }

    // 팔로우 관계 삭제
    const deleted = await prisma.follow.deleteMany({
      where: {
        followerId,
        followingId,
      },
    });

    if (deleted.count === 0) {
      return NextResponse.json({ message: "Follow relationship not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Unfollowed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Follow DELETE error:", error);
    return NextResponse.json({ message: "Unfollow failed" }, { status: 500 });
  }
}