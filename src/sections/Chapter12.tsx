import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

export function Chapter12() {
  return (
    <Section
      id="ch-12"
      index="13"
      eyebrow={`从"说话"到"做事"`}
      caption="给个目标，它自己决定下一步做什么"
      accent="--color-sun"
      title={
        <>
          <span className="block">它开始</span>
          <span className="block">
            自己<span className="text-ember">动手</span>了。
          </span>
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            到目前为止，你和它的关系大多是"一问一答"——你问一句，它回一句，这一轮就结束。
          </P>

          <H3>一个日常对比</H3>
          <P>
            <strong>旧</strong>：你说"帮我修这个 bug"，它回你一段修复思路——你还得自己动手去改。
          </P>
          <P>
            <strong>新</strong>：你说"帮我修这个 bug"，它
            <strong>自己打开代码 → 看一眼 → 动手改 → 跑测试 → 告诉你结果</strong>。
          </P>

          <P>
            这就是所谓「它自己动手」的模式。业内叫{' '}
            <Mark>
              <strong>Agent</strong>（智能体）
            </Mark>
            ——名字不重要，重要的是：
            <Mark>它的身份，从"说话的人"变成了"动手的人"</Mark>。
          </P>

          <Pull>"旧的它是电话那头的朋友。新的它，是一位能用你电脑的助理。"</Pull>

          <H3>最好的比喻</H3>
          <P>
            想象你雇了一个助理。你说："看看昨天订单有没有异常。"
            他不会回你"你可以这样查……"——他会<strong>自己</strong>
            决定去打开哪张表、怎么筛选、怎么整理、最后告诉你结果。
          </P>
          <P>新的它，就是这样。你给一个目标，它自己决定接下来做什么。</P>

          <H3>为什么这件事值得知道</H3>
          <UL>
            <LI>你不用再自己"手动转译"一堆步骤</LI>
            <LI>它从"帮我想" 升级到 "帮我完成"</LI>
            <LI>
              更多日常任务可以<Mark>直接交出去</Mark>
            </LI>
          </UL>

          <H3>但——它能动手，也能弄坏东西</H3>
          <P>
            后面几章会讲：它做事的节奏是怎样、该怎么盯着它跑、怎么让它停在该停的地方。先把这件事放在心上：
            <Mark>它开始自己做事了，你的角色也得跟着变。</Mark>
          </P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-4 md:space-y-5">
            <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
              对话 vs 动手 · 同一个任务，两种响应方式
            </div>

            <div className="rounded-2xl border-2 border-ink bg-sun/30 px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase mb-1">
                🎯 任务
              </div>
              <div className="text-sm font-semibold text-ink">
                把昨天超过 3 天没发货的订单找出来
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col rounded-2xl border-2 border-ink bg-paper overflow-hidden">
                <div className="bg-ink/5 px-3 py-2 border-b-2 border-ink/20">
                  <div className="text-[11px] font-semibold text-ink">🗣 一问一答</div>
                  <div className="text-[10px] text-ink/55 mt-0.5">它回你一段话</div>
                </div>

                <div className="flex-1 p-3 space-y-2">
                  <div className="rounded-xl rounded-tl-none border-2 border-ink/25 bg-cream px-3 py-2.5">
                    <p className="text-[11px] leading-relaxed text-ink">
                      它：大致步骤是：
                      <br />
                      1. 打开订单表
                      <br />
                      2. 找一列叫"创建时间"
                      <br />
                      3. 筛选 &gt; 3 天之前
                      <br />
                      4. 再看"状态"不等于"已发货"
                      <br />
                      你可以用 Excel 的筛选功能试试～
                    </p>
                  </div>
                </div>

                <div className="px-3 pb-3 text-[10px] text-ink/45">
                  然后——<Mark>你自己去做</Mark>
                </div>
              </div>

              <div className="flex flex-col rounded-2xl border-2 border-ink bg-paper overflow-hidden">
                <div className="bg-ink/5 px-3 py-2 border-b-2 border-ink/20">
                  <div className="text-[11px] font-semibold text-ink">🛠 自己动手</div>
                  <div className="text-[10px] text-ink/55 mt-0.5">它真的去做</div>
                </div>

                <div className="flex-1 p-3">
                  <div className="space-y-2">
                    {[
                      { icon: '🔎', text: '先看看这份表的结构……' },
                      { icon: '📄', text: '读到字段：订单号 / 创建时间 / 状态' },
                      { icon: '⚙️', text: '筛选：创建 > 3 天 AND 状态 ≠ 已发货' },
                      {
                        icon: '📊',
                        text: (
                          <>
                            找到 <strong>7 条</strong>，已整理成一张小表
                          </>
                        ),
                      },
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="relative flex flex-col items-center">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-ink bg-sun text-[10px] shrink-0">
                            {i + 1}
                          </div>
                          {i < 3 && (
                            <div className="w-px flex-1 bg-ink/20 mt-0.5" style={{ height: 10 }} />
                          )}
                        </div>
                        <div className="text-[11px] leading-relaxed text-ink pt-0.5">
                          {step.icon} {step.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-3 pb-3 text-[10px] text-emerald-700">
                  然后——<span className="font-semibold">事情已经做完了</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-ink bg-ember/15 px-4 py-3">
              <p className="text-[12px] leading-relaxed text-ink">
                区别不在"聪不聪明"——而在它的身份：
                <br />
                从"说话的人"，变成了"动手的人"。
              </p>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        它开始自己做事的那一刻，你的身份也变了——从"提问的人"，变成"看着它做事的人"。
      </KeyLine>
    </Section>
  )
}
