"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, MoreHorizontal, Grid3X3 } from "lucide-react";
import ProfileHeader from "../ui/Profile/ProfileHeader";
import PostsGrid from "../ui/Profile/PostsGrid";

export default function SNSProfile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(1234);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <div className="space-y-8 bg-gray-50">
      {/* Top Header */}
      <div className="sticky top-0 z-10 bg-white">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#123F6D]">프로필</h1>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-[#123F6D]">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-[#123F6D]">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Card className="mb-8 border-0 shadow-sm bg-white">
          <CardContent className="p-8">
            <ProfileHeader
              isFollowing={isFollowing}
              followerCount={followerCount}
              onToggleFollow={handleFollowToggle}
            />
          </CardContent>
        </Card>

        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Grid3X3 className="w-5 h-5 text-[#123F6D]" />
            <span className="text-lg font-semibold text-[#123F6D]">게시물</span>
          </div>
          <PostsGrid />
        </div>
      </div>
    </div>
  );
}
