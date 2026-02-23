import { SlideWrapper } from './SlideWrapper'

export function Slide9() {
  return (
    <SlideWrapper className="justify-center gap-4 text-center md:gap-6">
      <h2 className="text-xl font-medium text-white/90 md:text-2xl">
        Why now
      </h2>
      <div className="space-y-3 text-gray-400">
        <p>
          Tools for verifiable computation and private inputs are ready.
        </p>
        <p>Time to move from "trust us" to "verify yourself."</p>
      </div>
    </SlideWrapper>
  )
}
