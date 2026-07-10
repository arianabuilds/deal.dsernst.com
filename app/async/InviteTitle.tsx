export function InviteTitle({ subtitle, title }: { subtitle?: string; title?: string }) {
  if (!title) return null

  return (
    <header className="w-full text-center text-[16px] leading-snug sm:text-[17px] sm:leading-relaxed">
      <p className="text-balance text-white/75">{title}</p>
      {subtitle && <p className="mt-1.5 text-white/40 sm:mt-2">{subtitle}</p>}
    </header>
  )
}
