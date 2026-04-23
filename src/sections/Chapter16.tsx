import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

interface Tool {
  name: string
  maker: string
  oneliner: string
}

interface Scene {
  id: string
  icon: string
  short: string
  title: string
  doing: string
  tools: Tool[]
  accent: string
}

const scenes: Scene[] = [
  {
    id: 'code',
    icon: '🧑‍💻',
    short: '改代码',
    title: '我要改一段代码',
    doing:
      '读你的代码 → 定位问题 → 动手改 → 跑测试 → 把改动整理成 PR。整个过程你坐着看它干。',
    tools: [
      { name: 'Claude Code',  maker: 'Anthropic', oneliner: '命令行里的编码助手 · Plan Mode / 权限 / 家规 / Skills 一整套都在这' },
      { name: 'Cursor / Windsurf', maker: 'Cursor · Codeium', oneliner: 'AI 直接装进编辑器，左边写代码右边对话' },
      { name: 'Codex CLI',    maker: 'OpenAI',    oneliner: '命令行的代码代理，思路和 Claude Code 类似' },
    ],
    accent: 'bg-sky/15 border-sky',
  },
  {
    id: 'daily',
    icon: '📬',
    short: '定时帮忙',
    title: '我要它每天帮我整理邮件',
    doing:
      '定时打开你的收件箱 → 过一遍 → 挑出重要的 → 用你定的格式写成摘要发给你。你睡觉它干活。',
    tools: [
      { name: 'ChatGPT Tasks', maker: 'OpenAI', oneliner: '定时跑任务，说一次以后自动按计划做' },
    ],
    accent: 'bg-sun/20 border-sun',
  },
  {
    id: 'browser',
    icon: '🌐',
    short: '刷网页',
    title: '我要它帮我刷网页、查资料、下单',
    doing:
      '自己打开浏览器 → 点开网页 → 填表格 → 比价 → 该下单时停下来问你。',
    tools: [
      { name: '浏览器 agent', maker: 'ChatGPT Atlas · Browser Use 等',  oneliner: '内嵌在浏览器里的 agent，看得见你的页面' },
    ],
    accent: 'bg-leaf/20 border-leaf',
  },
  {
    id: 'computer',
    icon: '🖱',
    short: '动电脑',
    title: '我要它看着屏幕动鼠标键盘',
    doing:
      '像真人一样操作你的电脑——看屏幕、挪鼠标、敲键盘。目前还比较新，限制不少，演示价值大于日常价值。',
    tools: [
      { name: 'Computer Use', maker: 'Anthropic', oneliner: '让模型直接看屏幕、动鼠标键盘的实验能力' },
    ],
    accent: 'bg-violet/20 border-violet',
  },
  {
    id: 'embedded',
    icon: '🏢',
    short: '办公软件',
    title: '我每天用的办公软件里就有',
    doing:
      '读这一页文档 → 出摘要 / 续写 / 翻译 / 整理表格 / 生成幻灯片。你可能已经在用，只是没想过这也是 agent。',
    tools: [
      { name: 'Word · Excel · PPT', maker: 'Microsoft 365 Copilot', oneliner: '文档、表格、幻灯片里的 AI 按钮' },
      { name: '飞书 · 语雀 · 石墨', maker: '国内办公协作', oneliner: '国产办公产品里的 AI 写作 / 整理助手' },
      { name: 'Notion AI',           maker: 'Notion',         oneliner: '笔记/文档场景里的轻量 agent' },
    ],
    accent: 'bg-rose/20 border-rose',
  },
]

