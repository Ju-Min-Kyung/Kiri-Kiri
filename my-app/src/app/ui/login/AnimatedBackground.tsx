'use client'

import { Heart, Sparkles } from 'lucide-react'
import React from 'react'

export default function AnimatedBackground() {
  return (
    <>
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
    </>
  )
}
