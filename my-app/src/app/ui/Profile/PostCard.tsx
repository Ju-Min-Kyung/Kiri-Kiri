interface Post {
  id: number;
  imageUrl?: string | null;
  mood: string;
  content: string;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="group cursor-pointer border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden rounded-md">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        {post.imageUrl ? (
          <img
            src={`https://picsum.photos/seed/${post.id}/300`}
            alt="게시물 이미지"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">이미지 없음</div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
          <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            {post.mood}
          </span>
        </div>
      </div>
    </div>
  );
}
