import { description, title } from '../constants'

export default function InviteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center sm:max-w-md">
      <header className="mb-6 mt-10 text-center sm:mb-8 sm:mt-0">
        <p className="text-[15px] leading-snug text-white/50 sm:text-sm">{title}</p>
        <p className="mt-0.5 text-[13px] leading-relaxed text-white/35 sm:text-sm">{description}</p>
      </header>
      {children}
    </div>
  )
}
