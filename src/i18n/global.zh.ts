export type ChapterId =
  | 'ch-0'
  | 'ch-1'
  | 'ch-2'
  | 'ch-3'
  | 'ch-4'
  | 'ch-5'
  | 'ch-6'
  | 'ch-7'
  | 'ch-8'
  | 'ch-9'
  | 'ch-10'
  | 'ch-11'
  | 'ch-12'
  | 'ch-13'
  | 'ch-14'
  | 'ch-15'
  | 'ch-16'
  | 'hero'

export interface ChapterLocaleMeta {
  caption: string
  title: string
}

export interface GlobalDict {
  backToHero: string
  brand: string
  brandSuffix: string
  chapterMeta: Record<ChapterId, ChapterLocaleMeta>
  keyLineLabel: string
  langSwitcher: {
    en: string
    zh: string
  }
}

export const globalZh: GlobalDict = {
  backToHero: '回到开头',
  brand: '看懂大模型',
  brandSuffix: '.',
  keyLineLabel: '本章最该记住的一句话',
  chapterMeta: {
    'ch-0': { caption: '先纠正最常见的一个错觉', title: '它不在脑子里记着你' },
    'ch-1': { caption: '不是记住，是又看了一遍', title: '它怎么能一直接得上话' },
    'ch-2': { caption: '上下文长度 = 桌面大小', title: '聊天记录不是无限叠加' },
    'ch-3': { caption: '那段内容被挤出去了', title: '聊久了为什么会"忘"' },
    'ch-4': { caption: '停下来整理，再往前走', title: '上下文不够了怎么办' },
    'ch-5': { caption: '训练时见得多，但学完就停了', title: '它怎么会知道这么多' },
    'ch-6': { caption: '高估它，比低估它更容易踩坑', title: '它也会一本正经地说错' },
    'ch-7': { caption: '你递得越清楚，它答得越稳', title: '一次把问题说清楚' },
    'ch-8': { caption: '联网、工具、MCP', title: '让它够到外部世界' },
    'ch-9': { caption: '一份说明书，按任务取用', title: 'Skills · 把重复说的话沉淀下来' },
    'ch-10': { caption: '快问题用小号，难题让它慢下来', title: '它有大中小号，还会"多想一会儿"' },
    'ch-11': { caption: '一点点随机，是默认的', title: '同一个问题，答两次也会不一样' },
    'ch-12': { caption: '从"一问一答"到"自己做事"', title: '它开始自己动手' },
    'ch-13': { caption: '不是一次答完——而是一直在循环', title: '想 → 做 → 看：它在循环' },
    'ch-14': { caption: '让它跑得动，但别让它跑飞', title: '自由，但别脱缰' },
    'ch-15': { caption: '一个人忙不过来，就喊帮手', title: '一个 agent 还能叫帮手' },
    'ch-16': { caption: '从概念到日常 · 你会在哪里遇到', title: '它变成了谁' },
    'hero': { caption: '先把直觉放对位置', title: '看懂大模型' },
  },
  langSwitcher: {
    en: 'EN',
    zh: 'ZH',
  },
}
