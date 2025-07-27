'use client'

import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

interface Props {
  isFollowing: boolean;
  isOwner: boolean;
  followerCount: number;
  followingCount: number;
  postCount: number;
  name: string;
  userId: string;
  bio: string;
  pid: number;
}

export default function ProfileHeader({
  isFollowing,
  isOwner,
  followerCount,
  followingCount,
  postCount,
  name,
  userId,
  bio,
  pid
}: Props) {
  return (
    <div className="flex items-start gap-8">
      <ProfileImage name={name} userId={userId}/>
      <ProfileInfo
        isFollowing={isFollowing}
        isOwner={isOwner}
        followerCount={followerCount}
        followingCount={followingCount}
        postCount={postCount}
        name={name}
        userId={userId}
        bio={bio}
        pid={pid}
      />
    </div>
  );
}
