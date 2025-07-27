import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function PostCard({ post }: { post: any }) {
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
           
            <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm" style={{ color: '#123F6D' }}>{post.username}</p>
            <p className="text-xs text-gray-500">{post.timeAgo}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardContent className="p-0">
        <Image
          src={post.postImage || "/placeholder.svg"}
          alt="Post image"
          width={400}
          height={400}
          className="w-full aspect-square object-cover"
        />
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="p-0">
              <Heart className="w-6 h-6" style={{ color: '#00AEC6' }} />
            </Button>
            <Button variant="ghost" size="sm" className="p-0">
              <MessageCircle className="w-6 h-6" style={{ color: '#00AEC6' }} />
            </Button>
            <Button variant="ghost" size="sm" className="p-0">
              <Send className="w-6 h-6" style={{ color: '#00AEC6' }} />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="p-0">
            <Bookmark className="w-6 h-6" style={{ color: '#00AEC6' }} />
          </Button>
        </div>

        <div className="w-full">
          <p className="font-semibold text-sm mb-1" style={{ color: '#123F6D' }}>좋아요 {post.likes.toLocaleString()}개</p>
          <p className="text-sm">
            <span className="font-semibold" style={{ color: '#123F6D' }}>{post.username}</span> {post.caption}
          </p>
          <p className="text-sm text-gray-500 mt-1">댓글 모두 보기</p>
        </div>
      </CardFooter>
    </Card>
  )
}
