// app/ui/feed/post.tsx
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import PostCard from "./post-card"
import React from "react"

type Post = {
  id: number;
  content: string;
  imageUrl: string;
  likes: number;
  timeAgo: string;
  author: {
    name: string;
    image: string;
  };
};

export default async function Feed() {
  const res = await fetch("http://localhost:3000/api/feed", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-4 text-red-500">피드 데이터를 불러올 수 없습니다.</div>;
  }

  const posts: Post[] = await res.json();

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
              timeAgo: post.timeAgo,
              username: post.author.name,
              userImage: post.author.image,
            }}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
