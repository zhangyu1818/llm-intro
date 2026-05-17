import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter10.i18n'

type Mode = 'direct' | 'thinking'

export function Chapter10() {
  const t = content[useLocale()]
  const [mode, setMode] = useState<Mode>('direct')

  return (
    <Section
      accent="--color-rose"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-10"
      index="07"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div
            className="sticky top-24 space-y-4 md:space-y-5"
            style={{ maxHeight: 'calc(100vh - 7rem)', overflow: 'hidden' }}
          >
            <div>
              <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                {t.interactive.eyebrow}
              </div>
              <p className="mt-1 text-sm text-ink/70">{t.interactive.hint}</p>
            </div>

            <div className="rounded-2xl border-2 border-ink bg-cream px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase mb-1.5">
                {t.interactive.questionLabel}
              </div>
              <p className="text-sm leading-relaxed text-ink">
                {t.interactive.questionText}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-full border-2 border-ink bg-paper p-1">
              <button
                className={cn(
                  'rounded-full px-4 py-2 text-center font-mono text-xs tracking-widest uppercase transition',
                  mode === 'direct' ? 'bg-ink text-paper' : 'text-ink/65 hover:text-ink',
                )}
                onClick={() => setMode('direct')}
              >
                {t.interactive.tabDirect}
              </button>
              <button
                className={cn(
                  'rounded-full px-4 py-2 text-center font-mono text-xs tracking-widest uppercase transition',
                  mode === 'thinking' ? 'bg-rose-500 text-paper' : 'text-ink/65 hover:text-ink',
                )}
                onClick={() => setMode('thinking')}
              >
                {t.interactive.tabThinking}
              </button>
            </div>

            <div className="transition-all duration-300">
              {mode === 'direct' ? (
                <div className="rounded-3xl border-2 border-ink bg-paper p-4 shadow-card">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    <span className="rounded-full border border-ink/30 bg-cream px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                      {t.interactive.directBadge}
                    </span>
                  </div>
                  <div className="rounded-2xl border border-ink/20 bg-cream/60 px-4 py-3 text-base font-semibold text-ink">
                    {t.interactive.directAnswer}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-ink/60">
                    {t.interactive.directNote}
                  </p>
                </div>
              ) : (
                <div className="rounded-3xl border-2 border-rose-500 bg-rose-50/40 p-4 shadow-card">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🧠</span>
                    <span className="rounded-full border border-rose-400 bg-rose-100 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-rose-700 uppercase">
                      {t.interactive.thinkingBadge}
                    </span>
                  </div>
                  <div className="rounded-xl border border-ink/15 bg-ink/5 px-3 py-2.5 font-mono text-xs leading-loose text-ink/75">
                    <div className="mb-1 font-sans text-[10px] tracking-widest text-ink/45 uppercase">
                      {t.interactive.thinkingLabel}
                    </div>
                    <div>{t.interactive.thinkingLine1}</div>
                    <div>{t.interactive.thinkingLine2}</div>
                    <div>{t.interactive.thinkingLine3}</div>
                  </div>
                  <div className="mt-2.5 rounded-2xl border-2 border-rose-400 bg-rose-100/60 px-4 py-2.5 text-base font-semibold text-rose-800">
                    {t.interactive.thinkingAnswer}
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-ink/60">
                    {t.interactive.thinkingNote}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-[10px] tracking-widest text-ink/45 uppercase self-center">
                  {t.interactive.hotPrefix}
                </span>
                {t.hotBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-rose-400 bg-rose-100 px-2.5 py-0.5 text-xs text-rose-700"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-[10px] tracking-widest text-ink/45 uppercase self-center">
                  {t.interactive.coldPrefix}
                </span>
                {t.coldBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-ink/20 bg-cream px-2.5 py-0.5 text-xs text-ink/65"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}
