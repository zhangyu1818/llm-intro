import type { ReactNode } from 'react'

import { cn } from '../utils/cn'

export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn('prose-custom max-w-prose text-lg leading-relaxed text-ink/85 md:text-xl md:leading-[1.8]', className)}
    >
      {children}
    </div>
  )
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-5 text-balance">{children}</p>
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mb-5 space-y-2 pl-1">{children}</ul>
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-7 text-balance before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-ember">
      {children}
    </li>
  )
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display mt-10 mb-4 text-2xl font-bold tracking-tight md:text-3xl">
      {children}
    </h3>
  )
}

export function Mark({ children }: { children: ReactNode }) {
  return <span className="underline-sketch px-0.5 font-semibold">{children}</span>
}

export function Pull({ children }: { children: ReactNode }) {
  return (
    <blockquote className="relative my-10 max-w-3xl border-l-4 border-ember py-1 pl-6 md:pl-8">
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -top-5 left-3 text-6xl leading-none text-ember/45 select-none md:-top-6 md:left-5 md:text-7xl"
      >
        “
      </span>
      <p className="font-display relative text-xl leading-[1.85] font-medium text-ink/88 md:text-2xl md:leading-[1.75]">
        {children}
      </p>
    </blockquote>
  )
}
