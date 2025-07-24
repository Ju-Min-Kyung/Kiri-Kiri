"use client"

import { useRouter } from "next/navigation" // ✅ 라우터 훅 추가
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Heart, Sparkles, User } from 'lucide-react'

interface SignupFormProps {
  showPassword: boolean
  onTogglePassword: () => void
}

export default function SignupForm({ showPassword, onTogglePassword }: SignupFormProps) {
  const router = useRouter() // ✅ 라우터 인스턴스 생성
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    password: '',
    code: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: 실제 회원가입 처리 로직을 여기에 추가

    console.log("회원가입 정보:", formData)

    // ✅ 회원가입 성공 시 /feed 페이지로 이동
    router.push("/feed")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* 이름 입력 필드 */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-300 font-medium text-sm flex items-center">
          <Heart className="w-4 h-4 mr-2" fill="currentColor" />
          이름
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="이 름"
          required
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 h-12 rounded-2xl focus:border-[#0067ac] focus:ring-[#0067ac]/20 transition-all duration-300"
        />
      </div>

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
          onChange={handleChange}
          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 h-12 rounded-2xl focus:border-[#0067ac] focus:ring-[#0067ac]/20 transition-all duration-300"
        />
      </div>
      
      {/* 비밀번호 입력 필드 */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-300 font-medium text-sm flex items-center">
          <Sparkles className="w-4 h-4 mr-2" />
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
            onChange={handleChange}
            className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 h-12 rounded-2xl focus:border-[#0067ac] focus:ring-[#0067ac]/20 pr-12 transition-all duration-300"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0067ac] h-8 w-8 p-0 rounded-lg"
            onClick={onTogglePassword}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* 초대 코드 입력 필드 */}
      <div className="space-y-2">
        <Label htmlFor="code" className="text-gray-300 font-medium text-sm flex items-center">
          <Heart className="w-4 h-4 mr-2" fill="currentColor" />
          초대 코드
        </Label>
        <Input
          id="code"
          name="code"
          type="text"
          placeholder="시크릿 코드 입력"
          required
          value={formData.code}
          onChange={handleChange}
          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 h-12 rounded-2xl focus:border-[#0067ac] focus:ring-[#0067ac]/20 transition-all duration-300"
        />
      </div>

      {/* 가입 버튼 */}
      <Button
        type="submit"
        className="w-full text-white border-0 h-12 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        style={{background: 'linear-gradient(135deg, #0067ac 0%, #00aec6 100%)'}}
        onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #005a9a 0%, #009bb4 100%)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #0067ac 0%, #00aec6 100%)'}
      >
        가입 성공
      </Button>
    </form>
  )
}
