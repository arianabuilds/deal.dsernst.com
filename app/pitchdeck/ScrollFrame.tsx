'use client'

type ScrollFrameProps = {
  children: React.ReactNode
  className?: string
}

export function ScrollFrame({ children, className = '' }: ScrollFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] ${className}`}
    >
      <div className="flex h-[320px] snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth md:h-[380px] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-track]:bg-transparent">
        {children}
      </div>
    </div>
  )
}
