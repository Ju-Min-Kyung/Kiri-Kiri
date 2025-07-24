"use client";

import { Button } from "@/components/ui/button";
import { Users, Lock, Heart, Camera } from "lucide-react";

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00AEC6] rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-[#0067AC] rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-[#00AEC6] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-[#0067AC] rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-4 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0067AC] to-[#00AEC6] rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">끼리끼리</h1>
        </div>
        <Button
          variant="ghost"
          className="text-white text-sm hover:text-[#00AEC6]"
        >
          한국어
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-start items-center text-center px-4 pt-12 z-10">
        {/* Hero Icon */}
        <div className="mt-[-20px] mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#0067AC] to-[#00AEC6] rounded-full flex items-center justify-center mx-auto">
            <Lock className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
          우리끼리만 소통하는,
          <br />
          <span className="bg-gradient-to-r from-[#00AEC6] to-[#0067AC] bg-clip-text text-transparent">
            프라이빗한 구독 기반 SNS
          </span>
        </h2>

        {/* CTA Buttons */}
        <div className="mt-12 w-full max-w-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 py-3 text-base font-semibold bg-gradient-to-r from-[#0067AC] to-[#00AEC6] text-white rounded-full shadow-md">
              로그인하기
            </Button>
            <Button
              variant="outline"
              className="flex-1 py-3 text-base font-semibold text-blue-950 border-white/30 rounded-full hover:border-[#00AEC6]"
            >
              회원가입하기
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-5xl w-full px-4">
          {[
            {
              icon: <Lock className="w-6 h-6 text-white" />,
              title: "프라이빗",
              desc: "초대받은 사람만 참여할 수 있는 폐쇄형 커뮤니티",
            },
            {
              icon: <Heart className="w-6 h-6 text-white" />,
              title: "진정성",
              desc: "가까운 사람들과 진솔한 이야기를 나누세요",
            },
            {
              icon: <Camera className="w-6 h-6 text-white" />,
              title: "특별한 순간",
              desc: "소중한 사람들과만 공유하는 일상의 특별함",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="text-white text-center space-y-2">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#0067AC] to-[#00AEC6] rounded-full flex items-center justify-center">
                {icon}
              </div>
              <h3 className="font-semibold text-base">{title}</h3>
              <p className="text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-xs py-3 z-10">
        &copy; 2025 끼리끼리. 우리만의 특별한 공간.
      </footer>
    </div>
  );
}
