import type { ReactNode } from 'react'

import { useGlobal } from '../i18n'

export function KeyLine({ children }: { children: ReactNode }) {
  const g = useGlobal()
  return (
    <div className="mt-20 border-t border-ink/10 pt-10">
      <div className="font-mono text-xs tracking-[0.3em] text-ink/50 uppercase">
        {g.keyLineLabel}
      </div>
      <div className="relative mt-4">
        <div
          aria-hidden
          className="absolute -top-3 -left-6 font-display text-8xl leading-none text-ember/50 select-none md:text-9xl"
        >
          “
        </div>
        <p className="font-display relative z-10 max-w-3xl pl-4 text-2xl leading-[1.4] font-bold text-balance md:text-4xl md:leading-[1.3]">
          {children}
        </p>
      </div>
    </div>
  )
}
