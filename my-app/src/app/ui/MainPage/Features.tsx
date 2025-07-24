import { Lock, Heart, Camera } from "lucide-react";

const features = [
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
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-5xl w-full px-4">
      {features.map(({ icon, title, desc }) => (
        <div key={title} className="text-white text-center space-y-2">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#0067AC] to-[#00AEC6] rounded-full flex items-center justify-center">
            {icon}
          </div>
          <h3 className="font-semibold text-base">{title}</h3>
          <p className="text-sm text-gray-300">{desc}</p>
        </div>
      ))}
    </div>
  );
}
