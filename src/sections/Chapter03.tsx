import { useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter03.i18n'

interface Msg { fromUser: boolean; id: number; text: string; }

const capacity = 5

export function Chapter03() {
  const t = content[useLocale()]
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [forgotten, setForgotten] = useState<Msg[]>([])
  const allRef = useRef<Msg[]>([])
  const idRef = useRef(0)
  const stepRef = useRef(0)

  const addTurn = () => {
    const next = t.scriptedTurns[stepRef.current % t.scriptedTurns.length]
    stepRef.current += 1
    idRef.current += 1
    const newMsg: Msg = { id: idRef.current, ...next }

    const all = [...allRef.current, newMsg]
    allRef.current = all

    const overflowCount = Math.max(0, all.length - capacity)
    setMsgs(all.slice(overflowCount))
    setForgotten(all.slice(0, overflowCount).slice(-12).reverse())
  }

  const reset = () => {
    allRef.current = []
    setMsgs([])
    setForgotten([])
    idRef.current = 0
    stepRef.current = 0
  }

  const confused = forgotten.length >= 3

  return (
    <Section
      accent="--color-violet"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-3"
      index="04"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative min-w-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  {t.interactive.eyebrow}
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  {t.interactive.hint(capacity)}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase hover:bg-cream"
                  onClick={reset}
                >
                  {t.interactive.resetBtn}
                </button>
                <button
                  className="rounded-full border-2 border-ink bg-violet px-4 py-1.5 font-mono text-xs tracking-widest text-paper uppercase hover:-translate-y-0.5"
                  onClick={addTurn}
                >
                  {t.interactive.nextBtn}
                </button>
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-3xl border-2 border-ink bg-violet/10 shadow-card">
              <div className="flex items-center justify-between border-b border-ink/15 bg-violet/15 px-4 py-2 font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                <span>{t.interactive.windowLabel}</span>
                <span>
                  {msgs.length} / {capacity}
                </span>
              </div>

              <div className="relative h-[220px] overflow-hidden px-4 pt-6 pb-5">
                <div className="flex h-full w-full items-end gap-3">
                  {msgs.map((m, i) => {
                    const tilt = (i % 2 === 0 ? -1 : 1) * (1 + (i % 3))
                    return (
                      <div
                        key={m.id}
                        className="flex min-w-0 flex-1 flex-col gap-1 rounded-2xl border-2 border-ink p-3 text-sm shadow-paper transition-all duration-500"
                        style={{
                          background: m.fromUser ? '#ffd7de' : '#fdf9f1',
                          transform: `translateY(0) rotate(${tilt}deg)`,
                        }}
                      >
                        <span className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                          {m.fromUser ? 'you' : 'model'}
                        </span>
                        <span className="line-clamp-3 leading-snug">{m.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="border-t-2 border-dashed border-ink/30 bg-ink/5 px-4 py-3">
                <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                  <span>{t.interactive.forgottenLabel}</span>
                  <span>{t.interactive.forgottenCount(forgotten.length)}</span>
                </div>
                <div className="flex min-h-[60px] flex-wrap gap-2">
                  {forgotten.length === 0 ? (
                    <div className="self-center text-sm text-ink/40">{t.interactive.forgottenEmpty}</div>
                  ) : (
                    forgotten.map((m, i) => (
                      <div
                        key={m.id}
                        className="rounded-xl border border-ink/30 bg-paper/60 px-2.5 py-1 text-xs text-ink/55 line-through opacity-70"
                        style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` }}
                      >
                        {m.text.length > 14 ? `${m.text.slice(0, 14)}…` : m.text}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div
              className={cn(
                'mt-4 rounded-2xl border-2 p-4 transition-all',
                confused ? 'border-ember bg-ember/15' : 'border-ink/15 bg-cream/60',
              )}
            >
              {confused ? (
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">{t.interactive.confusedPrefix}</span>{' '}
                  {t.interactive.confusedBody}
                </p>
              ) : (
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">{t.interactive.stablePrefix}</span>{' '}
                  {t.interactive.stableBody}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}
