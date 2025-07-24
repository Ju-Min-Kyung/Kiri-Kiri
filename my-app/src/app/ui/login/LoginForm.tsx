import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Heart, User } from 'lucide-react'

interface LoginFormProps {
  onSubmit: (e: React.FormEvent) => void
  showPassword: boolean
  onTogglePassword: () => void
}

export default function LoginForm({ onSubmit, showPassword, onTogglePassword }: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
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
          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 h-12 rounded-2xl focus:border-[#00aec6] focus:ring-[#00aec6]/20 transition-all duration-300"
        />
      </div>
      
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
            className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 h-12 rounded-2xl focus:border-[#00aec6] focus:ring-[#00aec6]/20 pr-12 transition-all duration-300"
          />
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