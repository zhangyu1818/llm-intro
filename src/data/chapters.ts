import type { ChapterId } from '../i18n/global.zh'

export interface ChapterMeta {
  readonly accent: string
  readonly id: ChapterId
  readonly index: string
}

export const chapters = [
  { id: 'hero', accent: '--color-sun', index: '00' },
  { id: 'ch-0', accent: '--color-ember', index: '01' },
  { id: 'ch-1', accent: '--color-rose', index: '02' },
  { id: 'ch-2', accent: '--color-sky', index: '03' },
  { id: 'ch-3', accent: '--color-violet', index: '04' },
  { id: 'ch-4', accent: '--color-leaf', index: '05' },
  { id: 'ch-5', accent: '--color-sun', index: '06' },
  { id: 'ch-10', accent: '--color-rose', index: '07' },
  { id: 'ch-6', accent: '--color-ember', index: '08' },
  { id: 'ch-11', accent: '--color-violet', index: '09' },
  { id: 'ch-7', accent: '--color-sky', index: '10' },
  { id: 'ch-8', accent: '--color-leaf', index: '11' },
  { id: 'ch-9', accent: '--color-violet', index: '12' },
  { id: 'ch-12', accent: '--color-sun', index: '13' },
  { id: 'ch-13', accent: '--color-leaf', index: '14' },
  { id: 'ch-14', accent: '--color-ember', index: '15' },
  { id: 'ch-15', accent: '--color-sky', index: '16' },
  { id: 'ch-16', accent: '--color-rose', index: '17' },
] as const satisfies readonly ChapterMeta[]
