import { SlideWrapper } from './SlideWrapper'

export function Slide8() {
  return (
    <SlideWrapper className="justify-center gap-4 text-center md:gap-6">
      <h2 className="text-xl font-medium text-white/90 md:text-2xl">
        Use cases
      </h2>
      <div className="space-y-3 text-gray-400">
        <p>Elections, surveys, governance, deal-making.</p>
        <p>
          Any setting where private inputs must lead to a trusted outcome.
        </p>
      </div>
    </SlideWrapper>
  )
}
