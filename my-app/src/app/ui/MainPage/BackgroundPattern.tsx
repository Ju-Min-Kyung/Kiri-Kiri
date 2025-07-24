export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#00AEC6] rounded-full blur-3xl" />
      <div className="absolute top-40 right-32 w-48 h-48 bg-[#0067AC] rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-[#00AEC6] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-[#0067AC] rounded-full blur-3xl" />
    </div>
  );
}
