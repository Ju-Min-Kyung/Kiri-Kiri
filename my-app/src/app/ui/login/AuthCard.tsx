'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, LogOut, Heart, Sparkles, User } from 'lucide-react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import WelcomeCard from './WelcomeCard'

export default function AuthCard() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useState({ name: '', userId: '' })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const userId = formData.get('userId') as string
    
    setIsLoggedIn(true)
    setUserData({ name: '사용자', userId })
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name') as string
    const userId = formData.get('userId') as string
    
    setIsLoggedIn(true)
    setUserData({ name, userId })
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserData({ name: '', userId: '' })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const switchAuthMode = () => {
    setIsLogin(!isLogin)
  }

  if (isLoggedIn) {
    return (
      <WelcomeCard 
        userData={userData} 
        onLogout={handleLogout} 
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-20 left-20 text-[#00aec6]/30 animate-bounce">
        <Heart className="w-6 h-6" fill="currentColor" />
      </div>
      <div className="absolute top-32 right-32 text-[#0067ac]/30 animate-pulse">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute bottom-40 left-40 text-[#00aec6]/30 animate-bounce delay-1000">
        <Heart className="w-4 h-4" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-20 text-[#00aec6]/30 animate-pulse delay-500">
        <Sparkles className="w-6 h-6" />
      </div>
      
      <Card className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-3xl overflow-hidden">
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(0, 103, 172, 0.05) 0%, rgba(0, 174, 198, 0.05) 100%)'}}></div>
        
        <CardHeader className="text-center space-y-6 relative z-10 pt-8">
          <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{background: 'linear-gradient(135deg, #0067ac 0%, #00aec6 100%)'}}>
            {isLogin ? <User className="w-10 h-10 text-white" /> : <Heart className="w-10 h-10 text-white" fill="currentColor" />}
          </div>
          <div>
            <CardTitle className="text-3xl font-light text-white mb-2">
              {isLogin ? '로그인 🌙' : '회원가입 ✨'}
            </CardTitle>
            <CardDescription className="text-gray-300 text-base">
              {isLogin ? 'Kiri-Kiri ' : 'Kiri-Kiri 환영합니다'}
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6 relative z-10 px-8 pb-8">
          {isLogin ? (
            <LoginForm 
              onSubmit={handleLogin}
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
            />
          ) : (
            <SignupForm 
              onSubmit={handleSignup}
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
            />
          )}

          <div className="text-center pt-4 border-t border-gray-700/50">
            <Button
              variant="ghost"
              onClick={switchAuthMode}
              className="text-gray-400 hover:text-white text-sm font-medium hover:bg-gray-800/50 rounded-xl px-6 py-3 transition-all duration-300"
            >
              {isLogin ? '회원가입하기' : '로그인하기'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}