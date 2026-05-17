import { chapters } from '../data/chapters'
import { useGlobal, useLocale } from '../i18n'
import content from './Outro.i18n'

export function Outro() {
  const t = content[useLocale()]
  const g = useGlobal()

  return (
    <section className="relative overflow-hidden border-t-2 border-ink bg-ink text-paper">
      <div className="overflow-hidden border-b border-paper/15 py-4">
        <div className="animate-marquee flex gap-10 font-display text-2xl whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0 gap-10">
              {t.marqueeLines.map((line) => (
                <span key={`${dup}-${line}`} className="flex items-center gap-10">
                  <span>{line}</span>
                  <span className="text-ember">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <div className="font-mono text-xs tracking-[0.3em] text-paper/60 uppercase">
          {t.eyebrow}
        </div>
        <h2 className="font-display mt-6 text-5xl leading-tight font-extrabold md:text-7xl">
          {t.titleA}<span className="text-sun">{t.titleAccent}</span>
          <span className="block">{t.titleB}</span>
        </h2>
        <p className="font-display mt-8 max-w-2xl text-xl text-paper/75 italic md:text-2xl">
          {t.lead}
        </p>

        <div className="mt-12 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {chapters.slice(1).map((c) => {
            const meta = g.chapterMeta[c.id]
            return (
              <a
                key={c.id}
                className="group flex items-baseline justify-between gap-3 rounded-xl border border-paper/15 bg-paper/5 px-4 py-3 transition hover:bg-paper/10"
                href={`#${c.id}`}
              >
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-paper/55 uppercase">
                    {t.chapterLabelPrefix} {c.index}
                  </div>
                  <div className="text-balance">{meta.title}</div>
                </div>
                <span className="text-paper/40 transition group-hover:text-sun">↑</span>
              </a>
            )
          })}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6 font-mono text-xs tracking-widest text-paper/55 uppercase">
          <span>{t.footerTagline}</span>
          <div className="flex items-center gap-6">
            <a
              className="group inline-flex items-center gap-2 transition hover:text-sun"
              href="https://github.com/zhangyu1818/llm-intro"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4 fill-current transition group-hover:scale-110"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.486 2 12.02c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.606-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.622.069-.61.069-.61 1.003.071 1.531 1.033 1.531 1.033.892 1.532 2.341 1.09 2.91.833.092-.647.35-1.09.636-1.341-2.221-.254-4.555-1.114-4.555-4.958 0-1.095.39-1.99 1.029-2.692-.103-.253-.446-1.273.098-2.654 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.297 2.748-1.027 2.748-1.027.545 1.381.203 2.401.1 2.654.64.702 1.028 1.597 1.028 2.692 0 3.854-2.338 4.701-4.566 4.95.359.31.678.92.678 1.855 0 1.338-.012 2.418-.012 2.747 0 .268.18.578.688.48A10.021 10.021 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z"
                  fillRule="evenodd"
                />
              </svg>
              {t.sourceLabel}
            </a>
            <a className="transition hover:text-sun" href="#hero">
              {t.backToTop}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
