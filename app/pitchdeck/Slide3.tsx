import { SlideWrapper } from './SlideWrapper'

export function Slide3() {
  return (
    <SlideWrapper className="justify-center gap-4 text-center md:gap-6">
      <h2 className="text-xl font-medium text-white/90 md:text-2xl">Easy</h2>
      <p className="text-base text-gray-400 md:text-lg">Simple for voters</p>
      <div className="space-y-3 text-gray-400">
        <p>Simple flows for voters. No crypto required.</p>
        <p>Familiar patterns: request a ballot, cast, confirm.</p>
      </div>
    </SlideWrapper>
  )
}
