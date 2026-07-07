export function InviteTitle({ title }: { title?: string }) {
  if (!title) return null

  return (
    <header className="w-full px-4 text-center -mt-2 mb-1">
      <p className="text-lg font-light tracking-wide text-white text-balance">{title}</p>
    </header>
  )
}
