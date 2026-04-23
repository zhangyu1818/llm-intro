import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

interface Material {
  id: string
  tag: string
  preview: string
  answer: string
  color: string
}

const materials: Material[] = [
  {
    id: 'leave',
    tag: '请假场景',
    preview: '明天家里有事，想和主管请一天假，语气正式一点',
    answer:
      '「主管，明天家中临时有事需要处理，想请一天事假。今天会把手头的 XX 交接清楚，明天上午若有紧急事项可电话找我。谢谢。」',
    color: 'bg-sun',
  },
  {
    id: 'weekly',
    tag: '周报片段',
    preview: '本周完成 A 和 B；遇到 C 卡住；下周打算做 D',
    answer:
      '「本周完成 A、B；进行中：C（卡在外部依赖，已和对方约周一对齐）；下周计划：D，并推进 C 的落地。」',
    color: 'bg-sky',
  },
  {
    id: 'friend',
    tag: '朋友的吐槽',
    preview: '最近项目压力大、睡不好，想听句安慰',
    answer:
      '「听起来你这阵子是真扛着很多事。先别急着解决，睡一觉再说——项目不会因为你今晚多熬两小时就搞定，但人会更撑不住。」',
    color: 'bg-rose',
  },
  {
    id: 'empty',
    tag: '什么也没说',
    preview: '（空白）',
    answer:
      '「嗯……你想聊点什么？我这边什么材料都没拿到，只能顺着你想说的聊。」',
    color: 'bg-cream',
  },
]

export function Chapter00() {
  const [picked, setPicked] = useState<Material | null>(null)

  return (
    <Section
      id="ch-0"
      index="01"
      eyebrow="先把直觉放对位置"
      title={
        <>
          <span className="block">它不在脑子里</span>
          <span className="block">记着你</span>
        </>
      }
      caption="它更像手里拿着你递过去那叠材料，当场把答案拼出来的人"
      accent="--color-ember"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Prose>
          <P>
            第一次接触大模型，先别急着学怎么提问。更重要的是把一个最常见的错觉放下：
            <Mark>它并不是一个在「心里」一直惦记你、记着你、懂你的人。</Mark>
          </P>
          <P>
            刚开始用的时候，很容易把它当成一个在线的朋友——它会接话、会讲解、会顺着你的语气安慰你。体验太像和一个聪明人聊天，错觉就是在这时候悄悄建立起来的。
          </P>
          <P>但更靠谱的理解是这样：</P>
          <UL>
            <LI>它不是一颗装着「你」的大脑</LI>
            <LI>它也不是在后台帮你偷偷搜索</LI>
            <LI>它更像——接过你当下递过来的材料，再当场把答案拼出来的人</LI>
          </UL>

          <H3>两种最常见的误会</H3>
          <P>
            <strong>误会一</strong>：把它当「真的懂我的人」。你随口说过一句话，它能接着聊；你透露过一次偏好，它下一句还会顺着你的口吻继续——于是你会以为它已经「认识你了」。更可能的情况是：它只是看到了你刚刚写下的内容，顺着这些内容在往下说而已。
          </P>
          <P>
            <strong>误会二</strong>：把它当「万能搜索框」。你一问它就答，仿佛它在海量网页里一秒就查到了最新的答案。很多时候真不是。没有联网、没有外部工具的时候，它更多是在用自己已有的能力把话组织出来，而不是现场去查。
          </P>

          <Pull>
            它是靠眼前这叠材料在作答的，不是因为它真的把你长期存进了脑子里。
          </Pull>

          <H3>一个最好懂的比喻</H3>
          <P>把它想成一个「当场答题的人」：</P>
          <UL>
            <LI>你递什么过去，它就按这个回答</LI>
            <LI>你没递的背景，它猜不到，也不会主动去找</LI>
            <LI>你给得越清楚，它答得越稳</LI>
            <LI>你给得越乱，它反而会说得像懂了——其实只是接住了一个大概</LI>
          </UL>
          <P>
            这也解释了那个常见体验：为什么有人会说它「时而惊艳，时而离谱」。大多数时候不是它忽然变聪明或变傻，而是——你这次让它看到的材料，跟上次不一样。
          </P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24">
            <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
              interactive · 试着递一份材料过去
            </div>
            <p className="mt-2 mb-6 text-base text-ink/70">
              点一张卡片放到桌上，看它会怎么答。换一张，答案就跟着变。
            </p>

            <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-cream p-6 shadow-card">
              <div className="bg-dots pointer-events-none absolute inset-0 opacity-50" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-paper text-2xl">
                    🙂
                  </div>
                  <div>
                    <div className="font-semibold">当场答题的人</div>
                    <div className="text-xs text-ink/60">只看桌上有的东西，然后开口</div>
                  </div>
                </div>

                <div className="relative min-h-[180px] rounded-2xl border-2 border-dashed border-ink/40 bg-paper/80 p-4">
                  <div className="mb-2 font-mono text-[10px] tracking-widest text-ink/50 uppercase">
                    桌面 · desktop
                  </div>
                  {picked ? (
                    <div
                      key={picked.id}
                      className={`${picked.color} rotate-tilt-3 rounded-xl border-2 border-ink px-4 py-3 transition-all duration-300`}
                    >
                      <div className="font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                        {picked.tag}
                      </div>
                      <div className="mt-1 text-sm font-medium text-ink">{picked.preview}</div>
                    </div>
                  ) : (
                    <div className="flex h-full min-h-[100px] items-center justify-center text-sm text-ink/45">
                      （桌上什么都没有）
                    </div>
                  )}
                </div>

                <div className="relative mt-5 rounded-2xl border-2 border-ink bg-paper p-4">
                  <div className="absolute -top-2 left-4 bg-paper px-2 font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                    它的回答
                  </div>
                  <p
                    key={picked?.id ?? 'empty'}
                    className="mt-1 text-[15px] leading-relaxed text-ink transition-opacity"
                  >
                    {picked?.answer ?? '「先递点东西给我？我眼前什么都没有，不好瞎说。」'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {materials.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setPicked(m)}
                  className={`group relative rounded-xl border-2 border-ink ${m.color} px-3 py-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-card ${
                    picked?.id === m.id ? 'shadow-card' : ''
                  }`}
                >
                  <div className="font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                    {m.tag}
                  </div>
                  <div className="mt-1 line-clamp-2 text-xs text-ink">{m.preview}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        它更像「盯着眼前材料当场作答的人」，而不是「一直把你记在脑子里、替你操心的人」。
      </KeyLine>
    </Section>
  )
}
