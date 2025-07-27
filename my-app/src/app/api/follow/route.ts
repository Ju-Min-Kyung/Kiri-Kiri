import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// [POST] /api/follow → 팔로우 추가
export async function POST(req: NextRequest) {
  // 요청 body에서 followerId, followingId 추출
  const { followerId, followingId } = await req.json();

  // 필수 값 누락 시 400 반환
  if (!followerId || !followingId) {
    return NextResponse.json({ message: "Missing ids" }, { status: 400 });
  }

  try {
    // Follow 테이블에 새로운 관계 추가
    await prisma.follow.create({
      data: {
        followerId,
        followingId,
      },
    });

    return NextResponse.json({ message: "Followed" }, { status: 200 });
  } catch (error) {
    // 이미 팔로우했거나 DB 에러 발생 시
    return NextResponse.json({ message: "Already followed or DB error" }, { status: 500 });
  }
}

// [DELETE] /api/follow → 팔로우 제거 (언팔로우)
export async function DELETE(req: NextRequest) {
  // 요청 body에서 followerId, followingId 추출
  const { followerId, followingId } = await req.json();

  // 필수 값 누락 시 400 반환
  if (!followerId || !followingId) {
    return NextResponse.json({ message: "Missing ids" }, { status: 400 });
  }

  try {
    // 해당 관계를 삭제 (deleteMany 사용 → 안전하게 중복 제거)
    await prisma.follow.deleteMany({
      where: {
        followerId,
        followingId,
      },
    });

    return NextResponse.json({ message: "Unfollowed" }, { status: 200 });
  } catch (error) {
    // 삭제 실패 시
    return NextResponse.json({ message: "Error unfollowing" }, { status: 500 });
  }
}
