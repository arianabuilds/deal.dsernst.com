export function InviteTitle({ title }: { title?: string }) {
  if (!title) return null

  const parts = parseInviteTitle(title)

  return (
    <header className="w-full max-w-lg px-4 text-center">
      <p className="text-[clamp(1.5rem,5vw,2.25rem)] font-extralight leading-[1.35] tracking-tight text-balance">
        {parts ? (
          <>
            <span className="text-white">{parts.name}</span>
            <span className="text-white"> invites you to </span>
            <span className="text-white">{parts.deal}</span>
          </>
        ) : (
          <span className="text-white">{title}</span>
        )}
      </p>
    </header>
  )
}

function parseInviteTitle(title: string) {
  const sep = ' invites you to '
  const i = title.indexOf(sep)
  if (i === -1) return null
  return { deal: title.slice(i + sep.length), name: title.slice(0, i) }
}
