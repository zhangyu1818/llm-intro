import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

type Mode = 'direct' | 'thinking'

const hotBadges = ['数学题', '多步推理', '权衡取舍']
const coldBadges = ['闲聊', '查事实', '简单格式整理']

export function Chapter10() {
  const [mode, setMode] = useState<Mode>('direct')

  return (
    <Section
      id="ch-10"
      index="07"
      eyebrow="挑对号，它更省力"
      caption="快问题用小号，难题让它慢下来"
      accent="--color-rose"
      title={
        <>
          <span className="block">它其实有大中小号，</span>
          <span className="block">
            还会<span className="text-ember">"多想一会儿"</span>。
          </span>
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            进入 ChatGPT、Claude 这类产品，常看到一个下拉框能选不同"型号"——Opus / Sonnet / Haiku，或者 GPT-5 / mini / nano——为什么会有这么多型号？
          </P>

          <Pull>不是模型越大越好——而是不同尺寸，各有擅长的场景。</Pull>

          <H3>一条朴素规律</H3>
          <P>
            <Mark>大 = 更稳但更慢更贵；小 = 更快更便宜，但遇到难题容易翻车。</Mark>
          </P>
          <P>日常心智很简单：</P>
          <UL>
            <LI>闲聊、改错别字、整理格式 → 用快的小号</LI>
            <LI>写方案、做分析、复杂推理 → 用强的大号</LI>
            <LI>"永远用最贵的"反而不是聪明用法</LI>
          </UL>

          <H3>第二个维度 · 让它"慢下来想清楚再答"</H3>
          <P>
            现代模型有一种模式——让它先写一段"草稿思路"，再给正式答案。这叫 <Mark>Thinking 模式</Mark>（深度思考）。
          </P>
          <P>
            像考试时有人直接写答案，有人先在草稿纸上列式子；列式子的不一定更聪明，但<strong>难题更稳</strong>。
          </P>

          <H3>什么时候开 / 什么时候别开</H3>
          <UL>
            <LI>要开：数学 / 逻辑题、需要分步推理、多条件权衡</LI>
            <LI>别开：闲聊、查一条事实、写一段简单文字——开了慢半拍，还不见得更对</LI>
          </UL>

          <H3>关键认知</H3>
          <P>
            <Mark>想得久 ≠ 答得对</Mark>。对事实性问题，它想 10 分钟也可能是凭感觉在编——Thinking 对"推理"有帮助，对"知识正确"帮助有限。
          </P>
        </Prose>

        <div className="relative">
          <div
            className="sticky top-24 space-y-4 md:space-y-5"
            style={{ maxHeight: 'calc(100vh - 7rem)', overflow: 'hidden' }}
          >
            <div>
              <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                interactive · 同一道题，两种模式
              </div>
              <p className="mt-1 text-sm text-ink/70">切换看看，推理题开 Thinking 有什么不同。</p>
            </div>

            <div className="rounded-2xl border-2 border-ink bg-cream px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase mb-1.5">
                题目
              </div>
              <p className="text-sm leading-relaxed text-ink">
                3 个工人 5 天做 60 件货，同样节奏，5 个工人 7 天能做多少？
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-full border-2 border-ink bg-paper p-1">
              <button
                onClick={() => setMode('direct')}
                className={`rounded-full px-4 py-2 text-center font-mono text-xs tracking-widest uppercase transition ${
                  mode === 'direct' ? 'bg-ink text-paper' : 'text-ink/65 hover:text-ink'
                }`}
              >
                直接答
              </button>
              <button
                onClick={() => setMode('thinking')}
                className={`rounded-full px-4 py-2 text-center font-mono text-xs tracking-widest uppercase transition ${
                  mode === 'thinking' ? 'bg-rose-500 text-paper' : 'text-ink/65 hover:text-ink'
                }`}
              >
                思考模式
              </button>
            </div>

            <div className="transition-all duration-300">
              {mode === 'direct' ? (
                <div className="rounded-3xl border-2 border-ink bg-paper p-4 shadow-card">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    <span className="rounded-full border border-ink/30 bg-cream px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                      秒答
                    </span>
                  </div>
                  <div className="rounded-2xl border border-ink/20 bg-cream/60 px-4 py-3 text-base font-semibold text-ink">
                    大约 140 件
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-ink/60">
                    它没列式子——可能对可能错。简单题没问题，复杂题就容易翻车。
                  </p>
                </div>
              ) : (
                <div className="rounded-3xl border-2 border-rose-500 bg-rose-50/40 p-4 shadow-card">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🧠</span>
                    <span className="rounded-full border border-rose-400 bg-rose-100 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-rose-700 uppercase">
                      先想再答
                    </span>
                  </div>
                  <div className="rounded-xl border border-ink/15 bg-ink/5 px-3 py-2.5 font-mono text-xs leading-loose text-ink/75">
                    <div className="mb-1 font-sans text-[10px] tracking-widest text-ink/45 uppercase">
                      💭 思考中……
                    </div>
                    <div>· 3 人 × 5 天 = 15 人·天 → 每人·天 4 件</div>
                    <div>· 现在 5 人 × 7 天 = 35 人·天</div>
                    <div>· 35 × 4 = 140</div>
                  </div>
                  <div className="mt-2.5 rounded-2xl border-2 border-rose-400 bg-rose-100/60 px-4 py-2.5 text-base font-semibold text-rose-800">
                    140 件 ✓
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-ink/60">
                    看到式子就能检查。难题这样答更稳。
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-[10px] tracking-widest text-ink/45 uppercase self-center">
                  🔥 要开：
                </span>
                {hotBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-rose-400 bg-rose-100 px-2.5 py-0.5 text-xs text-rose-700"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-[10px] tracking-widest text-ink/45 uppercase self-center">
                  ❄️ 别开：
                </span>
                {coldBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-ink/20 bg-cream px-2.5 py-0.5 text-xs text-ink/65"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        大小号是省力度，Thinking 是慢下来。挑对模式比一味追最大更聪明。
      </KeyLine>
    </Section>
  )
}
