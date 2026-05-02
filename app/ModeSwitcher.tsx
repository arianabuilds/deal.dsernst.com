'use client'

import {
  type ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { Suspense, useCallback, useLayoutEffect, useRef, useState } from 'react'

export const INTRO_FADE_MS = 1000

export type ActiveTab = 0 | 1 | null
type ModeChildren = {
  children: (props: { activeTab: ActiveTab; ModeSwitcherUI: React.ReactNode }) => React.ReactNode
}

export const ModeContainer = ({ children }: ModeChildren) => (
  // <ModeSwitcherState> uses `useSearchParams`,
  // Fine in dev, but `nr build` static prerender requires Suspense.
  <Suspense fallback={null}>
    <ModeSwitcherState {...{ children }} />
  </Suspense>
)

function ModeSwitcherState({ children }: ModeChildren) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<ActiveTab>(null)

  const setUrlParam = useCallback(
    (pick: 0 | 1) => {
      const next = new URLSearchParams(searchParams.toString())
      next.set('pickPrice', String(pick))
      router.replace(`${pathname}?${next}`, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  useLayoutEffect(
    function syncTabFromUrl() {
      const tab = getTabFromUrlState(searchParams)

      // If missing or invalid param, set default
      if (tab === null) return setUrlParam(0) // overlap-only

      setActiveTab(tab)
    },
    [setUrlParam, searchParams],
  )

  return children({
    activeTab,
    ModeSwitcherUI: <ModeSwitcherUI {...{ activeTab, setUrlParam }} />,
  })
}

function ModeSwitcherUI({
  activeTab,
  setUrlParam,
}: {
  activeTab: ActiveTab
  setUrlParam: (pick: 0 | 1) => void
}) {
  const tabsRef = useRef<HTMLButtonElement[]>([])
  const [motion, setMotion] = useState<'fade-in' | 'off' | 'slide'>('off')

  useLayoutEffect(
    function startFadeIn() {
      if (activeTab === null) return // wait for tab to load
      if (motion !== 'off') return // only from init 'off' state
      requestAnimationFrame(() => setMotion('fade-in')) // rAF to wait for 'off' to be committed
    },
    [activeTab, motion],
  )

  const { tabClass, transitionDuration } = (function calcTabClasses() {
    let tabClass: string = ''
    let transitionDuration: string | undefined

    if (motion === 'off') tabClass = 'opacity-0'
    if (motion === 'fade-in') transitionDuration = `${INTRO_FADE_MS}ms`
    if (motion === 'slide') tabClass = 'duration-300 ![transition-property:left,width,opacity]'

    return { tabClass, transitionDuration }
  })()

  return (
    <div className="relative mx-auto flex py-2 px-2 rounded-full bg-neutral-800 backdrop-blur-sm">
      {/* Active tab highlight */}
      <span
        className={`absolute bottom-0 top-0 -z-10 overflow-hidden rounded-3xl bg-gray-200/15 my-2 ease-out transition-opacity ${tabClass}`}
        style={{ ...getActiveTabCoords(activeTab, tabsRef.current), transitionDuration }}
      />

      {/* Tabs */}
      {['Report Overlap Only', 'Pick Price'].map((label, index) => {
        const isActive = activeTab === index

        return (
          <button
            className={`${
              isActive ? '' : 'hover:bg-white/7 active:bg-white/10'
            } transition-colors my-auto cursor-pointer select-none rounded-full px-3.5 mx-0.5 py-1 text-center font-light text-white`}
            key={index}
            onClick={() => {
              setMotion('slide')
              setUrlParam(index as 0 | 1)
            }}
            ref={(el: HTMLButtonElement) => {
              tabsRef.current[index] = el
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

const getTabFromUrlState = (searchParams: ReadonlyURLSearchParams): ActiveTab => {
  const param = searchParams.get('pickPrice')
  if (param === '0') return 0 // overlap-only [default]
  if (param === '1') return 1 // pick price
  return null // missing or invalid
}

const getActiveTabCoords = (activeTab: ActiveTab, tabs: HTMLButtonElement[]) => {
  if (activeTab == null) return {}
  const $tab = tabs[activeTab] ?? {}
  return { left: $tab.offsetLeft, width: $tab.clientWidth }
}
