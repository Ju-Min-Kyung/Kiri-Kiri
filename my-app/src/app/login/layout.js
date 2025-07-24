export default function LoginLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  )
}
