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
      <p className="text-slate-400">Even for the highest-stakes environments.</p>

      <div className="flex flex-col items-end gap-4">
        <hr className="mt-10 w-16 border-gray-700" />
        <p className="text-gray-500">Scaling from proven to boring infrastructure.</p>
        <span className="w-fit rounded-full border border-lime-400/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-lime-400">
          SIV.org • Feb 2026
        </span>
      </div>
    </SlideWrapper>
  )
}
