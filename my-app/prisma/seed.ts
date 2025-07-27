import { PrismaClient, User, Group } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 시드 시작");

  // ✅ 그룹 생성 (생성된 group.code를 사용)
  const group: Group = await prisma.group.create({
    data: {
      code: 'GRP001',
      name: '프론트엔드 개발팀',
    },
  });
  console.log("✅ 그룹 생성 완료:", group.code);

  // ✅ 사용자 생성 (User 타입 명시 → pid 접근 안전)
  const user1: User = await prisma.user.create({
    data: {
      id: 'user01',
      name: '홍길동',
      password: 'pass1234',
      secretCode: group.code,
    },
  });

  const user2: User = await prisma.user.create({
    data: {
      id: 'user02',
      name: '김영희',
      password: 'pass5678',
      secretCode: group.code,
    },
  });

  console.log("✅ 유저 생성 완료:", user1.pid, user2.pid);

  // ✅ 게시글 생성
  await prisma.post.createMany({
    data: [
      {
        content: '오늘은 너무 행복한 하루!',
        imageUrl: 'https://example.com/img1.jpg',
        location: '서울',
        mood: '기쁨',
        mentioned: [],
        authorId: user1.pid,
        groupCode: group.code,
      },
      {
        content: '비가 와서 조금 우울해요.',
        mood: '슬픔',
        mentioned: ['user01'],
        authorId: user2.pid,
        groupCode: group.code,
      },
    ],
  });
  console.log("✅ 게시글 생성 완료");

  // ✅ 팔로우 관계 생성
  await prisma.follow.create({
    data: {
      followerId: user1.pid,
      followingId: user2.pid,
    },
  });
  console.log("✅ 팔로우 생성 완료");
}

main()
  .catch((e) => {
    console.error("❌ 시드 중 오류:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });