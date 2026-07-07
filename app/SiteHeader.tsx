import { description, title } from './constants'

export function SiteHeader() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-1">{title}</h1>
      <p className="text-lg text-white/40 mb-6">{description}</p>
    </>
  )
}
