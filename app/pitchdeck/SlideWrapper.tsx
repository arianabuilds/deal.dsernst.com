export function SlideWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex h-full min-w-full flex-col px-10 py-12 md:px-14 md:py-16 ${className}`}
    >
      {children}
    </div>
  )
}
