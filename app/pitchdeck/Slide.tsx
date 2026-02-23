import type { Slide as SlideType } from './slides'

const variantStyles: Record<
  Exclude<SlideType['variant'], 'title'>,
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
}

export function Slide({
  index,
  slide,
  total,
}: {
  index: number
  slide: SlideType
  total: number
}) {
  if (slide.variant === 'title') {
    return (
      <div className="flex h-full min-w-full flex-col justify-center gap-4 px-10 py-12 md:px-14 md:py-16">
        <p className="font-mono text-sm text-gray-500">
          {String(index + 1).padStart(2, '0')} /{' '}
          {String(total).padStart(2, '0')}
        </p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          {slide.title}
          <br />
          <span className="text-lime-400">{slide.subtitle}</span>
        </h2>
        <p className="text-gray-500">
          Even for the highest-stakes environments.
        </p>
        <hr className="w-16 border-gray-700" />
        <p className="text-gray-500">
          Raising{' '}
          <span className="font-semibold text-lime-400">$5M</span> to
          scale from proven technology to global infrastructure.
        </p>
        <span className="w-fit rounded-full border border-lime-400/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-lime-400">
          Series Seed — 2026
        </span>
      </div>
    )
  }

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
