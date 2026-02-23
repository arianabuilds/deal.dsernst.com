import { SlideWrapper } from './SlideWrapper'

export function Slide5() {
  return (
    <SlideWrapper className="justify-center gap-4 text-center md:gap-6">
      <h2 className="text-xl font-medium text-white/90 md:text-2xl">Smart</h2>
      <p className="text-base text-gray-400 md:text-lg">
        Verifiable & private
      </p>
      <div className="space-y-3 text-gray-400">
        <p>
          Modern tech: end-to-end verifiability, privacy-preserving tallying.
        </p>
        <p>Transparent process, private votes.</p>
      </div>
    </SlideWrapper>
  )
}
