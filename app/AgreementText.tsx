import type { ReactNode } from 'react'

import { type ActiveTab, INTRO_FADE_MS } from './ModeSwitcher'

const visible = 'opacity-100'
const hidden = 'pointer-events-none opacity-0'

export function AgreementText({
  activeTab,
  ModeSwitcherUI,
}: {
  activeTab: ActiveTab
  ModeSwitcherUI: ReactNode
}) {
  const isLeft = activeTab !== 1

  return (
    <div className="max-w-xl text-center mt-24 border-t border-white/10 pt-14 gap-5 flex flex-col">
      {ModeSwitcherUI}

      <div
        className={`mt-8 flex min-h-[26rem] flex-col gap-5 transition-opacity ease-out ${
          activeTab === null ? hidden : visible
        }`}
        style={{ transitionDuration: `${INTRO_FADE_MS}ms` }}
      >
        <Branch
          left={<h2 className="text-[21px] font-semibold">Finding Possible Deals</h2>}
          right={<h2 className="text-[21px] font-semibold">Agreement for Win-Win Deals</h2>}
          {...{ isLeft }}
        />

        <p>
          We each have a <b className="text-cyan-200">private limit</b> —
          <br />
          the seller{`'`}s min and buyer{`'`}s max price to do this deal.
        </p>

        <p>
          We agree to run this process <b className="italic text-yellow-300/93">once</b>, inputting
          our limit.
        </p>

        <Branch
          left={
            <p>
              If there <b className="text-green-300">is an overlap</b>, we&apos;ll both find out—
              <br />
              without revealing our private input.
            </p>
          }
          right={
            <p>
              If there <b className="text-green-300">is an overlap</b>, a win-win price is picked
              within the range, centered on the midpoint, with random noise for privacy.
            </p>
          }
          {...{ isLeft }}
        />

        <p>
          If there{`'`}s <b className="text-pink-300">no overlap</b>, we both walk away with no hard
          feelings.
        </p>

        <div>
          <p>No retries.</p>
          <p>Your best move is your honest limit.</p>
        </div>
      </div>
    </div>
  )
}

function Branch({ isLeft, left, right }: { isLeft: boolean; left: ReactNode; right: ReactNode }) {
  const shared = 'col-start-1 row-start-1 transition-opacity duration-200'

  return (
    <div className="grid items-end">
      <div className={`${shared} ${isLeft ? visible : hidden}`}>{left}</div>
      <div className={`${shared} ${!isLeft ? visible : hidden}`}>{right}</div>
    </div>
  )
}
