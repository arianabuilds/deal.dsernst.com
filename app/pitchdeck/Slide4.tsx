import { SlideWrapper } from './SlideWrapper'

export function Slide4() {
  return (
    <SlideWrapper className="justify-center gap-4 text-center md:gap-6">
      <h2 className="text-xl font-medium text-white/90 md:text-2xl">Safe</h2>
      <p className="text-base text-gray-400 md:text-lg">
        Security & integrity
      </p>
      <div className="space-y-3 text-gray-400">
        <p>Cryptographic integrity. Tamper-evident records.</p>
        <p>End-to-end verifiable without exposing choices.</p>
      </div>
    </SlideWrapper>
  )
}
