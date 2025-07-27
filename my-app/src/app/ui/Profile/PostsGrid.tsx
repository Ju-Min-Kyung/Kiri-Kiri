import PostCard from "./PostCard";
import prisma from "@/lib/prisma";

interface Props {
  userPid: number;
}

export default async function PostsGrid({ userPid }: Props) {
  const posts = await prisma.post.findMany({
    where: {
      authorId: userPid,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      imageUrl: true,
      mood: true,
      content: true,
    },
  });

  if (!posts.length) {
    return <div className="text-center text-gray-500 py-12">게시물이 없습니다.</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
