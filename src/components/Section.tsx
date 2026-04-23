import type { ReactNode } from 'react'

interface Props {
  id: string
  index: string
  eyebrow?: string
  title: ReactNode
  caption?: string
  accent?: string
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, caption, accent = '--color-sun', children }: Props) {
  return (
    <section
      id={id}
      data-section={id}
      className="relative min-h-screen px-6 py-24 md:px-12 md:py-32"
      style={{ ['--accent' as string]: `var(${accent})` }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-12 md:mb-20">
          <div className="flex items-baseline gap-4 font-mono text-xs tracking-widest text-ink/55 uppercase">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            <span>Chapter · {index}</span>
            {eyebrow ? <span className="text-ink/40">/ {eyebrow}</span> : null}
          </div>
          <h2 className="font-display mt-4 text-5xl leading-[1.05] font-extrabold tracking-tight text-balance md:text-7xl [&>span+span]:mt-2 md:[&>span+span]:mt-3">
            {title}
          </h2>
          {caption ? (
            <p className="font-display mt-5 max-w-2xl text-xl text-ink/55 italic md:text-2xl">
              — {caption}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}
