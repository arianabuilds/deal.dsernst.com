'use client'

import { useParams, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import type { PlaintextData } from './binaryEncoding'

import { LearnMoreLink } from '../LearnMoreLink'
import { BobSubmission } from './BobSubmission'
import { Input } from './Input'
import { InstructionLog, StepActions, StepDots } from './Instructions'
import { InviteTitle } from './InviteTitle'
import { ResultDisplay } from './ResultDisplay'

type ValidateResponse =
  | { error: string }
  | {
      r: 'b' | 's'
      result?: { hasOverlap: boolean; result: null | number }
      title?: string
      used: boolean
    }

export function BobContent() {
  const params = useParams()
  const pathname = usePathname()
  const payload = readPayloadParam(params?.payload) ?? readPayloadFromPath(pathname)
  const [aliceData, setAliceData] = useState<null | PlaintextData>(null)
  const [bobsValue, setBobsValue] = useState<null | string>(null)
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(0)
  const [existingResult, setExistingResult] = useState<null | {
    hasOverlap: boolean
    result: null | number
  }>(null)
  const prevStep = useRef(0)
  const inputRef = useRef<HTMLDivElement>(null)
  const [inputAnimating, setInputAnimating] = useState(false)

  useEffect(() => {
    const entering = step === 2 && prevStep.current < 2
    if (entering) setInputAnimating(true)
    if (step !== 2) setInputAnimating(false)

    if (entering) {
      const id = window.setTimeout(() => {
        inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
      }, 300)
      prevStep.current = step
      return () => window.clearTimeout(id)
    }

    prevStep.current = step
  }, [step])

  useEffect(() => {
    if (!payload) {
      setError('No payload found in URL')
      return setLoading(false)
    }

    fetch('/async/api/validate', {
      body: JSON.stringify({ payload }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
      .then(async (res) => {
        const data: ValidateResponse = await res.json()
        if (!res.ok) {
          setError('error' in data ? data.error : 'Failed to validate payload')
          return setLoading(false)
        }

        setLoading(false)
        if ('error' in data) return setError(data.error)

        setAliceData({
          r: data.r,
          ...(data.title !== undefined && { title: data.title }),
        } as PlaintextData)

        if (data.used && data.result) setExistingResult(data.result)
      })
      .catch(() => {
        setError('Failed to validate payload')
        setLoading(false)
      })
  }, [payload])

  if (loading)
    return <p className="text-white/35 text-sm tracking-wide animate-pulse">Loading invite...</p>

  if (error || !aliceData) return <p className="text-red-400">{error || 'Invalid payload'}</p>

  if (existingResult) return <ResultDisplay result={existingResult} title={aliceData?.title} />

  const aliceRole = aliceData.r
  const bobRole = aliceRole === 'b' ? 'seller' : 'buyer'

  if (bobsValue)
    return <BobSubmission alicePayload={payload!} bobsValue={bobsValue} onError={setError} />

  return (
    <div className="flex flex-col items-center w-full max-w-md gap-7">
      <InviteTitle subtitle={`You're the potential ${bobRole}.`} title={aliceData.title} />
      <StepDots step={step} total={3} />

      <div className="flex flex-col items-center gap-8 w-full px-4">
        <InstructionLog showAll={step >= 2} step={Math.min(step, 1)} />

        {step < 2 ? (
          <StepActions
            onBack={step > 0 ? () => setStep(step - 1) : undefined}
            onClick={() => setStep(step + 1)}
          />
        ) : (
          <div
            className={`flex w-full scroll-mb-8 flex-col items-center gap-8 ${inputAnimating ? 'instruction-input-in' : ''}`}
            ref={inputRef}
          >
            <Input
              label={`Enter your ${bobRole === 'buyer' ? 'max offer' : 'min price'}`}
              onBack={() => setStep(1)}
              onSubmit={setBobsValue}
            />
            <LearnMoreLink />
          </div>
        )}
      </div>
    </div>
  )
}

function readPayloadFromPath(pathname: null | string) {
  if (!pathname?.startsWith('/b/')) return undefined
  return readPayloadParam(pathname.slice(3))
}

function readPayloadParam(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value.join('/') : value
  if (!raw) return undefined
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}
