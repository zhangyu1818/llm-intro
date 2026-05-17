import { KeyLine } from '../components/KeyLine'
import { Mark, Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import content from './Chapter12.i18n'

export function Chapter12() {
  const t = content[useLocale()]

  return (
    <Section
      accent="--color-sun"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-12"
      index="13"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-4 md:space-y-5">
            <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
              {t.panel.taskLabel.replace('🎯 ', '')}
            </div>

            <div className="rounded-2xl border-2 border-ink bg-sun/30 px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase mb-1">
                🎯 {t.panel.taskLabel.replace('🎯 ', '')}
              </div>
              <div className="text-sm font-semibold text-ink">
                {t.panel.task}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col rounded-2xl border-2 border-ink bg-paper overflow-hidden">
                <div className="bg-ink/5 px-3 py-2 border-b-2 border-ink/20">
                  <div className="text-[11px] font-semibold text-ink">{t.panel.chatTitle}</div>
                  <div className="text-[10px] text-ink/55 mt-0.5">{t.panel.chatSubtitle}</div>
                </div>

                <div className="flex-1 p-3 space-y-2">
                  <div className="rounded-xl rounded-tl-none border-2 border-ink/25 bg-cream px-3 py-2.5">
                    <p className="text-[11px] leading-relaxed text-ink whitespace-pre-line">
                      {t.panel.chatResponse}
                    </p>
                  </div>
                </div>

                <div className="px-3 pb-3 text-[10px] text-ink/45">
                  {t.panel.chatFooter}<Mark>{t.panel.chatFooterMark}</Mark>
                </div>
              </div>

              <div className="flex flex-col rounded-2xl border-2 border-ink bg-paper overflow-hidden">
                <div className="bg-ink/5 px-3 py-2 border-b-2 border-ink/20">
                  <div className="text-[11px] font-semibold text-ink">{t.panel.doTitle}</div>
                  <div className="text-[10px] text-ink/55 mt-0.5">{t.panel.doSubtitle}</div>
                </div>

                <div className="flex-1 p-3">
                  <div className="space-y-2">
                    {t.panel.doSteps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="relative flex flex-col items-center">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-ink bg-sun text-[10px] shrink-0">
                            {i + 1}
                          </div>
                          {i < t.panel.doSteps.length - 1 && (
                            <div className="w-px flex-1 bg-ink/20 mt-0.5" style={{ height: 10 }} />
                          )}
                        </div>
                        <div className="text-[11px] leading-relaxed text-ink pt-0.5">
                          {step.icon}{' '}
                          {'text' in step ? (
                            step.text
                          ) : (
                            <>
                              {step.textPrefix}
                              <strong>{step.strong}</strong>
                              {step.textSuffix}
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-3 pb-3 text-[10px] text-emerald-700">
                  {t.panel.doFooter}—<span className="font-semibold">{t.panel.doFooterStrong}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-ink bg-ember/15 px-4 py-3">
              <p className="text-[12px] leading-relaxed text-ink whitespace-pre-line">
                {t.panel.bottomNote}
              </p>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}
