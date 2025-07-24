import PostCard from "./PostCard";

export default function PostsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {Array.from({ length: 9 }, (_, i) => (
        <PostCard key={i} index={i} />
      ))}
    </div>
  );
}
