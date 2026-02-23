import { SlideCount } from './SlideCount'
import { SlideWrapper } from './SlideWrapper'

export function Slide1() {
  return (
    <SlideWrapper className="justify-center gap-4">
      <SlideCount n={1} />
      <h2 className="font-serif text-4xl leading-tight md:text-5xl">
        Easy, Safe, Smart
        <br />
        <span className="text-lime-400">Digital Voting</span>
      </h2>
      <p className="text-gray-500">
        Even for the highest-stakes environments.
      </p>
      <hr className="w-16 border-gray-700" />
      <p className="text-gray-500">
        Raising <span className="font-semibold text-lime-400">$5M</span> to
        scale from proven technology to global infrastructure.
      </p>
      <span className="w-fit rounded-full border border-lime-400/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-lime-400">
        Series Seed — 2026
      </span>
    </SlideWrapper>
  )
}
