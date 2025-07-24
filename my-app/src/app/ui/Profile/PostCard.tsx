import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function PostCard({ index }: { index: number }) {
  return (
    <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square bg-gradient-to-br from-[#00AEC6] to-[#0067AC] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              게시물 {index + 1}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex justify-between items-center text-white text-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>24</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>8</span>
                </div>
              </div>
              <Share2 className="w-4 h-4" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
