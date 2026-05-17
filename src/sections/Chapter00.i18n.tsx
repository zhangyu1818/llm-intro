import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '它更像手里拿着你递过去那叠材料，当场把答案拼出来的人',
  eyebrow: '先把直觉放对位置',
  keyLine: '它更像「盯着眼前材料当场作答的人」，而不是「一直把你记在脑子里、替你操心的人」。',
  interactive: {
    answerEmpty: '「先递点东西给我？我眼前什么都没有，不好瞎说。」',
    answerLabel: '它的回答',
    deskEmpty: '（桌上什么都没有）',
    deskLabel: '桌面 · desktop',
    eyebrow: 'interactive · 试着递一份材料过去',
    hint: '点一张卡片放到桌上，看它会怎么答。换一张，答案就跟着变。',
    personaName: '当场答题的人',
    personaSub: '只看桌上有的东西，然后开口',
  },
  materials: [
    {
      id: 'leave',
      color: 'bg-sun',
      preview: '明天家里有事，想和主管请一天假，语气正式一点',
      tag: '请假场景',
      answer:
        '「主管，明天家中临时有事需要处理，想请一天事假。今天会把手头的 XX 交接清楚，明天上午若有紧急事项可电话找我。谢谢。」',
    },
    {
      id: 'weekly',
      color: 'bg-sky',
      preview: '本周完成 A 和 B；遇到 C 卡住；下周打算做 D',
      tag: '周报片段',
      answer:
        '「本周完成 A、B；进行中：C（卡在外部依赖，已和对方约周一对齐）；下周计划：D，并推进 C 的落地。」',
    },
    {
      id: 'friend',
      color: 'bg-rose',
      preview: '最近项目压力大、睡不好，想听句安慰',
      tag: '朋友的吐槽',
      answer:
        '「听起来你这阵子是真扛着很多事。先别急着解决，睡一觉再说——项目不会因为你今晚多熬两小时就搞定，但人会更撑不住。」',
    },
    {
      id: 'empty',
      color: 'bg-cream',
      preview: '（空白）',
      tag: '什么也没说',
      answer:
        '「嗯……你想聊点什么？我这边什么材料都没拿到，只能顺着你想说的聊。」',
    },
  ],
  prose: (
    <>
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
    </>
  ),
  title: (
    <>
      <span className="block">它不在脑子里</span>
      <span className="block">记着你</span>
    </>
  ),
}

const en: typeof zh = {
  eyebrow: 'Get your intuition pointing the right way first',
  caption:
    "It's more like someone who takes the papers you just handed over and pieces the answer together on the spot.",
  interactive: {
    answerLabel: 'Its answer',
    deskEmpty: '(nothing on the desk)',
    deskLabel: 'desk',
    eyebrow: 'interactive · try handing it something',
    hint: "Drop a card on the desk and watch how it answers. Swap the card — the answer follows.",
    personaName: 'Someone answering on the spot',
    personaSub: 'Only sees what is on the desk, then talks',
    answerEmpty:
      '"Hand me something first? There\'s nothing in front of me — I shouldn\'t just make things up."',
  },
  keyLine:
    'Think of it as "someone reading what\'s right in front of them and answering" — not "someone who keeps you in their head and worries about you".',
  materials: [
    {
      id: 'leave',
      color: 'bg-sun',
      tag: 'Time-off note',
      answer:
        '"Hi — something came up at home tomorrow, so I\'d like to take a personal day. I\'ll wrap up XX before I go today; if anything urgent comes up in the morning, you can reach me by phone. Thanks."',
      preview:
        "Something came up at home tomorrow — I want to ask my manager for a day off, keep it formal",
    },
    {
      id: 'weekly',
      color: 'bg-sky',
      preview: 'Finished A and B this week; stuck on C; planning D next week',
      tag: 'Weekly update',
      answer:
        '"This week: shipped A and B. In progress: C — blocked on an external dependency, aligned with them for Monday. Next week: D, plus get C across the line."',
    },
    {
      id: 'friend',
      color: 'bg-rose',
      preview: "Project pressure is brutal, not sleeping well — could use a kind word",
      tag: 'Friend venting',
      answer:
        '"Sounds like you\'ve been carrying a lot lately. Don\'t try to solve it tonight — go to sleep first. The project isn\'t going to wrap up because you stayed up two more hours, but you\'ll be more wrecked tomorrow."',
    },
    {
      id: 'empty',
      color: 'bg-cream',
      preview: '(blank)',
      tag: 'Nothing said',
      answer:
        '"Hmm... what do you want to talk about? Nothing\'s been handed to me, so I can only go wherever you take it."',
    },
  ],
  prose: (
    <>
      <P>
        First time using an LLM? Don't jump straight to "how do I prompt it". First, drop the most common misconception:
        <Mark> it isn't a person who keeps you somewhere "in mind", remembering you, knowing you.</Mark>
      </P>
      <P>
        When you start out, it's easy to treat it like a friend who's online — it picks up your tone, explains things, comforts you. The experience feels so much like chatting with a smart person that the illusion quietly settles in.
      </P>
      <P>A more reliable way to picture it:</P>
      <UL>
        <LI>It's not a brain that has "you" stored inside</LI>
        <LI>It's not quietly searching the web on your behalf</LI>
        <LI>It's more like someone who takes the papers you just handed over and pieces an answer together on the spot</LI>
      </UL>

      <H3>The two most common misreads</H3>
      <P>
        <strong>Misread one</strong>: treating it like "someone who really gets me". You drop a line, it picks it up; you mention a preference once, the next reply matches your tone — so you assume it "knows you now". More likely it just saw what you wrote a moment ago and kept going from there.
      </P>
      <P>
        <strong>Misread two</strong>: treating it like "an all-knowing search box". You ask, it answers — as if it queried a million pages in a second and fetched the latest. Often it didn't. With no internet and no tools, it's mostly putting words together from what it already has, not looking anything up.
      </P>

      <Pull>
        It's answering from the papers in front of it right now — not because it's been holding you in mind all along.
      </Pull>

      <H3>The simplest analogy</H3>
      <P>Picture it as "someone answering on the spot":</P>
      <UL>
        <LI>Whatever you hand over is what it answers from</LI>
        <LI>Background you didn't hand over, it can't guess — and it won't go looking</LI>
        <LI>The clearer you hand it over, the steadier the answer</LI>
        <LI>The messier you hand it over, the more it sounds like it understood — when really it just caught the rough shape</LI>
      </UL>
      <P>
        That also explains a feeling everyone has: "sometimes it's brilliant, sometimes it's nonsense." Most of the time it didn't get smarter or dumber — what changed was the papers you let it see this time.
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">It isn't keeping</span>
      <span className="block">you in mind</span>
    </>
  ),
}

export default { en, zh }
