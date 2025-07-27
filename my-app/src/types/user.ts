export interface UserProfile {
  pid: number; // 내부 DB 식별자 (게시글/팔로우에 필요)
  name: string;
  userId: string;
  bio: string;
  followerCount: number;
  followingCount: number;
  postCount: number;
  isFollowing: boolean;
  isOwner: boolean;
}
