import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

const answers = [
  '清晨第一缕阳光落在吧台，第一壶豆子的香气正好。',
  '早安——咖啡豆磨好了，牛奶刚热到位，今天也准时开门。',
  '又一个晨光微亮的早上，咖啡机"咻"的一声，一天就这样开始了。',
  '今天又是一个被咖啡香气唤醒的早晨，欢迎光临。',
  '门帘刚拉开，第一壶手冲也刚好——愿你今天的第一口，也这么轻。',
]

export function Chapter11() {
  const [runs, setRuns] = useState(0)

  const runOne = () => {
    setRuns((r) => (r >= answers.length ? 1 : r + 1))
  }

  const reset = () => {
    setRuns(0)
  }

  const visible = answers.slice(0, runs)

  return (
    <Section
      id="ch-11"
      index="09"
      eyebrow="一点点随机，是默认的"
      caption="像问同一个人两次——意思一致，措辞不同"
      accent="--color-violet"
      title={
        <>
          <span className="block">同一个问题，</span>
          <span className="block">
            答两次也会<span className="text-ember">不一样</span>。
          </span>
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            刚开始用大模型，很多人都会遇到这个困惑：「我上次问过一模一样的问题，今天再问，怎么答得不太一样？是不是哪里出错了？」
          </P>

          <Pull>
            它不是从答案库里挑一个——它是一边写一边挑词，挑的时候带一点随机。
          </Pull>

          <H3>为什么这么设计</H3>
          <P>
            如果每次都一字不差地输出同样的内容，聊起来就像在读剧本。语言本身就有很多种表达方式，让它的表达有一点变化，看起来更自然，用着也更舒服。
          </P>

          <H3>最好的比喻</H3>
          <P>
            像问同一个人两次——他知道答案，但每次表达不同。有时更短，有时更文艺，有时铺垫多一点。<Mark>内容骨架一样，措辞会变。</Mark>
          </P>

          <H3>实用推论</H3>
          <UL>
            <LI><strong>别把一次的好/坏当终审</strong>——重要任务多问一次看看</LI>
            <LI>同一问题得到「骨架一致但措辞不同」的答案，是<strong>正常的</strong></LI>
            <LI>要稳定输出，靠<strong>把话说得特别明确</strong>来收敛（这就是下一章主题）</LI>
          </UL>

          <H3>顺便一提：温度（temperature）</H3>
          <P>
            模型内部有个"创造性旋钮"叫<Mark>温度</Mark>——调高像发散，调低像更稳。普通聊天你用不着调这个，<strong>知道它存在就够了</strong>。
          </P>
        </Prose>

        <div className="relative">
          <div
            className="sticky top-24 space-y-4 md:space-y-5"
            style={{ maxHeight: 'calc(100vh - 7rem)', overflowY: 'auto' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  interactive · 同一问题跑 5 次
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  每次点按钮，看答案怎么变
                </p>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-ink bg-paper shadow-card">
              <div className="flex items-center gap-3 rounded-t-3xl border-b-2 border-ink bg-violet/15 px-4 py-3">
                <span className="text-base">📝</span>
                <div className="flex-1">
                  <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                    你的问题
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-ink">
                    "给咖啡店早晨开门写一句开场白"
                  </div>
                </div>
                {runs < answers.length ? (
                  <button
                    onClick={runOne}
                    className="shrink-0 rounded-full border-2 border-ink bg-violet/20 px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition hover:-translate-y-0.5 hover:bg-violet/30"
                  >
                    再跑一次 ↻
                  </button>
                ) : (
                  <button
                    onClick={reset}
                    className="shrink-0 rounded-full border-2 border-ink bg-cream px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition hover:-translate-y-0.5"
                  >
                    重置 ↺
                  </button>
                )}
              </div>

              <div className="p-4">
                {runs === 0 ? (
                  <div className="py-6 text-center font-mono text-xs tracking-widest text-ink/35 uppercase">
                    点"再跑一次"开始
                  </div>
                ) : (
                  <div className="space-y-2">
                    {visible.map((ans, i) => (
                      <div
                        key={i}
                        className="animate-fadeIn rounded-2xl border border-ink/15 bg-cream/60 p-3"
                        style={{
                          animationDelay: `${i * 40}ms`,
                          animationFillMode: 'both',
                        }}
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="mt-0.5 shrink-0 font-mono text-[10px] tracking-widest text-ink/40 uppercase">
                            #{i + 1}
                          </span>
                          <span className="flex-1 text-sm leading-relaxed text-ink">
                            {ans}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <span className="rounded-full border border-leaf/60 bg-leaf/15 px-2 py-0.5 font-mono text-[9px] tracking-wider text-leaf-dark uppercase">
                            骨架：咖啡 · 清晨 · 欢迎
                          </span>
                          <span className="rounded-full border border-ink/20 bg-ink/5 px-2 py-0.5 font-mono text-[9px] tracking-wider text-ink/55 uppercase">
                            措辞不同
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {runs >= 3 && (
                  <div className="mt-3 rounded-2xl border border-leaf/40 bg-leaf/10 px-3.5 py-3 text-sm text-ink/80">
                    <span className="font-semibold text-leaf-dark">✓ 观察：</span>内容骨架都一样——"咖啡 + 清晨 + 欢迎"。变化的只是：用词、顺序、长度。
                  </div>
                )}

                {runs > 0 && (
                  <div className="mt-3 font-mono text-[10px] tracking-widest text-ink/35 uppercase">
                    每次都一字不差，反而像机器——一点随机是它故意设计的。
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        答两次不一样，不是它"今天不灵"——是它本来就有一点点随机，这让它更像人，不那么像机器。
      </KeyLine>
    </Section>
  )
}
