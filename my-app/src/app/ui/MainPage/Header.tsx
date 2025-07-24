import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
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
  );
}
