import type { ReactNode } from 'react'

export function KeyLine({ children }: { children: ReactNode }) {
  return (
    <div className="mt-20 border-t border-ink/10 pt-10">
      <div className="font-mono text-xs tracking-[0.3em] text-ink/50 uppercase">
        本章最该记住的一句话
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
