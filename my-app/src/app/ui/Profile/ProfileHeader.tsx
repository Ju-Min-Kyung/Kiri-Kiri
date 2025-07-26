import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

interface Props {
  isFollowing: boolean;
  followerCount: number;
  name: string;
  bio: string;
}

export default function ProfileHeader({
  isFollowing,
  followerCount,
  name,
  bio,
}: Props) {
  return (
    <div className="flex items-start gap-8">
      <ProfileImage name={name}/>
      <ProfileInfo
        isFollowing={isFollowing}
        followerCount={followerCount}
        name={name}
        bio={bio}
      />
    </div>
  );
}
