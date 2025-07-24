import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

interface Props {
  isFollowing: boolean;
  followerCount: number;
  onToggleFollow: () => void;
}

export default function ProfileHeader({
  isFollowing,
  followerCount,
  onToggleFollow,
}: Props) {
  return (
    <div className="flex items-start gap-8">
      <ProfileImage />
      <ProfileInfo
        isFollowing={isFollowing}
        followerCount={followerCount}
        onToggleFollow={onToggleFollow}
      />
    </div>
  );
}
