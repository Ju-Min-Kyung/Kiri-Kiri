"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTAButtons() {
  return (
    <div className="mt-12 w-full max-w-sm">
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          asChild
          className="flex-1 py-3 text-base font-semibold bg-gradient-to-r from-[#0067AC] to-[#00AEC6] text-white rounded-full shadow-md"
        >
          <Link href="/login">로그인하기</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 py-3 text-base font-semibold text-blue-950 border-white/30 rounded-full hover:border-[#00AEC6]"
        >
          {/* TODO: signup 페이지 분리*/}
          <Link href="/signup">회원가입하기</Link>
        </Button>
      </div>
    </div>
  );
}