export function Chapter16() {
  const [active, setActive] = useState(scenes[0].id)
  const scene = scenes.find((s) => s.id === active)!

  return (
    <Section
      id="ch-16"
      index="17"
      eyebrow="从概念到日常"
      caption="别问「agent 都有哪些」——问「我这个情况能让谁帮忙」"
      accent="--color-rose"
      title={
        <>
          <span className="block">它变成了</span>
          <span className="block">
            <span className="text-ember">谁</span>？
          </span>
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            概念、循环、边界、协作——都讲完了。最后一问：这些 agent 到底<Mark>长在哪里</Mark>？你什么时候会遇到？
          </P>

          <H3>别问「agent 都有哪些」——</H3>
          <H3>问「我这个情况能让谁帮忙」</H3>
          <P>
            产品名字太多、换得也快，记不住。你真正要学的，是一个<Mark>换位思考的习惯</Mark>：
          </P>
          <P>
            <strong>我想让它做什么 → 它大概是哪一类工具？</strong>
          </P>
          <P>右边那个小面板把常见的几类场景列出来了——换一下，看每类场景里长出了哪些产品。</P>

          <H3>不写代码的人也值得知道</H3>
          <P>
            越来越多的办公产品都在长出 agent 按钮——写邮件、整理表格、生成幻灯片……<Mark>你可能已经在用，只是没想过这也是 agent。</Mark>
          </P>
          <P>
            知道 agent 的心智之后，任何新冒出的产品，一眼就能看懂它在干什么。
          </P>

          <Pull>学的不是产品名字，学的是"看懂产品在干什么"的能力。</Pull>

          <H3>合上这本书，带走什么</H3>
          <P>书到这里就结束了。把下面这五个问题收进口袋——以后用任何 agent 工具，它们都会派上用场：</P>
          <UL>
            <LI><strong>它这次能看到什么？</strong>（上下文）</LI>
            <LI><strong>我递的材料够不够？</strong>（提示词）</LI>
            <LI><strong>这件事它答完就行，还是要动手做？</strong>（agent 与否）</LI>
            <LI><strong>它动手之前，我要不要先看计划？</strong>（审批）</LI>
            <LI><strong>最后的结果，我还要不要再核一下？</strong>（幻觉）</LI>
          </UL>
          <P>下一次冒出来什么新工具——<Mark>这五个问题，都还用得上</Mark>。</P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-3">
            <div>
              <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                interactive · 换个角度 · 按你要做什么找
              </div>
              <p className="mt-1 text-sm text-ink/70">
                点一个场景，看看这类问题里长出了哪些工具。
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {scenes.map((s) => {
                const on = s.id === active
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`flex items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1.5 text-xs font-semibold transition-all ${
                      on
                        ? 'bg-ink text-paper shadow-card'
                        : 'bg-paper text-ink/70 hover:-translate-y-0.5'
                    }`}
                  >
                    <span className="text-sm leading-none">{s.icon}</span>
                    <span>{s.short}</span>
                  </button>
                )
              })}
            </div>

            <div className={`rounded-3xl border-2 p-4 shadow-card ${scene.accent}`}>
              <div className="flex items-start gap-3">
                <span className="text-3xl leading-none">{scene.icon}</span>
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                    场景
                  </div>
                  <div className="font-display text-lg leading-tight font-bold">
                    {scene.title}
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-ink/15 bg-paper/80 px-3 py-2">
                <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                  🤖 它具体会帮你
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-ink/85">{scene.doing}</p>
              </div>

              <div className="mt-3">
                <div className="mb-1.5 font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                  · 这类里常见的工具
                </div>
                <div className="space-y-1.5">
                  {scene.tools.map((t) => (
                    <div
                      key={t.name}
                      className="rounded-xl border-2 border-ink bg-paper px-3 py-1.5"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-display text-[13px] font-bold">{t.name}</span>
                        <span className="font-mono text-[9px] tracking-widest text-ink/50 uppercase">
                          {t.maker}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[11px] leading-snug text-ink/70">
                        {t.oneliner}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-ink bg-cream px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                🧳 合上书，带走的 5 个问题
              </div>
              <ol className="mt-1.5 space-y-0.5 text-[11.5px] leading-snug text-ink/80">
                <li>· 它这次能<strong>看到</strong>什么？</li>
                <li>· 我递的<strong>材料够不够</strong>？</li>
                <li>· 它<strong>答完就行</strong>，还是要<strong>动手做</strong>？</li>
                <li>· 它动手前，要不要<strong>先看计划</strong>？</li>
                <li>· 最后的结果，要不要<strong>再核一下</strong>？</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        合上书，带走五个问题——它能看到什么、我给够没、要它说还是要它做、动手前要不要先看计划、结果要不要再核。产品会变，这几个问题不会。
      </KeyLine>
    </Section>
  )
}
