import type { Slide as SlideType } from './slides'

const variantStyles: Record<
  SlideType['variant'],
  { body: string; subtitle: string; title: string }
> = {
  benefit: {
    body: 'text-gray-400',
    subtitle: 'text-base md:text-lg text-gray-400',
    title: 'text-xl md:text-2xl font-medium text-white/90',
  },
  cta: {
    body: 'text-gray-400',
    subtitle: 'text-base md:text-lg text-gray-400',
    title: 'text-2xl md:text-3xl font-semibold text-white',
  },
  how: {
    body: 'text-gray-400',
    subtitle: 'text-base md:text-lg text-gray-400',
    title: 'text-xl md:text-2xl font-medium text-white/90',
  },
  problem: {
    body: 'text-gray-400',
    subtitle: 'text-base md:text-lg text-gray-400',
    title: 'text-xl md:text-2xl font-medium text-white/90',
  },
  title: {
    body: 'text-gray-400',
    subtitle: 'text-base md:text-lg text-gray-400',
    title: 'text-3xl md:text-4xl font-semibold tracking-tight text-white',
  },
}

export function Slide({ slide }: { slide: SlideType }) {
  const {
    body: bodyClass,
    subtitle: subtitleClass,
    title: titleClass,
  } = variantStyles[slide.variant]

  return (
    <div className="flex h-full min-w-full flex-col justify-center gap-4 px-10 py-12 text-center md:gap-6 md:px-14 md:py-16">
      <h2 className={titleClass}>{slide.title}</h2>
      {slide.subtitle && <p className={subtitleClass}>{slide.subtitle}</p>}
      {slide.body?.length ? (
        <div className={`space-y-3 ${bodyClass}`}>
          {slide.body.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
