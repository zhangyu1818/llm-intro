export interface ChapterMeta {
  id: string
  index: string
  title: string
  caption: string
  accent: string
}

export const chapters: ChapterMeta[] = [
  {
    id: 'hero',
    index: '00',
    title: '看懂大模型',
    caption: '先把直觉放对位置',
    accent: '--color-sun',
  },
  {
    id: 'ch-0',
    index: '01',
    title: '它不在脑子里记着你',
    caption: '先纠正最常见的一个错觉',
    accent: '--color-ember',
  },
  {
    id: 'ch-1',
    index: '02',
    title: '它怎么能一直接得上话',
    caption: '不是记住，是又看了一遍',
    accent: '--color-rose',
  },
  {
    id: 'ch-2',
    index: '03',
    title: '聊天记录不是无限叠加',
    caption: '上下文长度 = 桌面大小',
    accent: '--color-sky',
  },
  {
    id: 'ch-3',
    index: '04',
    title: '聊久了为什么会"忘"',
    caption: '那段内容被挤出去了',
    accent: '--color-violet',
  },
  {
    id: 'ch-4',
    index: '05',
    title: '上下文不够了怎么办',
    caption: '停下来整理，再往前走',
    accent: '--color-leaf',
  },
  {
    id: 'ch-5',
    index: '06',
    title: '它怎么会知道这么多',
    caption: '训练时见得多，但学完就停了',
    accent: '--color-sun',
  },
  {
    id: 'ch-10',
    index: '07',
    title: '它有大中小号，还会"多想一会儿"',
    caption: '快问题用小号，难题让它慢下来',
    accent: '--color-rose',
  },
  {
    id: 'ch-6',
    index: '08',
    title: '它也会一本正经地说错',
    caption: '高估它，比低估它更容易踩坑',
    accent: '--color-ember',
  },
  {
    id: 'ch-11',
    index: '09',
    title: '同一个问题，答两次也会不一样',
    caption: '一点点随机，是默认的',
    accent: '--color-violet',
  },
  {
    id: 'ch-7',
    index: '10',
    title: '一次把问题说清楚',
    caption: '你递得越清楚，它答得越稳',
    accent: '--color-sky',
  },
  {
    id: 'ch-8',
    index: '11',
    title: '让它够到外部世界',
    caption: '联网、工具、MCP',
    accent: '--color-leaf',
  },
  {
    id: 'ch-9',
    index: '12',
    title: 'Skills · 把重复说的话沉淀下来',
    caption: '一份说明书，按任务取用',
    accent: '--color-violet',
  },
  {
    id: 'ch-12',
    index: '13',
    title: '它开始自己动手',
    caption: '从"一问一答"到"自己做事"',
    accent: '--color-sun',
  },
  {
    id: 'ch-13',
    index: '14',
    title: '想 → 做 → 看：它在循环',
    caption: '不是一次答完——而是一直在循环',
    accent: '--color-leaf',
  },
  {
    id: 'ch-14',
    index: '15',
    title: '自由，但别脱缰',
    caption: '让它跑得动，但别让它跑飞',
    accent: '--color-ember',
  },
  {
    id: 'ch-15',
    index: '16',
    title: '一个 agent 还能叫帮手',
    caption: '一个人忙不过来，就喊帮手',
    accent: '--color-sky',
  },
  {
    id: 'ch-16',
    index: '17',
    title: '它变成了谁',
    caption: '从概念到日常 · 你会在哪里遇到',
    accent: '--color-rose',
  },
]
