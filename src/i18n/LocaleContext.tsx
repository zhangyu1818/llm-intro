import { createContext, useContext } from 'react'

export type Locale = 'en' | 'zh'

const LocaleContext = createContext<Locale>('zh')

export const LocaleProvider = LocaleContext.Provider
export const useLocale = () => useContext(LocaleContext)
