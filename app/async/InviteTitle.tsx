export function InviteTitle({ title }: { title?: string }) {
  if (!title) return null

  return (
    <header className="w-full max-w-lg px-4 text-center -mt-4">
      <p className="text-xl font-light leading-relaxed text-white text-balance">{title}</p>
    </header>
  )
}
