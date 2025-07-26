import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";

export default function ProfileImage({ name }:{ name: string }) {
  return (
    <div className="relative group">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00AEC6] via-[#0067AC] to-[#123F6D] p-1 shadow-lg">
        <Avatar className="w-full h-full border-4 border-white">
          <AvatarImage src="/placeholder.svg?height=128&width=128&text=Profile" />
          <AvatarFallback className="bg-gradient-to-br from-[#00AEC6] to-[#0067AC] text-white text-lg font-medium">
            {name}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
        <Camera className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}
