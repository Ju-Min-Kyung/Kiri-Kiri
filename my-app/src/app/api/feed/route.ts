
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// 개발용 Mock 세션 유저 (로그인한 유저라고 가정)
const MOCK_PID = 2; // DB에 있는 사용자 pid로 설정

export async function GET() {
  const user = await prisma.user.findUnique({
    where: { pid: MOCK_PID },
    select: { id: true },
  });

  if (!user) {
    return new NextResponse("Mock user없음", { status: 404 });
  }

  const following = await prisma.follow.findMany({
    where: { followerId: user.pid },
    select: { followingId: true },
  });

  const posts = await prisma.post.findMany({
    where: {
      authorId: {
        in: following.map((f) => f.followingId),
      },
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(posts);
}
