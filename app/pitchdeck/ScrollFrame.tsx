'use client'

type ScrollFrameProps = {
  children: React.ReactNode
  className?: string
}

export function ScrollFrame({ children, className = '' }: ScrollFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] ${className}`}
    >
      <div className="flex h-[400px] snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth md:h-[480px] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-track]:bg-transparent">
        {children}
      </div>
    </div>
  )
}
