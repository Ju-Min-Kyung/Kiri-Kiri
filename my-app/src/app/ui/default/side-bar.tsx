import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Home, Search, Compass, PlusSquare, Bell, User } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Sidebar() {
  return (
    <div className="w-64 fixed left-0 top-0 h-full bg-white border-r border-gray-200 p-6">
      <div className="mb-8">
        <Link href="/feed">
          <h1 className="text-2xl font-bold cursor-pointer" style={{ color: '#0067AC' }}>
            끼리끼리
          </h1>
        </Link>
      </div>

      <nav className="space-y-4">
        {[
          { icon: Home, label: '홈', href: '/feed' },
          { icon: Search, label: '검색' },
          { icon: Compass, label: '탐색' },
          { icon: PlusSquare, label: '만들기' },
          { icon: Bell, label: '알림' }
        ].map(({ icon: Icon, label, href }) => {
          const button = (
            <Button
              key={label}
              variant="ghost"
              className="w-full justify-start gap-3 text-left hover:bg-blue-50"
              style={{ color: '#123F6D' }}
            >
              <Icon className="w-6 h-6" style={{ color: '#0067AC' }} />
              {label}
            </Button>
          );

          return href ? (
            <Link key={label} href={href} passHref>
              {button}
            </Link>
          ) : (
            button
          );
        })}

        <Link href="/profile" passHref>
          <Button variant="ghost" className="w-full justify-start gap-3 text-left hover:bg-blue-50" style={{ color: '#123F6D' }}>
            <User className="w-6 h-6" style={{ color: '#0067AC' }} />
            프로필
          </Button>
        </Link>
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32&text=ME" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm" style={{ color: '#123F6D' }}>내 계정</p>
            <p className="text-xs text-gray-500">@my_username</p>
          </div>
        </div>
      </div>
    </div>
  )
}
