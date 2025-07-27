import { ScrollArea } from "@/components/ui/scroll-area"
import PostCard from "./post-card"
import React from "react"

type Post = {
  id: number;
  content: string;
  imageUrl: string;
  likes: number;
  createdAt: string;
  author: {
    name: string;
    image: string;
  };
};

function getTimeAgo(isoDate: string): string {
  const diff = Date.now() - new Date(isoDate).getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return `${seconds}초 전`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  return `${days}일 전`;
}

export default function Feed({ posts }: { posts: Post[] }) {
  return (
    <ScrollArea className="h-screen">
      <div className="py-8 px-4 space-y-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={{
              id: post.id,
              caption: post.content,
              postImage: post.imageUrl,
              likes: post.likes,
              timeAgo: getTimeAgo(post.createdAt), // ← 변환함
              username: post.author.name,
              userImage: post.author.image,
            }}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
