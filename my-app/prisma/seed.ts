import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 그룹 생성
  await prisma.group.createMany({
    data: [
      { code: 'A001', name: 'OpenAI' },
      { code: 'B001', name: 'Kakao' },
      { code: 'C001', name: 'Coupang' },
    ],
  });

  // 사용자 생성
  await prisma.user.createMany({
    data: [
      {
        email: 'alice@openai.com',
        name: 'Alice',
        password: 'hashed_pw_1',
        nickname: 'alice',
        profile: '/images/alice.png',
        groupCode: 'A001',
      },
      {
        email: 'bob@openai.com',
        name: 'Bob',
        password: 'hashed_pw_2',
        nickname: 'bobby',
        profile: '/images/bob.png',
        groupCode: 'A001',
      },
      {
        email: 'carol@kakao.com',
        name: 'Carol',
        password: 'hashed_pw_3',
        nickname: 'carol',
        profile: '/images/carol.png',
        groupCode: 'B001',
      },
      {
        email: 'dan@coupang.com',
        name: 'Dan',
        password: 'hashed_pw_4',
        nickname: 'danny',
        profile: '/images/dan.png',
        groupCode: 'C001',
      },
    ],
  });

  // 팔로우 관계 (id 기준: 1~4)
  await prisma.follow.createMany({
    data: [
      { followerId: 1, followingId: 2 },
      { followerId: 2, followingId: 1 },
      { followerId: 1, followingId: 3 },
    ],
  });

  // 게시글 작성
  await prisma.post.createMany({
    data: [
      {
        content: '오늘 날씨가 좋아요!',
        imageUrl: '/images/sun.png',
        location: '서울',
        mood: 'happy',
        mentioned: ['bob@openai.com'],
        authorId: 1,
        groupCode: 'A001',
      },
      {
        content: '새로운 프로젝트 시작~',
        imageUrl: null,
        location: '판교',
        mood: 'excited',
        mentioned: ['alice@openai.com'],
        authorId: 2,
        groupCode: 'A001',
      },
      {
        content: '커피가 맛있다 ☕',
        imageUrl: null,
        location: '제주',
        mood: 'chill',
        mentioned: [],
        authorId: 3,
        groupCode: 'B001',
      },
      {
        content: '배달 완료! 고객 만족 100%',
        imageUrl: null,
        location: '서울',
        mood: 'proud',
        mentioned: [],
        authorId: 4,
        groupCode: 'C001',
      },
    ],
  });

  console.log('✅ Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
