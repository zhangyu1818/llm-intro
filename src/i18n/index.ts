import { globalEn } from './global.en'
import { globalZh, type GlobalDict } from './global.zh'
import { useLocale } from './LocaleContext'

const dicts: Record<'en' | 'zh', GlobalDict> = { en: globalEn, zh: globalZh }

export type { Locale } from './LocaleContext'
export { LocaleProvider, useLocale } from './LocaleContext'
export const useGlobal = (): GlobalDict => dicts[useLocale()]
