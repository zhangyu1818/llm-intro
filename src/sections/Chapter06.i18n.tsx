import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '刚开始最容易踩的坑，不是低估它，而是高估它',
  eyebrow: '流畅 ≠ 正确',
  keyLine: '它答得顺，不等于答得对。最容易栽的一刻，是你根本没想过「这句话会不会是它顺手编的」。',
  flags: [
    { color: '#ff5a3c', label: '语气很笃定' },
    { color: '#ffb020', label: '细节出奇精确' },
    { color: '#8a5cff', label: '你也不熟悉这个领域' },
  ],
  interactive: {
    answerLabel: '它给你的回答',
    backBtn: '← 再看一遍回答',
    eyebrow: 'interactive · 它在这里"顺"了一段',
    flagsLabel: '三个红灯同时亮，别直接当真',
    flipBtn: '翻面 · 真相 →',
    hint: '看看它写得有多顺——再翻面看看，真相是什么。',
    plausibleTag: 'plausible · 听起来很对',
    tipNote: '💡 注意力放在：它的语气 / 细节精度 / 有没有一丝犹豫',
    truthTag: 'truth · 实际上',
  },
  prose: (
    <>
      <P>
        新人最容易踩的坑，不是"它答不上来"——而是它答得<em>太顺了</em>。它的语气稳、结构完整、细节具体，看起来很像权威答案。可是：<Mark>说得像样 ≠ 内容真对。</Mark>
      </P>

      <Pull>
        它并不总会说「我不知道」。它更常做的是：在不知道的地方，照着"像样的样子"把话补齐。
      </Pull>

      <H3>为什么会这样</H3>
      <P>
        这和它的工作方式有关。它擅长把一段话<Mark>组织得像模像样</Mark>——用上合理的词、合理的结构、合理的例子。但「组织得合理」和「内容上准确」是两件事。当它手里的信息不足时，它并不总会停下来承认，而是会用最像那回事的方式继续往下说。
      </P>
      <P>业内给这件事起了个名字：<strong>幻觉（hallucination）</strong>。它指的不是它故意骗你，而是它在没把握的地方，会用很自信的语气"补"出内容。</P>

      <H3>最容易中招的三种问题</H3>
      <P><strong>1. 训练之后才发生的事。</strong> 最新新闻、昨天刚发的版本、今天的价格和政策——训练一结束，它就接不上了。</P>
      <P><strong>2. 你的私有信息。</strong> 公司内部文档、团队刚开完的会、你电脑里的本地文件——你没递给它，它就凭空猜不到。</P>
      <P><strong>3. 冷门、具体、对细节精度要求高的内容。</strong> 冷门引用、具体的条文号、精确的数字、稀有 API 的参数名——一旦它不太熟，很容易"顺"出一段看似合理的错答案。</P>

      <H3>怎么判断一个回答可不可信</H3>
      <P>有三个红灯可以留意：</P>
      <UL>
        <LI>它的语气异常笃定，完全没有「可能 / 大致 / 我记得」这类保留</LI>
        <LI>细节出奇精确——条文号、版本号、年份、章节号都咬得死死的</LI>
        <LI>这个话题你本身不熟，没法一眼看出它在说什么</LI>
      </UL>
      <P>
        这三条同时亮起时，就别默认它是对的。你能做的很简单：<Mark>让它联网查一下、或者自己再核一遍</Mark>。比起"事后发现错"，这几秒钟永远是值得的。
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">它也会</span>
      <span className="block">
        <span className="text-ember">一本正经地</span>说错。
      </span>
    </>
  ),
  twins: [
    {
      id: 'api',
      hint: '看起来像一段标准教程——但 API 名和配置项都是编的。',
      question: 'XX 框架 v18 里怎么开启 concurrent 模式？',
      topic: '软件版本',
      plausible:
        '只需要在入口文件调用 `ReactDOM.concurrentRoot(container).render(<App />)`，并把 `concurrent: true` 加到 package.json 的 react 字段里即可开启。',
      truth:
        '这段话里「concurrentRoot」这个 API 并不存在；`package.json` 里也没有 concurrent 配置。它把一些看似相近的名字拼成了一个流畅但凭空的答案。',
    },
    {
      id: 'book',
      hint: '越是冷门、越是"具体"的引用，越容易被它凭感觉补齐。',
      question: '《XX 之书》第 7 章的那句关于「清晨」的名句原文是什么？',
      topic: '冷门引用',
      plausible:
        '原文是："清晨之所以珍贵，是因为它属于那些愿意比世界更早一点醒来的人。"——这句话出自第 7 章第 3 节，已被多次引用。',
      truth:
        '当它对"这本书存不存在"或"第 7 章到底写了什么"都没把握时，它依然可能流畅地"补"出一段像样的原文——连章节与节数都像真的。',
    },
    {
      id: 'law',
      hint: '条款号、数字、时间点——越精确的细节，越值得自己再核一遍。',
      question: '某某法规定，连续加班超过几小时需要额外补偿？',
      topic: '数字/规定',
      plausible:
        '根据《某某法》第 34 条，连续加班超过 36 小时须按日工资 2 倍进行补偿，并在次月一并发放。',
      truth:
        '条文号、小时数、倍数、发放时间，每一个看起来都"具体且合理"，但都可能是它根据常见模式"顺出来"的。法规类问题最忌默认它知道。',
    },
  ],
}

