import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// 개발용 Mock 세션 유저 (로그인한 유저라고 가정)
const MOCK_PID = 1; // DB에 있는 사용자 pid로 설정

export async function GET() {
  const user = await prisma.user.findUnique({
    where: { pid: MOCK_PID },
    select: { id: true, pid: true },
  });

  if (!user) {
    return new NextResponse("Mock user 없음", { status: 404 });
  }

  // 팔로우 중인 사용자 목록
  const followRelations = await prisma.follow.findMany({
    where: { followerId: user.pid },
    select: {
      following: {
        select: {
          pid: true,
          id: true,
          name: true,
        },
      },
    },
  });

  const followings = followRelations.map((f) => f.following);

  // 팔로우한 사람들의 포스트
  const posts = await prisma.post.findMany({
    where: {
      authorId: {
        in: followings.map((f) => f.pid),
      },
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },        
  });
  console.log("팔로우한 사람들의 포스트:", posts);
  return NextResponse.json({ posts, followings });
}
