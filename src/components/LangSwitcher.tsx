import { useGlobal, useLocale } from '../i18n'

const ACTIVE = 'text-ink font-bold underline decoration-ember decoration-2 underline-offset-[6px]'
const INACTIVE = 'text-ink/40 transition hover:text-ink'

export function LangSwitcher() {
  const locale = useLocale()
  const g = useGlobal()
  const base = import.meta.env.BASE_URL
  const hash = typeof window === 'undefined' ? '' : window.location.hash
  const zhHref = `${base}${hash}`
  const enHref = `${base}en/${hash}`

  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase">
      <a
        aria-current={locale === 'zh' ? 'true' : undefined}
        className={locale === 'zh' ? ACTIVE : INACTIVE}
        href={zhHref}
      >
        {g.langSwitcher.zh}
      </a>
      <span aria-hidden className="text-ink/20">/</span>
      <a
        aria-current={locale === 'en' ? 'true' : undefined}
        className={locale === 'en' ? ACTIVE : INACTIVE}
        href={enHref}
      >
        {g.langSwitcher.en}
      </a>
    </div>
  )
}
