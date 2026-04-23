import { useEffect, useMemo, useRef } from 'react'

import { chapters } from '../data/chapters'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollProgress } from '../hooks/useScrollProgress'

const CHAPTER_IDS = chapters.map((c) => c.id)

export function Navigator() {
  const active = useActiveSection(CHAPTER_IDS)
  const progressRef = useScrollProgress()
  const headerBgRef = useRef<HTMLDivElement | null>(null)
  const activeChapter = useMemo(
    () => chapters.find((c) => c.id === active) ?? null,
    [active],
  )

  useEffect(() => {
    const onScroll = () => {
      if (headerBgRef.current) {
        headerBgRef.current.style.opacity = window.scrollY > 24 ? '1' : '0'
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div
        ref={headerBgRef}
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-24 transition-opacity duration-200 ease-out md:h-28"
        style={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--color-paper) 0%, rgba(253,249,241,0.55) 50%, rgba(253,249,241,0) 100%)',
            opacity: 0.75,
          }}
        />
      </div>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1">
        <div
          ref={progressRef}
          className="h-full bg-ember origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <aside className="pointer-events-none fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 lg:block">
        <ul className="pointer-events-auto flex flex-col gap-3">
          {chapters.map((c) => {
            const on = active === c.id
            return (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="group flex items-center gap-3"
                  aria-label={`${c.index} ${c.title}`}
                >
                  <span
                    className={`font-mono text-[10px] tracking-widest transition-all ${
                      on
                        ? 'text-ink opacity-100'
                        : 'text-ink/50 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {c.index}
                  </span>
                  <span
                    className={`inline-block rounded-full border border-ink transition-all ${
                      on ? 'h-3 w-3 bg-ember' : 'h-2 w-2 bg-paper group-hover:bg-sun'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </aside>

      <header className="fixed inset-x-0 top-1 z-50 flex items-center justify-between gap-4 px-5 py-3 md:px-10">
        <a
          href="#hero"
          className="flex min-w-0 items-center gap-2 font-display"
          aria-label="回到开头"
        >
          {active === 'hero' || !activeChapter ? (
            <span
              key="brand"
              className="animate-header-fade text-lg font-bold tracking-tight md:text-xl"
            >
              看懂大模型<span className="text-ember">.</span>
            </span>
          ) : (
            <span
              key={activeChapter.id}
              className="animate-header-fade block min-w-0 truncate text-base leading-tight font-semibold text-ink md:text-lg"
            >
              {activeChapter.title}
            </span>
          )}
        </a>
        <div className="shrink-0 font-mono text-xs tracking-widest text-ink/60">
          {activeChapter?.index ?? '00'}
          <span className="mx-2">/</span>
          {chapters[chapters.length - 1].index}
        </div>
      </header>
    </>
  )
}
