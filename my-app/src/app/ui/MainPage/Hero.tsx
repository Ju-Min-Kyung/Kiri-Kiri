import { Lock } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="mt-[-20px] mb-4">
        <div className="w-20 h-20 bg-gradient-to-br from-[#0067AC] to-[#00AEC6] rounded-full flex items-center justify-center mx-auto">
          <Lock className="w-10 h-10 text-white" />
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
        우리끼리만 소통하는,
        <br />
        <span className="bg-gradient-to-r from-[#00AEC6] to-[#0067AC] bg-clip-text text-transparent">
          프라이빗한 구독 기반 SNS
        </span>
      </h2>
    </>
  );
}
