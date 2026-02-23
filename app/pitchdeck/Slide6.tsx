import { SlideWrapper } from './SlideWrapper'

export function Slide6() {
  return (
    <SlideWrapper className="justify-center gap-4 text-center md:gap-6">
      <h2 className="text-xl font-medium text-white/90 md:text-2xl">
        How it works
      </h2>
      <div className="space-y-3 text-gray-400">
        <p>
          Request ballot → Cast privately → Tally without learning individual
          votes.
        </p>
        <p>
          Anyone can verify the count; no one can link a ballot to a voter.
        </p>
      </div>
    </SlideWrapper>
  )
}
