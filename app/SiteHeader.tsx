import Image from 'next/image'

import { description, title } from './constants'

export function SiteHeader() {
  return (
    <header className="mb-2">
      <Image
        alt=""
        className="mx-auto mb-3 h-9 w-9 opacity-75 sm:mb-4 sm:h-11 sm:w-11"
        height={44}
        priority
        src="/apple-icon.png"
        width={44}
      />
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-1.5 text-lg text-white/40">{description}</p>
    </header>
  )
}
