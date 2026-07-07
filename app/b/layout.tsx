export default function InviteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center w-full max-w-lg flex-1 justify-center py-6">
      {children}
    </div>
  )
}
