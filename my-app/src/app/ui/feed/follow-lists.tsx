import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Heart, MessageCircle } from "lucide-react"
import React from "react"

const followingUsers = [
  { username: "best_friend", name: "베스트 프렌드", image: "/placeholder.svg?height=32&width=32&text=BF", isOnline: true },
  { username: "family_member", name: "가족", image: "/placeholder.svg?height=32&width=32&text=FM", isOnline: false },
  { username: "work_colleague", name: "직장 동료", image: "/placeholder.svg?height=32&width=32&text=WC", isOnline: true }
]

export default function FollowList() {
  return (
    <div className="w-80 fixed right-0 top-0 h-full bg-white border-l border-gray-200 p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold" style={{ color: '#123F6D' }}>내가 팔로우한 목록</h3>
          <Button variant="ghost" size="sm" className="text-xs" style={{ color: '#00AEC6' }}>
            모두 보기
          </Button>
        </div>

        <div className="space-y-3">
          {followingUsers.map((user) => (
            <div key={user.username} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.image || "/placeholder.svg"} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  {user.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#123F6D' }}>{user.username}</p>
                  <p className="text-xs text-gray-500">{user.name}</p>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                {user.isOnline ? "온라인" : "오프라인"}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      <div>
        <h3 className="font-semibold mb-4" style={{ color: '#123F6D' }}>활동</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <p className="text-sm">새로운 좋아요가 있습니다</p>
              <p className="text-xs text-gray-500">5분 전</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-sm">새로운 댓글이 있습니다</p>
              <p className="text-xs text-gray-500">10분 전</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
