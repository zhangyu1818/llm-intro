import { H3, Mark, P } from '../components/Prose'

const zh = {
  buckets: ['目标读者', '文风', '边界', '输出形式'] as const,
  caption: '最有效的做法往往是压缩、提炼、重写成几条重点',
  eyebrow: '桌面真的不够用了怎么办',
  keyLine: '上下文不够时，最有效的办法通常不是继续硬聊，而是先停下来整理重点，然后再往前走。',
  interactive: {
    afterLabel: '整理后',
    afterText: '4 条能直接用的结论',
    beforeLabel: '整理前',
    beforeText: '10 条散乱便签',
    eyebrow: 'interactive · 点一下试试',
    hint: '把一桌乱糟糟的聊天，收成几条真正关键的结论。',
    scatterBtn: '打散 ⟲',
    tidyBtn: '整理成笔记 →',
  },
  notes: [
    { id: '1', bucket: '目标读者' as const, color: '#ffd7de', distilled: '第一次接触相关内容的读者', keep: true, raw: '用户：面向第一次接触的人', rot: -6, x: 3, y: 4 },
    { id: '2', bucket: '边界' as const, color: '#ffe9a8', distilled: '不讲底层原理', keep: true, raw: '用户：不要讲底层原理', rot: 4, x: 62, y: 2 },
    { id: '3', color: '#d9e7ff', keep: false, raw: '模型：好的，收到', rot: -2, x: 32, y: 18 },
    { id: '4', bucket: '文风' as const, color: '#c7f1d8', distilled: '通俗、少术语', keep: true, raw: '用户：语气通俗', rot: 7, x: 78, y: 16 },
    { id: '5', color: '#e8defb', keep: false, raw: '（闲聊两句）', rot: 3, x: 14, y: 38 },
    { id: '6', color: '#f7e3d4', keep: false, raw: '模型：这段要不要改？', rot: -4, x: 43, y: 46 },
    { id: '7', bucket: '输出形式' as const, color: '#ffd7de', distilled: 'Markdown，按章节写', keep: true, raw: '用户：按章节写，Markdown', rot: -6, x: 71, y: 42 },
    { id: '8', color: '#d9e7ff', keep: false, raw: '（跑题吐槽）', rot: 5, x: 5, y: 68 },
    { id: '9', color: '#ffe9a8', keep: false, raw: '用户：第三章再展开点', rot: -3, x: 50, y: 72 },
    { id: '10', color: '#c7f1d8', keep: false, raw: '（反复来回改标题）', rot: 2, x: 80, y: 70 },
  ],
  prose: (
    <>
      <P>
        一旦发现它开始「飘」，很多人的第一反应是接着硬聊，试图靠更多对话把它拉回来。这样偶尔能救回来一点，但通常不是最稳的办法。
        <Mark>更有效的做法往往不是「继续塞更多聊天记录」，而是主动压缩、提炼、整理。</Mark>
      </P>

      <H3>为什么要压缩</H3>
      <P>
        因为它并不是「看得越多越轻松」。恰恰相反——内容越多越杂，它越容易抓不到重点。如果你先把真正要紧的部分理清楚再递给它，它往往表现得更稳、更像「懂了」。
      </P>
      <P>所以关键不是让它去背整本聊天，而是帮它准备一份<Mark>重点笔记</Mark>。</P>

      <H3>几种常见的整理方式</H3>
      <P>
        <strong>1. 把长对话收成几条关键结论。</strong> 比如目标读者、文风、边界、输出形式——这几条，往往比整段历史更有用。
      </P>
      <P>
        <strong>2. 把要求整理成清单。</strong> 让它一眼就看清「要做什么」「不能做什么」，比散在一堆聊天里稳得多。
      </P>
      <P>
        <strong>3. 把角色、风格、限制固定下来。</strong> 永远用中文、语气简洁、面向新人、不要过于技术——这类反复要出现的要求，最好写死，而不是每次临时再提一句。
      </P>
      <P>
        <strong>4. 长任务分阶段做。</strong> 先定结构 → 再写其中一部分 → 再统一润色 → 最后检查整体一致性。每一轮只处理这一步真正需要的内容。
      </P>

      <H3>一个很实用的小招</H3>
      <P>
        如果你发现对话已经很长、它明显在飘，不妨停下来，对它说：
      </P>
      <blockquote className="font-display mt-5 max-w-3xl rounded-2xl border-2 border-leaf bg-leaf/15 px-6 py-5 text-lg leading-[1.85] font-medium text-ink/90 md:px-7 md:py-6 md:text-xl md:leading-[1.8]">
        "我们先别继续往下推了，把前面已经定下来的关键信息，帮我整理成 5 条。"
      </blockquote>
      <P>很多时候，这一步就能把对话明显拉回正轨。</P>
    </>
  ),
  title: (
    <>
      <span className="block">别硬聊——</span>
      <span className="block">
        先<span className="text-ember">整理一下</span>再继续。
      </span>
    </>
  ),
}

