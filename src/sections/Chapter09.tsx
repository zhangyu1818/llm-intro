import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter09.i18n'

type Mode = 'adhoc' | 'skills'

export function Chapter09() {
  const t = content[useLocale()]
  const [mode, setMode] = useState<Mode>('adhoc')
  const [active, setActive] = useState(t.books[0].id)
  const [runs, setRuns] = useState(1)
  const book = t.books.find((b) => b.id === active)!

  const runOne = () => {
    setRuns((r) => (r >= t.adhocVariants.length ? 1 : r + 1))
  }

  return (
    <Section
      accent="--color-violet"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-9"
      index="12"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  {t.interactive.eyebrow}
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  {t.interactive.hint}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-full border-2 border-ink bg-paper p-1">
              <button
                className={cn(
                  'rounded-full px-4 py-2 text-center font-mono text-xs tracking-widest uppercase transition',
                  mode === 'adhoc' ? 'bg-ink text-paper' : 'text-ink/65 hover:text-ink',
                )}
                onClick={() => setMode('adhoc')}
              >
                {t.interactive.tabAdhoc}
              </button>
              <button
                className={cn(
                  'rounded-full px-4 py-2 text-center font-mono text-xs tracking-widest uppercase transition',
                  mode === 'skills' ? 'bg-ink text-paper' : 'text-ink/65 hover:text-ink',
                )}
                onClick={() => setMode('skills')}
              >
                {t.interactive.tabSkill}
              </button>
            </div>

            {mode === 'adhoc' ? (
              <div className="rounded-3xl border-2 border-ink bg-paper p-5 shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-display text-base font-bold">{t.interactive.adhocTitle}</div>
                  <button
                    className="rounded-full border-2 border-ink bg-cream px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition hover:-translate-y-0.5"
                    onClick={runOne}
                  >
                    {t.interactive.adhocRunBtn}
                  </button>
                </div>
                <div className="space-y-2">
                  {t.adhocVariants.slice(0, runs).map((v, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-ink/20 bg-cream/50 px-3 py-2 text-sm"
                    >
                      <span className="font-mono text-[10px] tracking-widest text-ink/50 uppercase">
                        #{i + 1}
                      </span>
                      <span className="flex-1">{v}</span>
                    </div>
                  ))}
                </div>
                {runs >= 2 && (
                  <div className="mt-3 rounded-xl border border-ember bg-ember/10 px-3 py-2 text-xs text-ink/75">
                    {t.interactive.adhocWarning}
                  </div>
                )}
                {runs < t.adhocVariants.length && (
                  <div className="mt-2 font-mono text-[10px] tracking-widest text-ink/45 uppercase">
                    {t.interactive.adhocMore}
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-3xl border-2 border-ink bg-cream p-5 shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-display text-base font-bold">{t.interactive.skillTitle}</div>
                  <span className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                    {t.interactive.skillLibraryTag}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {t.books.map((b) => {
                    const on = b.id === active
                    return (
                      <button
                        key={b.id}
                        className={cn(
                          'relative flex h-28 w-[72px] shrink-0 flex-col items-center justify-between rounded-xl border-2 border-ink py-2 text-center transition-all',
                          on ? '-translate-y-1.5 shadow-card' : 'hover:-translate-y-1',
                        )}
                        style={{ background: b.color }}
                        onClick={() => setActive(b.id)}
                      >
                        <span className="text-xl">{b.icon}</span>
                        <span className="px-1 text-[10px] leading-tight font-semibold text-paper">
                          {b.title}
                        </span>
                        <span className="font-mono text-[8px] tracking-widest text-paper/80 uppercase">
                          SKILL
                        </span>
                        {on && (
                          <span className="absolute -top-2 right-0.5 rounded-full border-2 border-ink bg-paper px-1.5 py-0.5 font-mono text-[8px] tracking-widest uppercase">
                            {t.interactive.skillInUse}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>

                <div
                  className="mt-4 rounded-2xl border-2 border-ink p-3"
                  style={{ background: `${book.color}22` }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink text-lg"
                      style={{ background: book.color }}
                    >
                      {book.icon}
                    </span>
                    <div>
                      <div className="font-display text-base font-bold">{book.title}</div>
                      <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                        {t.interactive.skillLoadedLabel(book.rules.length)}
                      </div>
                    </div>
                  </div>
                  <ul className="mt-2.5 space-y-1.5">
                    {book.rules.map((r, i) => (
                      <li
                        key={r}
                        className="flex items-start gap-2 rounded-xl border border-ink/20 bg-paper/80 px-2.5 py-1.5 text-[12.5px]"
                      >
                        <span
                          className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-ink font-mono text-[9px] font-bold"
                          style={{ background: book.color, color: '#fdf9f1' }}
                        >
                          {i + 1}
                        </span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-2.5 text-xs text-ink/65">
                  {t.interactive.skillFootnote}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}
