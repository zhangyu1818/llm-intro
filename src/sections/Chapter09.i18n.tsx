import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '别再每次从头交代——同一类任务，让它照同一份规则做',
  eyebrow: '把反复要说的话沉淀下来',
  keyLine: '反复发生的任务，别再每次从头交代一次。把该做的事写成一份说明书，用到哪本取哪本——输出会立刻稳一大截。',
  adhocVariants: [
    '帮我写本周周报，先写完成的，再写风险，最后写下周计划，语气别太套话',
    '帮我写下周报——本周完成 / 阻塞 / 下周计划，简洁点',
    '写个周报，完成事项 + 遇到的问题 + 下周要做的，别太官腔',
    '周报一下，格式：完成、风险、下周',
  ],
  books: [
    {
      id: 'weekly',
      color: '#ffb020',
      icon: '📄',
      title: '周报说明书',
      rules: [
        '三段：本周完成 / 风险 / 下周计划',
        '语气简洁，不要套话',
        '风险一定写「对方 + 预期时间」',
      ],
    },
    {
      id: 'review',
      color: '#4b8bff',
      icon: '🔍',
      title: '代码审查说明书',
      rules: [
        '先找 bug 和回归风险',
        '再谈边界情况',
        '最后才说风格问题',
      ],
    },
    {
      id: 'meeting',
      color: '#ff5a3c',
      icon: '📌',
      title: '会议纪要说明书',
      rules: [
        '分四栏：结论 / 待办 / 负责人 / 截止时间',
        '不复述过程，只留「决了什么」',
        '找不到负责人的，标「待指派」',
      ],
    },
    {
      id: 'email',
      color: '#3ea16d',
      icon: '✉️',
      title: '邮件说明书',
      rules: [
        '主题必须写清「做什么/什么时间前」',
        '正文：结论先行，理由其次',
        '附件要在正文里点名',
      ],
    },
  ],
  interactive: {
    adhocMore: '点"再来一次"继续看',
    adhocRunBtn: '再来一次 ↻',
    adhocTitle: '每次都得重写',
    adhocWarning: '⚠ 留意一下：每次说法都稍有差别。漏一条、换一种说法，输出就跟着不稳。',
    eyebrow: 'interactive · 对比两种做法',
    hint: '切换一下，看临时 prompt 和沉淀成 Skill 的差别。',
    skillFootnote: '其他说明书先放回架子。做到对应任务时再取下来，不会互相干扰。',
    skillInUse: 'IN USE',
    skillLibraryTag: 'skill library',
    skillTitle: '书架 · 按任务取一本',
    tabAdhoc: '临时 prompt',
    tabSkill: 'Skill · 说明书',
    skillLoadedLabel: (n: number) => `当前加载中 · ${n} 条规则`,
  },
  prose: (
    <>
      <P>
        上一章讲的是「怎么把一次问题说清楚」。但如果同一类任务会<Mark>反复发生</Mark>——周报、会议纪要、代码审查、邮件——你很快会发现一个新麻烦：这些背景、口吻、边界、格式，<em>每次都在重新说一遍</em>。
      </P>

      <P>写一次还行，写十次、二十次，就会遇到几个典型问题：</P>
      <UL>
        <LI>这次漏了一条</LI>
        <LI>下次换了个说法</LI>
        <LI>前半段讲了风格，后半段忘了边界</LI>
        <LI>同一件事，今天做得像样，明天又飘了</LI>
      </UL>

      <Pull>
        Skills 做的事，就是把"每次重写 prompt"这件事，变成一份「可复用的说明书」。
      </Pull>

      <H3>核心在做什么</H3>
      <P>
        你可以把一个 Skill 想成一份<Mark>工作说明书</Mark>。上面写清楚这类任务要怎么做：用什么风格、按什么流程、输出长什么样、哪些规则不能碰。以后再碰到这类任务，就不必从头交代——它照着说明书做就行。
      </P>

      <H3>那为什么不"一次全塞给它"</H3>
      <P>
        很多人听到这里会想：那我把所有规则都一次性塞给它，不就一劳永逸？<strong>通常也不好。</strong>原因也很直接：
      </P>
      <UL>
        <LI>不是每一轮都需要所有规则——写作时用不上审查那一套</LI>
        <LI>塞太多，它反而不容易聚焦当前这件事</LI>
        <LI>你自己也管不过来——规则一多，互相打架你都看不出来</LI>
      </UL>
      <P>更自然的做法是<Mark>按任务取用</Mark>：写作时加载写作那本，审查时加载审查那本。就像一排书架——需要哪一本，取下来翻开；其他先放回去。</P>

      <H3>什么任务值得沉淀成 Skill</H3>
      <P>不是所有事都要做 Skill。判断很朴素，两个条件一起满足就够：</P>
      <UL>
        <LI>这类任务会<strong>反复</strong>出现</LI>
        <LI>每次的要求基本一样——格式、语气、边界</LI>
      </UL>
      <P>
        周报、会议纪要、代码审查、邮件——这类任务非常典型。偶尔才做一次的事，随手写清楚 prompt 就好，不必沉淀。
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">Skills ·</span>
      <span className="block">
        一份<span className="text-ember">说明书</span>，按任务取用。
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: "Stop re-explaining every time — for recurring tasks, hand it the same set of rules",
  eyebrow: 'Capturing what you keep saying',
  keyLine: "For recurring tasks, stop re-explaining every time. Write what's expected into a handbook, pull the right one when you need it — the output gets noticeably steadier.",
  adhocVariants: [
    "Write my weekly report — completed stuff first, then risks, then next week's plan. Keep it natural",
    "Weekly report — completed / blocked / next week, keep it brief",
    "Write a weekly report: things done + problems hit + plans for next week, not too formal",
    "Weekly report: format — done, risks, next week",
  ],
  books: [
    {
      id: 'weekly',
      color: '#ffb020',
      icon: '📄',
      title: 'Weekly report handbook',
      rules: [
        'Three sections: completed / risks / next week',
        'Concise tone, no filler phrases',
        'Risks must include "who + expected timeline"',
      ],
    },
    {
      id: 'review',
      color: '#4b8bff',
      icon: '🔍',
      title: 'Code review handbook',
      rules: [
        'Find bugs and regression risks first',
        'Then discuss edge cases',
        'Style issues come last',
      ],
    },
    {
      id: 'meeting',
      color: '#ff5a3c',
      icon: '📌',
      title: 'Meeting notes handbook',
      rules: [
        'Four columns: decisions / actions / owner / deadline',
        "Don't recap the process — only what was decided",
        'No owner found? Mark as "to be assigned"',
      ],
    },
    {
      id: 'email',
      color: '#3ea16d',
      icon: '✉️',
      title: 'Email handbook',
      rules: [
        'Subject must state "what / by when"',
        'Body: conclusion first, reasoning second',
        'Attachments must be named in the body text',
      ],
    },
  ],
  interactive: {
    adhocMore: 'Click "Again" to keep going',
    adhocRunBtn: 'Again ↻',
    adhocTitle: 'Rewritten every single time',
    adhocWarning: '⚠ Notice: the phrasing shifts every time. Skip one line, swap a word, and the output drifts with it.',
    eyebrow: 'interactive · compare the two approaches',
    hint: 'Toggle between an ad-hoc prompt and a Skill — watch the difference.',
    skillFootnote: "The other handbooks go back on the shelf. Pull the right one when you need it — they don't interfere with each other.",
    skillInUse: 'IN USE',
    skillLibraryTag: 'skill library',
    skillTitle: 'Bookshelf · pick one per task',
    tabAdhoc: 'Ad-hoc prompt',
    tabSkill: 'Skill · handbook',
    skillLoadedLabel: (n: number) => `Currently loaded · ${n} rules`,
  },
  prose: (
    <>
      <P>
        The last chapter was about "saying one task clearly." But if the same kind of task keeps <Mark>coming around</Mark> — weekly reports, meeting notes, code review, email — you'll hit a new problem fast: all that context, tone, boundaries, and format <em>has to be re-explained from scratch every time</em>.
      </P>

      <P>Once is fine. Ten times, twenty times, and you'll start running into familiar issues:</P>
      <UL>
        <LI>You forgot a line this time</LI>
        <LI>You phrased it differently next time</LI>
        <LI>You covered style up top but forgot the constraints further down</LI>
        <LI>Same task — solid today, drifting tomorrow</LI>
      </UL>

      <Pull>
        What Skills do is turn "rewriting the prompt every time" into a reusable handbook.
      </Pull>

      <H3>What a Skill actually is</H3>
      <P>
        Picture a Skill as a <Mark>job handbook</Mark>. It spells out how this kind of task should be done: which style, which steps, what the output looks like, which rules are non-negotiable. Next time the same task shows up, no need to explain from the top — it just follows the handbook.
      </P>

      <H3>Why not just dump everything in at once?</H3>
      <P>
        Some people think: why not jam every rule in once and call it done? <strong>Usually that backfires.</strong> The reasons are pretty direct:
      </P>
      <UL>
        <LI>Not every turn needs every rule — your review checklist doesn't help when you're drafting prose</LI>
        <LI>Pile too much in and it has a harder time focusing on what you're actually doing</LI>
        <LI>You also lose the thread — once there are too many rules, the conflicts between them sneak past you</LI>
      </UL>
      <P>The more natural move is to <Mark>pick by task</Mark>: load the writing handbook when you're writing, the review handbook when you're reviewing. Like a bookshelf — pull the one you need, open it; the rest go back.</P>

      <H3>Which tasks are worth turning into Skills</H3>
      <P>Not everything needs one. The test is simple — both have to be true:</P>
      <UL>
        <LI>The task <strong>keeps coming back</strong></LI>
        <LI>The requirements are basically the same each time — format, tone, constraints</LI>
      </UL>
      <P>
        Weekly reports, meeting notes, code review, email — those are the textbook cases. Things you do once in a blue moon? Just write a clear prompt on the spot. No need to bottle it up.
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">Skills ·</span>
      <span className="block">
        One <span className="text-ember">handbook</span>, picked per task.
      </span>
    </>
  ),
}

export default { en, zh }