const en: typeof zh = {
  buckets: ['目标读者', '文风', '边界', '输出形式'] as const,
  caption: 'The most effective move is usually to compress, distill, and rewrite the chat into a few key points',
  eyebrow: 'When the desk really runs out of room',
  keyLine: "When context runs short, the most effective fix usually isn't to keep pushing — it's to stop, tidy up the key points, then keep going.",
  interactive: {
    afterLabel: 'After',
    afterText: '4 conclusions you can actually use',
    beforeLabel: 'Before',
    beforeText: '10 scattered sticky notes',
    eyebrow: 'interactive · click to try',
    hint: 'Turn a messy table of sticky notes into a few conclusions that actually matter.',
    scatterBtn: 'Scatter ⟲',
    tidyBtn: 'Tidy into notes →',
  },
  notes: [
    { id: '1', bucket: '目标读者' as const, color: '#ffd7de', distilled: 'Readers new to the topic', keep: true, raw: 'User: write for first-time readers', rot: -6, x: 3, y: 4 },
    { id: '2', bucket: '边界' as const, color: '#ffe9a8', distilled: 'Skip the mechanics', keep: true, raw: 'User: no underlying mechanics', rot: 4, x: 62, y: 2 },
    { id: '3', color: '#d9e7ff', keep: false, raw: 'Model: got it', rot: -2, x: 32, y: 18 },
    { id: '4', bucket: '文风' as const, color: '#c7f1d8', distilled: 'Accessible, minimal jargon', keep: true, raw: 'User: keep the tone accessible', rot: 7, x: 78, y: 16 },
    { id: '5', color: '#e8defb', keep: false, raw: '(small talk)', rot: 3, x: 14, y: 38 },
    { id: '6', color: '#f7e3d4', keep: false, raw: 'Model: want me to revise this?', rot: -4, x: 43, y: 46 },
    { id: '7', bucket: '输出形式' as const, color: '#ffd7de', distilled: 'Markdown, by chapter', keep: true, raw: 'User: chapter-by-chapter, Markdown', rot: -6, x: 71, y: 42 },
    { id: '8', color: '#d9e7ff', keep: false, raw: '(off-topic rant)', rot: 5, x: 5, y: 68 },
    { id: '9', color: '#ffe9a8', keep: false, raw: 'User: expand chapter three more', rot: -3, x: 50, y: 72 },
    { id: '10', color: '#c7f1d8', keep: false, raw: '(back-and-forth on titles)', rot: 2, x: 80, y: 70 },
  ],
  prose: (
    <>
      <P>
        Once you notice it drifting, the instinct is to just keep chatting and drag it back with more messages. Sometimes that helps a little, but it's rarely the most reliable fix.
        <Mark>The better move usually isn't "stuff in more chat history" — it's to actively compress, distill, and organize.</Mark>
      </P>

      <H3>Why compress?</H3>
      <P>
        Because more isn't easier for it. If anything, the messier the input, the harder it is to find the signal. If you sort out what actually matters first and hand that over, it tends to feel steadier — more like it "got it".
      </P>
      <P>The point isn't making it memorize the whole chat — it's preparing a <Mark>key-points note</Mark> for it.</P>

      <H3>Common ways to tidy up</H3>
      <P>
        <strong>1. Compress a long conversation into a few key conclusions.</strong> Target audience, tone, boundaries, output format — those few lines are usually worth more than the entire history.
      </P>
      <P>
        <strong>2. Turn the requirements into a checklist.</strong> Let it see "what to do" and "what not to do" at a glance. Much steadier than burying them across a pile of messages.
      </P>
      <P>
        <strong>3. Lock down the role, style, and constraints.</strong> Always in English, concise, aimed at newcomers, no jargon — the kind of stuff you keep repeating is better written in once than re-said every turn.
      </P>
      <P>
        <strong>4. Break long tasks into phases.</strong> Define the structure → write one section → polish them together → check overall consistency. Each turn only carries what that phase actually needs.
      </P>

      <H3>One very practical trick</H3>
      <P>
        If the chat has gone long and it's clearly drifting, try stopping and saying:
      </P>
      <blockquote className="font-display mt-5 max-w-3xl rounded-2xl border-2 border-leaf bg-leaf/15 px-6 py-5 text-lg leading-[1.85] font-medium text-ink/90 md:px-7 md:py-6 md:text-xl md:leading-[1.8]">
        "Let's pause before going further. Summarize the key decisions we've already made into 5 bullet points."
      </blockquote>
      <P>More often than not, that single step pulls the conversation noticeably back on track.</P>
    </>
  ),
  title: (
    <>
      <span className="block">Don't push through —</span>
      <span className="block">
        <span className="text-ember">tidy up</span> first, then keep going.
      </span>
    </>
  ),
}

export default { en, zh }
