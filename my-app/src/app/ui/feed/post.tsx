import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import PostCard from "./post-card"
import React from "react"

const posts = [
  {
    id: 1,
    username: "john_doe",
    userImage: "/placeholder.svg?height=40&width=40&text=JD",
    postImage: "/placeholder.svg?height=400&width=400&text=Beautiful+Sunset",
    caption: "Amazing sunset today! 🌅 #nature #photography",
    likes: 1234,
    timeAgo: "2시간 전"
  },
  {
    id: 2,
    username: "jane_smith",
    userImage: "/placeholder.svg?height=40&width=40&text=JS",
    postImage: "/placeholder.svg?height=400&width=400&text=Coffee+Time",
    caption: "Perfect morning coffee ☕️ #coffee #morning",
    likes: 856,
    timeAgo: "4시간 전"
  },
  {
    id: 3,
    username: "travel_lover",
    userImage: "/placeholder.svg?height=40&width=40&text=TL",
    postImage: "/placeholder.svg?height=400&width=400&text=Mountain+View",
    caption: "Hiking adventures in the mountains! 🏔️ #hiking #adventure",
    likes: 2341,
    timeAgo: "6시간 전"
  }
]

export default function Feed() {
  return (
    <ScrollArea className="h-screen">
      <div className="py-8 px-4 space-y-6">
        {posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </ScrollArea>
  )
}
