'use client'

import { Lock } from 'lucide-react'
import type { ReactNode } from 'react'

export const instructionSteps = [
  <>
    <p>
      You can only submit your value <span className="italic">once</span>.
    </p>
    <p className="flex items-center justify-center gap-2">
      <Lock className="size-[15px] shrink-0 text-white/40" strokeWidth={1.75} />
      Neither side will see the other&apos;s input.
    </p>
  </>,
  <>
    <div className="flex flex-col gap-5 text-left">
      <OutcomeRow icon="✅">
        If there is an overlap, a fair random win-win price will be picked between min &amp; max.
      </OutcomeRow>
      <OutcomeRow icon="❌">If there&apos;s no overlap, no hard feelings.</OutcomeRow>
    </div>
    <Hint>
      Unlike traditional negotiations, both sides&apos; best move here is to enter your honest
      cutoff point, to not miss potential win-win deals. &ldquo;Posturing&rdquo; is a losing
      strategy.
    </Hint>
  </>,
] as const

export function InstructionPanel({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded-2xl border border-cyan-400/10 bg-gradient-to-b from-cyan-400/[0.06] to-cyan-400/[0.02] px-6 py-7 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
      {children}
    </div>
  )
}

function OutcomeRow({ children, icon }: { children: ReactNode; icon: string }) {
  return (
    <div className="flex gap-3">
      <span className="shrink-0 leading-relaxed">{icon}</span>
      <p className="leading-relaxed text-white/60">{children}</p>
    </div>
  )
}

function Hint({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 border-t border-white/[0.06] pt-6 text-left text-sm leading-relaxed text-white/40">
      <span className="text-white/55">Hint:</span> {children}
    </p>
  )
}

export function StepDots({ step, total = 4 }: { step: number; total?: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          className={`h-0.5 w-6 rounded-full transition-colors ${i <= step ? 'bg-white/45' : 'bg-white/10'}`}
          key={i}
        />
      ))}
    </div>
  )
}

export function InstructionStep({
  onBack,
  onNext,
  step,
}: {
  onBack?: () => void
  onNext: () => void
  step: number
}) {
  return (
    <div className="flex flex-col items-center gap-8 w-full px-4">
      <InstructionPanel>
        <div
          className={`flex flex-col gap-4 text-base leading-relaxed text-white/60 ${step === 0 ? 'text-center' : ''}`}
        >
          {instructionSteps[step]}
        </div>
      </InstructionPanel>
      <StepActions onBack={onBack} onClick={onNext} />
    </div>
  )
}

export function StepActions({
  children = 'Next',
  disabled,
  onBack,
  onClick,
}: {
  children?: ReactNode
  disabled?: boolean
  onBack?: () => void
  onClick: () => void
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <StepNext disabled={disabled} onClick={onClick}>
        {children}
      </StepNext>
      {onBack && <StepBack onClick={onBack} />}
    </div>
  )
}

export function StepBack({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="text-sm text-white/30 hover:text-white/50 transition-colors cursor-pointer"
      onClick={onClick}
      type="button"
    >
      Back
    </button>
  )
}

export function StepNext({
  children = 'Next',
  disabled,
  onClick,
}: {
  children?: ReactNode
  disabled?: boolean
  onClick: () => void
}) {
  return (
    <button
      className="min-w-32 px-10 py-2.5 rounded-full text-[15px] font-medium bg-white/80 text-black cursor-pointer hover:bg-white/90 active:bg-white/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}
