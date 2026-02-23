import { SlideWrapper } from './SlideWrapper'

export function Slide2() {
  return (
    <SlideWrapper className="justify-center gap-4 text-center md:gap-6">
      <h2 className="text-xl font-medium text-white/90 md:text-2xl">The problem</h2>
      <div className="space-y-3 text-gray-400">
        <p>Voting today is opaque, slow, and depends on trust in central systems.</p>
        <p>Audits are after the fact. Voters can&apos;t verify their vote was counted.</p>
      </div>
    </SlideWrapper>
  )
}
