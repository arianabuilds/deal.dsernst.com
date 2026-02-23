import { SlideWrapper } from './SlideWrapper'

export function Slide7() {
  return (
    <SlideWrapper className="justify-center gap-4 text-center md:gap-6">
      <h2 className="text-xl font-medium text-white/90 md:text-2xl">
        Privacy & verifiability
      </h2>
      <div className="space-y-3 text-gray-400">
        <p>Your vote is secret. The outcome is public and checkable.</p>
        <p>Cryptography gives both, at once.</p>
      </div>
    </SlideWrapper>
  )
}
