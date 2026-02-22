'use client'

import { ScrollFrame } from './ScrollFrame'
import { Slide } from './Slide'
import { slides } from './slides'

export function PitchDeck() {
  return (
    <section className="mb-10 w-full max-w-4xl px-4">
      <ScrollFrame className="w-full">
        {slides.map((slide, i) => (
          <div className="snap-center snap-always shrink-0 basis-full" key={i}>
            <Slide slide={slide} />
          </div>
        ))}
      </ScrollFrame>
    </section>
  )
}
