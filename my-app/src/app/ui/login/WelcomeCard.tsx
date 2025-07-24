import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, Heart, Sparkles, User } from 'lucide-react'

interface UserData {
  name: string
  userId: string
}

interface WelcomeCardProps {
  userData: UserData
  onLogout: () => void
}

export default function WelcomeCard({ userData, onLogout }: WelcomeCardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute top-20 left-20 text-[#00aec6]/30 animate-bounce">
        <Heart className="w-6 h-6" fill="currentColor" />
      </div>
      <div className="absolute top-32 right-32 text-[#0067ac]/30 animate-pulse">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute bottom-40 left-40 text-[#00aec6]/30 animate-bounce delay-1000">
        <Heart className="w-4 h-4" fill="currentColor" />
      </div>
      
      <Card className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-3xl overflow-hidden">
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(0, 103, 172, 0.05) 0%, rgba(0, 174, 198, 0.05) 100%)'}}></div>
        
        <CardHeader className="text-center space-y-6 relative z-10 pt-8">
          <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{background: 'linear-gradient(135deg, #0067ac 0%, #00aec6 100%)'}}>
            <User className="w-10 h-10 text-white" />
          </div>
          <div>
            <CardTitle className="text-3xl font-light text-white mb-2">
              안녕하세요! 👋
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              {userData.name}님, 반가워요 💕
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6 relative z-10 px-8 pb-8">
          <div className="rounded-2xl p-6 border border-gray-600/30" style={{background: 'linear-gradient(135deg, rgba(0, 103, 172, 0.1) 0%, rgba(0, 174, 198, 0.1) 100%)'}}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  아이디
                </span>
                <span className="text-white font-medium">{userData.userId}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">온라인 ✨</span>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-sm">
              오늘도 좋은 하루 되세요! 🌟
            </p>
            
            <Button 
              onClick={onLogout}
              className="w-full text-white border-0 h-12 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{background: 'linear-gradient(135deg, #0067ac 0%, #00aec6 100%)'}}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #005a9a 0%, #009bb4 100%)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #0067ac 0%, #00aec6 100%)'}
            >
              <LogOut className="w-4 h-4 mr-2" />
              로그아웃 👋
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}