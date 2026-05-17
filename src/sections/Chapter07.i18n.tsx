import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '你递得越清楚，它答得越稳——这就是所谓「提示词」的核心',
  eyebrow: '递材料的艺术',
  keyLine: '很多时候它答得不好，不是它不会做——是你只递了半张纸。把背景、口吻、边界、输出形式一次交代清楚，结果立刻就稳了。',
  answers: [
    {
      delta: '只有半句话——对方是谁、要多正式、要多长，它全得猜',
      text: '您好，关于合同评审，想问下大概什么时候能安排上，谢谢。',
    },
    {
      delta: '加了背景 · 它知道你是产品，对方是法务，首次合作',
      text: '您好，我是 ×× 产品负责人，首次和您合作。想了解一下合同评审大概什么时候能启动？辛苦啦！',
    },
    {
      delta: '加了口吻示例 · 随意用词没了，正式但不官腔',
      text: '张律师您好。我是 ×× 团队的产品负责人。上周已整理好合作范围与主要条款，想请您过目，希望本周内进入评审流程。',
    },
    {
      delta: '加了边界 · 去掉了感叹号、"辛苦"这类套话',
      text: '张律师您好。我是 ×× 团队的产品负责人，已将合作范围与主要条款整理完毕，随邮件附上合同初稿，供您先期过目。希望能在本周内启动评审流程。如需调整，请告诉我。',
    },
    {
      delta: '加了输出形式 · 主题行 + 三段结构',
      text: `主题：劳务合作合同评审 · 期望本周内启动\n\n张律师您好。\n\n我是 ×× 团队的产品负责人，已将合作范围与主要条款整理完毕，随邮件附上合同初稿，供您先期过目。\n\n希望能在本周内启动评审流程。如需调整，请告诉我。\n\n感谢～`,
    },
  ],
  interactive: {
    answerLabel: '它这一版的回答',
    eyebrow: 'interactive · 依次把四张卡片递上去',
    hint: '按顺序点，看它的回答一档一档变齐全。',
    resetBtn: '重置',
    statusBetter: '更齐了',
    statusBlank: '瞎答',
    statusDone: '稳',
    stepLabel: (step: number) => `step ${step}/4 ·`,
  },
  prose: (
    <>
      <P>
        回到第一章那个画面：它是「盯着眼前材料当场作答的人」。所以它答得稳不稳，很大程度上不看"模型有多聪明"——看<Mark>你递过去的那叠材料有多清楚</Mark>。
      </P>
      <P>
        新人一开始通常只会递半张纸：<em>"帮我写封邮件"</em>。它拿到这么点信息，就只能瞎猜：发给谁？什么场景？要多正式？要多长？——猜错了，就出现那个经典体验："嗯……这不是我想要的。"
      </P>

      <Pull>
        它不是不愿意好好答，是你没递足够的材料让它好好答。
      </Pull>

      <H3>一份「齐全的材料」通常包含四块</H3>
      <P>不用记死——写 prompt 前心里过一遍这四个抽屉，就能避开大多数不靠谱的回答。</P>
      <UL>
        <LI><strong>背景</strong>：你是谁、对方是谁、为什么做这件事</LI>
        <LI><strong>口吻 / 示例</strong>：要什么风格，最好直接给一段像的样子</LI>
        <LI><strong>边界</strong>：不要说什么、不能越界到哪里</LI>
        <LI><strong>输出形式</strong>：长度、结构、格式——越具体越好</LI>
      </UL>

      <H3>特别提一下：例子 &gt; 形容词</H3>
      <P>
        "口吻随和一点"、"语气专业一点"这种形容词，每个人心里的标准都不一样——它也猜不准。比一句形容词更管用的，是<Mark>直接甩一段像的例子过去</Mark>。它一看样本，风格就能对得上。
      </P>

      <H3>一个很实用的自检</H3>
      <P>写完 prompt 发出去之前，停一秒问自己：</P>
      <UL>
        <LI>如果我把这段话给一个完全不了解项目的同事，他能直接上手吗？</LI>
        <LI>他会不会还要追问我好几句才敢动？</LI>
      </UL>
      <P>
        如果答案是"他一定会再来问我"，那它也会。只不过——它不会问，而是会自己编。这就回到上一章说的那件事了。
      </P>
    </>
  ),
  slots: [
    { id: 'context', color: '#ffb020',      hint: '它是谁、对方是谁、为什么做',             label: '① 背景' },
    { id: 'tone',    color: '#ff7a9a', hint: '想要什么风格，最好给一段像的例子',       label: '② 口吻/示例' },
    { id: 'limit',   color: '#8a5cff',      hint: '不要说什么、哪些字眼不能用',             label: '③ 边界' },
    { id: 'shape',   color: '#3ea16d',  hint: '长度、结构、格式——越具体越好',          label: '④ 输出形式' },
  ],
  title: (
    <>
      <span className="block">一次，</span>
      <span className="block">
        把问题<span className="text-ember">说清楚</span>。
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: 'The clearer you hand it over, the steadier the answer — that\'s the heart of "prompting"',
  eyebrow: 'The art of handing over material',
  keyLine: "When it answers badly, usually it isn't that it can't do the job — it's that you only handed over half a page. Tell it the context, tone, boundaries, and shape of the output all at once, and the result lands.",
  answers: [
    {
      delta: 'Half a sentence — who, how formal, how long: all guesswork',
      text: 'Hi, on the contract review — any idea when it might be scheduled? Thanks.',
    },
    {
      delta: "Added context · it knows you're the product lead, they're legal, first time working together",
      text: "Hi, I'm the product lead on ×× and this is the first time we're working together. Could you let me know roughly when the contract review can start? Thanks so much!",
    },
    {
      delta: 'Added a tone sample · casual phrasing gone, formal but not stiff',
      text: "Hi [Lawyer], I'm the product lead at ××. We've finalized the scope and key terms on our side and would appreciate your review — hoping to start the process this week.",
    },
    {
      delta: 'Added boundaries · cut exclamations and filler like "thanks so much"',
      text: "Hi [Lawyer], I'm the product lead at ×× and have finalized the collaboration scope and key terms. The contract draft is attached for your initial review. We'd like to start the review this week. Let me know if any adjustments are needed.",
    },
    {
      delta: 'Added output format · subject line + three-paragraph structure',
      text: `Subject: Contract review — aiming to start this week\n\nHi [Lawyer],\n\nI'm the product lead at ××, and we've finalized the scope and key terms. The contract draft is attached for your initial review.\n\nWe'd like to start the review process this week. Please let me know if any adjustments are needed.\n\nThanks.`,
    },
  ],
  interactive: {
    answerLabel: 'Its answer at this point',
    eyebrow: 'interactive · hand it the four cards, one at a time',
    hint: 'Click them in order and watch the answer get more complete with each one.',
    resetBtn: 'Reset',
    statusBetter: 'Getting there',
    statusBlank: 'Guessing',
    statusDone: 'Solid',
    stepLabel: (step: number) => `step ${step}/4 ·`,
  },
  prose: (
    <>
      <P>
        Back to the image from chapter one: it's "someone answering on the spot from whatever you hand over." So how well it answers has less to do with "how smart the model is" — and more to do with <Mark>how clear the stack of material you handed over is</Mark>.
      </P>
      <P>
        Beginners tend to hand over half a page: <em>"write me an email"</em>. With that little, it has to guess everything — who's it for? what's the situation? how formal? how long? — and when it guesses wrong, you get the classic feeling: "hmm… that's not what I wanted."
      </P>

      <Pull>
        It isn't refusing to do the job well — you just didn't hand it enough material to do the job well.
      </Pull>

      <H3>A "complete" stack usually covers four things</H3>
      <P>No need to memorize — just run through these four drawers in your head before you write a prompt, and you'll dodge most of the bad answers.</P>
      <UL>
        <LI><strong>Context</strong>: who you are, who they are, why this matters</LI>
        <LI><strong>Tone / example</strong>: what style you want — best is to drop in a sample</LI>
        <LI><strong>Boundaries</strong>: what not to say, what's off-limits</LI>
        <LI><strong>Output format</strong>: length, structure, format — the more specific, the better</LI>
      </UL>

      <H3>One thing worth highlighting: examples beat adjectives</H3>
      <P>
        "Make it more casual", "make it more professional" — everyone reads those words differently, and the model can't read your mind. Much more useful than any adjective is <Mark>dropping in a sample that already looks right</Mark>. Show the example and the style snaps into place.
      </P>

      <H3>A practical self-check</H3>
      <P>Before you hit send, pause for a second and ask:</P>
      <UL>
        <LI>If I handed this to a colleague who knows nothing about the project, could they just start?</LI>
        <LI>Would they need to ping me three times before they'd dare begin?</LI>
      </UL>
      <P>
        If the answer is "they'd definitely come back with questions", so would the model. Except it won't ask — it'll just fill in. Which lands us right back in the previous chapter.
      </P>
    </>
  ),
  slots: [
    { id: 'context', color: '#ffb020',     hint: 'Who you are, who they are, why this matters',    label: '① Context' },
    { id: 'tone',    color: '#ff7a9a', hint: 'What style you want — best with a sample',       label: '② Tone / sample' },
    { id: 'limit',   color: '#8a5cff',   hint: "What not to say, what's off-limits",              label: '③ Boundaries' },
    { id: 'shape',   color: '#3ea16d', hint: 'Length, structure, format — be specific',        label: '④ Output format' },
  ],
  title: (
    <>
      <span className="block">Say it clearly,</span>
      <span className="block">
        <span className="text-ember">all at once</span>.
      </span>
    </>
  ),
}

export default { en, zh }
