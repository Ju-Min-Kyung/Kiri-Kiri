"use client" // Next.js에서 useRouter 사용 시 필요할 수 있음

import { useRouter } from "next/navigation"  // ✅ 라우터 훅 import 추가
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Heart, User } from 'lucide-react'
import { useState } from "react"

// ✅ 컴포넌트에서 더 이상 외부 onSubmit 필요 없음
interface LoginFormProps {
  showPassword: boolean
  onTogglePassword: () => void
}

// 로그인 폼 컴포넌트
export default function LoginForm({ showPassword, onTogglePassword }: LoginFormProps) {
  const router = useRouter()                     // ✅ 라우터 훅 사용
  const [formData, setFormData] = useState({     // ✅ 간단한 폼 상태
    userId: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: 여기에 실제 로그인 검증 로직을 넣을 수 있음
    console.log("로그인 시도:", formData)

    // ✅ 로그인 성공 시 /feed/post 페이지로 이동
    router.push("/feed")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5"> {/* ✅ 내부 핸들러 연결 */}

      {/* 아이디 입력 필드 */}
      <div className="space-y-2">
        <Label htmlFor="userId" className="text-gray-300 font-medium text-sm flex items-center">
          <User className="w-4 h-4 mr-2" />
          아이디
        </Label>
        <Input
          id="userId"
          name="userId"
          type="text"
          placeholder="아이디"
          required
          value={formData.userId}
          onChange={handleChange} // ✅ 상태 업데이트
          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 h-12 rounded-2xl focus:border-[#00aec6] focus:ring-[#00aec6]/20 transition-all duration-300"
        />
      </div>

      {/* 비밀번호 입력 필드 */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-300 font-medium text-sm flex items-center">
          <Heart className="w-4 h-4 mr-2" fill="currentColor" />
          비밀번호
        </Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호"
            required
            value={formData.password}
            onChange={handleChange} // ✅ 상태 업데이트
            className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 h-12 rounded-2xl focus:border-[#00aec6] focus:ring-[#00aec6]/20 pr-12 transition-all duration-300"
          />
          {/* 비밀번호 보기/숨기기 버튼 */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00aec6] h-8 w-8 p-0 rounded-lg"
            onClick={onTogglePassword}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* 로그인 버튼 */}
      <Button
        type="submit"
        className="w-full text-white border-0 h-12 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        style={{background: 'linear-gradient(135deg, #0067ac 0%, #00aec6 100%)'}}
        onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #005a9a 0%, #009bb4 100%)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #0067ac 0%, #00aec6 100%)'}
      >
        로그인
      </Button>
    </form>
  )
}
