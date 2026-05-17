import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import content from './Chapter11.i18n'

export function Chapter11() {
  const t = content[useLocale()]
  const [runs, setRuns] = useState(0)

  const runOne = () => {
    setRuns((r) => (r >= t.answers.length ? 1 : r + 1))
  }

  const reset = () => {
    setRuns(0)
  }

  const visible = t.answers.slice(0, runs)

  return (
    <Section
      accent="--color-violet"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-11"
      index="09"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div
            className="sticky top-24 space-y-4 md:space-y-5"
            style={{ maxHeight: 'calc(100vh - 7rem)', overflowY: 'auto' }}
          >
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

            <div className="rounded-3xl border-2 border-ink bg-paper shadow-card">
              <div className="flex items-center gap-3 rounded-t-3xl border-b-2 border-ink bg-violet/15 px-4 py-3">
                <span className="text-base">📝</span>
                <div className="flex-1">
                  <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                    {t.interactive.questionLabel}
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-ink">
                    {t.interactive.question}
                  </div>
                </div>
                {runs < t.answers.length ? (
                  <button
                    className="shrink-0 rounded-full border-2 border-ink bg-violet/20 px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition hover:-translate-y-0.5 hover:bg-violet/30"
                    onClick={runOne}
                  >
                    {t.interactive.runBtn}
                  </button>
                ) : (
                  <button
                    className="shrink-0 rounded-full border-2 border-ink bg-cream px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition hover:-translate-y-0.5"
                    onClick={reset}
                  >
                    {t.interactive.resetBtn}
                  </button>
                )}
              </div>

              <div className="p-4">
                {runs === 0 ? (
                  <div className="py-6 text-center font-mono text-xs tracking-widest text-ink/35 uppercase">
                    {t.interactive.emptyLabel}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {visible.map((ans, i) => (
                      <div
                        key={i}
                        className="animate-fadeIn rounded-2xl border border-ink/15 bg-cream/60 p-3"
                        style={{
                          animationDelay: `${i * 40}ms`,
                          animationFillMode: 'both',
                        }}
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="mt-0.5 shrink-0 font-mono text-[10px] tracking-widest text-ink/40 uppercase">
                            #{i + 1}
                          </span>
                          <span className="flex-1 text-sm leading-relaxed text-ink">
                            {ans}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <span className="rounded-full border border-leaf/60 bg-leaf/15 px-2 py-0.5 font-mono text-[9px] tracking-wider text-leaf-dark uppercase">
                            {t.interactive.skeletonTag}
                          </span>
                          <span className="rounded-full border border-ink/20 bg-ink/5 px-2 py-0.5 font-mono text-[9px] tracking-wider text-ink/55 uppercase">
                            {t.interactive.phraseDiffTag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {runs >= 3 && (
                  <div className="mt-3 rounded-2xl border border-leaf/40 bg-leaf/10 px-3.5 py-3 text-sm text-ink/80">
                    {t.interactive.observation}
                  </div>
                )}

                {runs > 0 && (
                  <div className="mt-3 font-mono text-[10px] tracking-widest text-ink/35 uppercase">
                    {t.interactive.footNote}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}