const en: typeof zh = {
  caption: "The trap newcomers fall into isn't underestimating it — it's overestimating it",
  eyebrow: 'Fluent ≠ Correct',
  keyLine: "Smooth doesn't mean right. The most dangerous moment is when it never even occurs to you that the sentence might have been made up on the fly.",
  flags: [
    { color: '#ff5a3c', label: 'Unusually certain tone' },
    { color: '#ffb020', label: 'Suspiciously precise details' },
    { color: '#8a5cff', label: "You don't know the area either" },
  ],
  interactive: {
    answerLabel: 'Its answer to you',
    backBtn: '← See the answer again',
    eyebrow: 'interactive · here\'s where it "smoothed something over"',
    flagsLabel: 'All three flags up at once — don\'t just take it at face value',
    flipBtn: 'Flip · truth →',
    hint: 'See how convincing it sounds — then flip it and see what was actually true.',
    plausibleTag: 'plausible · sounds right',
    tipNote: '💡 Watch for: the tone, the precision of the details, any sign of hesitation',
    truthTag: 'truth · actually',
  },
  prose: (
    <>
      <P>
        The trap newcomers fall into isn't "it can't answer" — it's that it answers <em>too smoothly</em>. Steady tone, complete structure, specific details — it reads like an authoritative source. But: <Mark>sounding right ≠ being right.</Mark>
      </P>

      <Pull>
        It doesn't always say "I don't know". More often, in the spots where it doesn't know, it just fills in something that sounds like it does.
      </Pull>

      <H3>Why this happens</H3>
      <P>
        It's really good at <Mark>making a passage sound credible</Mark> — sensible words, sensible structure, sensible examples. But "well organized" and "actually accurate" are two different things. When it doesn't have the info, it won't always stop and say so — it keeps going in the most plausible-sounding way it can.
      </P>
      <P>The field has a name for this: <strong>hallucination</strong>. It doesn't mean it's deliberately lying. It means that in uncertain territory, it "fills in" content with confident-sounding language.</P>

      <H3>The three places this bites hardest</H3>
      <P><strong>1. Things that happened after training.</strong> Today's news, the version released yesterday, the current price or rule — once training stopped, it can't keep up.</P>
      <P><strong>2. Your private stuff.</strong> Internal company docs, the meeting your team just had, the file on your laptop — if you didn't hand it over, it has no way to know.</P>
      <P><strong>3. Obscure, specific, detail-sensitive content.</strong> Obscure quotes, exact article numbers, precise figures, rare API parameter names — the moment it's not really sure, it can "smooth" out a plausible-sounding wrong answer.</P>

      <H3>How to tell if an answer is worth trusting</H3>
      <P>Three red flags worth watching:</P>
      <UL>
        <LI>The tone is unusually certain — no "probably / roughly / I think" anywhere</LI>
        <LI>The details are suspiciously precise — article numbers, version numbers, years, section numbers all nailed down</LI>
        <LI>You don't know the area yourself, so you can't tell at a glance if it makes sense</LI>
      </UL>
      <P>
        When all three flags are up at once, don't default to trusting it. The move is simple: <Mark>have it look it up online, or verify it yourself</Mark>. Those few seconds are always cheaper than catching the error later.
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">It will say wrong things</span>
      <span className="block">
        with complete <span className="text-ember">confidence</span>.
      </span>
    </>
  ),
  twins: [
    {
      id: 'api',
      hint: 'Reads like a standard tutorial — but the API name and the config key are invented.',
      question: 'How do you enable concurrent mode in XX framework v18?',
      topic: 'Software version',
      plausible:
        'Just call `ReactDOM.concurrentRoot(container).render(<App />)` in your entry file, and add `concurrent: true` to the react field in your package.json.',
      truth:
        'The `concurrentRoot` API in that answer doesn\'t exist, and there\'s no concurrent config in package.json. It stitched together similar-sounding names into a smooth but invented answer.',
    },
    {
      id: 'book',
      hint: 'The more obscure and "specific" the quote, the easier it is for the model to fill it in from feel.',
      question: 'What is the exact "morning" line from chapter 7 of "The XX Book"?',
      topic: 'Obscure quote',
      plausible:
        '"Morning is precious because it belongs to those willing to wake up a little earlier than the world." — From Chapter 7, Section 3, and widely cited since.',
      truth:
        "When it has no idea whether this book exists or what chapter 7 actually says, it may still smoothly fill in a convincing-looking passage — chapter and section numbers included.",
    },
    {
      id: 'law',
      hint: 'Article numbers, figures, dates — the more precise the detail, the more worth double-checking yourself.',
      question: 'How many hours of consecutive overtime require extra compensation under the XX Act?',
      topic: 'Numbers / rules',
      plausible:
        'Under Article 34 of the XX Act, consecutive overtime exceeding 36 hours must be compensated at twice the daily rate, paid out together the following month.',
      truth:
        "The article number, the hours, the multiplier, the payout timing — every piece looks 'specific and reasonable', but any of it could have been 'smoothed' out from common patterns. Never default to trusting it on legal text.",
    },
  ],
}

export default { en, zh }
