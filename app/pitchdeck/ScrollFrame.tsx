'use client'

type ScrollFrameProps = {
  children: React.ReactNode
  className?: string
}

export function ScrollFrame({ children, className = '' }: ScrollFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] ${className}`}
      style={{
        background:
          'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, rgba(0,0,0,0.1) 100%)',
      }}
    >
      <div className="flex h-[400px] snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth md:h-[480px] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-track]:bg-transparent">
        {children}
      </div>
    </div>
  )
}
