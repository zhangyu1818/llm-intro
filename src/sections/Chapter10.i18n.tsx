import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '快问题用小号，难题让它慢下来',
  coldBadges: ['闲聊', '查事实', '简单格式整理'],
  eyebrow: '挑对号，它更省力',
  hotBadges: ['数学题', '多步推理', '权衡取舍'],
  keyLine: '大小号是省力度，Thinking 是慢下来。挑对模式比一味追最大更聪明。',
  interactive: {
    coldPrefix: '❄️ 别开：',
    directAnswer: '大约 140 件',
    directBadge: '秒答',
    directNote: '它没列式子——可能对可能错。简单题没问题，复杂题就容易翻车。',
    eyebrow: 'interactive · 同一道题，两种模式',
    hint: '切换看看，推理题开 Thinking 有什么不同。',
    hotPrefix: '🔥 要开：',
    questionLabel: '题目',
    questionText: '3 个工人 5 天做 60 件货，同样节奏，5 个工人 7 天能做多少？',
    tabDirect: '直接答',
    tabThinking: '思考模式',
    thinkingAnswer: '140 件 ✓',
    thinkingBadge: '先想再答',
    thinkingLabel: '💭 思考中……',
    thinkingLine1: '· 3 人 × 5 天 = 15 人·天 → 每人·天 4 件',
    thinkingLine2: '· 现在 5 人 × 7 天 = 35 人·天',
    thinkingLine3: '· 35 × 4 = 140',
    thinkingNote: '看到式子就能检查。难题这样答更稳。',
  },
  prose: (
    <>
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
    </>
  ),
  title: (
    <>
      <span className="block">它其实有大中小号，</span>
      <span className="block">
        还会<span className="text-ember">"多想一会儿"</span>。
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: 'Fast questions get the small one; hard problems get the slow one',
  coldBadges: ['Casual chat', 'Fact lookups', 'Simple formatting'],
  eyebrow: 'Pick the right size, save the effort',
  hotBadges: ['Math problems', 'Multi-step reasoning', 'Trade-off decisions'],
  keyLine: 'Size is about how much horsepower; Thinking is about slowing down. Picking the right mode beats always reaching for the biggest.',
  interactive: {
    coldPrefix: "❄️ Leave it off:",
    directAnswer: 'About 140 units',
    directBadge: 'Instant',
    directNote: "No working shown — might be right, might be wrong. Fine for easy stuff; the hard ones are where it slips.",
    eyebrow: 'interactive · same problem, two modes',
    hint: 'Toggle and see what Thinking mode does for a reasoning problem.',
    hotPrefix: '🔥 Turn it on:',
    questionLabel: 'Problem',
    questionText: '3 workers finish 60 units in 5 days at the same pace — how many units can 5 workers finish in 7 days?',
    tabDirect: 'Direct answer',
    tabThinking: 'Thinking mode',
    thinkingAnswer: '140 units ✓',
    thinkingBadge: 'Think, then answer',
    thinkingLabel: '💭 Thinking…',
    thinkingLine1: '· 3 workers × 5 days = 15 worker-days → 4 units per worker-day',
    thinkingLine2: '· Now: 5 workers × 7 days = 35 worker-days',
    thinkingLine3: '· 35 × 4 = 140',
    thinkingNote: 'The work is visible, so you can check it. Much steadier on hard problems.',
  },
  prose: (
    <>
      <P>
        Open ChatGPT or Claude and you'll see a dropdown of different "models" — Opus / Sonnet / Haiku, or GPT-5 / mini / nano. Why so many options?
      </P>

      <Pull>Bigger isn't always better — different sizes are good at different things.</Pull>

      <H3>One simple rule</H3>
      <P>
        <Mark>Big = steadier, but slower and pricier. Small = quicker and cheaper, but more likely to trip on hard problems.</Mark>
      </P>
      <P>The everyday mental model:</P>
      <UL>
        <LI>Casual chat, fixing typos, cleaning up format → use the fast small one</LI>
        <LI>Writing proposals, doing analysis, complex reasoning → use the strong big one</LI>
        <LI>"Always reach for the most expensive" actually isn't the smart move</LI>
      </UL>

      <H3>Second dimension · letting it "slow down and think first"</H3>
      <P>
        Modern models also have a mode where they write a draft of their thinking first, then give you the real answer. This is called <Mark>Thinking mode</Mark> (extended thinking).
      </P>
      <P>
        Like a test-taker who shows their work versus one who writes the answer straight away — showing the work doesn't make you smarter, but it's <strong>much steadier on hard problems</strong>.
      </P>

      <H3>When to turn it on / when to leave it off</H3>
      <UL>
        <LI>Turn it on: math and logic, multi-step reasoning, weighing multiple constraints</LI>
        <LI>Leave it off: casual chat, looking up a fact, writing a simple passage — turning it on just makes it slower without making it more right</LI>
      </UL>

      <H3>The key insight</H3>
      <P>
        <Mark>Thinking longer ≠ answering correctly.</Mark> On factual questions, it could "think" for ten minutes and still be making things up from feel — Thinking helps with "reasoning," not so much with "what's true."
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">It comes in sizes,</span>
      <span className="block">
        and it can <span className="text-ember">"think a bit longer"</span>.
      </span>
    </>
  ),
}

export default { en, zh }
