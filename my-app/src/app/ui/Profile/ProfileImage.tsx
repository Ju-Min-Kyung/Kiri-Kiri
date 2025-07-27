import { Camera } from "lucide-react";
import Image from "next/image";

export default function ProfileImage({ name, userId }: { name: string; userId: string }) {
  return (
    <div className="relative group">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00AEC6] via-[#0067AC] to-[#123F6D] p-1 shadow-lg">
        <div className="w-full h-full border-4 border-white rounded-full overflow-hidden bg-white">
          <Image
            src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${userId}&cache=true`}
            alt={`${name}의 프로필 이미지`}
            width={128}
            height={128}
            className="w-full h-full rounded-full object-cover"
            unoptimized
          />
        </div>
      </div>
      <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
        <Camera className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}
