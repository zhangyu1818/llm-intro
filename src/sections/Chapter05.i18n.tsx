import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '训练阶段见过一大堆材料——但训练一结束，它就不再更新了',
  eyebrow: '它像一个读过很多材料的人',
  keyLine: '它知道很多，主要是因为训练阶段看过大量资料——不是因为它每次都在现场上网学习。',
  interactive: {
    centerPrefix: '它对',
    centerSuffix: '熟悉',
    eyebrow: 'interactive · 换个主题试试',
    hint: '在海量训练材料里，每个主题都有它自己的「熟悉区」。',
  },
  prose: (
    <>
      <P>
        第一次认真用它的人，常会有一种小震撼：它怎么什么都能聊一点？历史、电影、写作、编程、营销、旅行、职场——你问什么，它都能接得上。于是一个问题自然冒出来：它凭什么知道这么多？
      </P>
      <P>最朴素的回答是：<Mark>因为在训练阶段，它已经接触过大量的文本。</Mark></P>

      <H3>不是现场才学会的</H3>
      <P>
        你今天问它一个知识点，它并不是在这一刻才「学会」这件事。更接近事实的是：它在训练过程中早就接触过一大堆相关资料，于是形成了比较强的表达与组织能力。
      </P>
      <P>
        所以它给你的感觉，更像一个<Mark>「读过很多材料的人」</Mark>，而不是一个「一边搜一边拼答案的搜索框」。
      </P>

      <H3>为什么它回答起来能像模像样</H3>
      <P>因为训练阶段接触的信息范围很广，它慢慢学会了一些事，比如：</P>
      <ul className="mb-5 space-y-2 pl-1">
        <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">常见的概念，通常会被怎么描述</li>
        <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">某一类问题，一般会怎样作答</li>
        <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">什么样的解释，会让人觉得「讲通了」</li>
        <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">什么样的结构，读起来更像一篇完整的文章</li>
      </ul>
      <P>
        于是当你提问时，它并不是简单地把一段话背出来，而是在已有能力的基础上，把「见过很多次的表达方式」重新组织成这一次的回答。
      </P>

      <Pull>
        它未必记得每本书每一页的原文，但它对很多主题已经很熟——你一问，它能快速拼出一段像样的话。
      </Pull>

      <H3>但训练有一个明确的「截止日期」</H3>
      <P>
        这里有一件对新人特别关键的事：<Mark>训练不是一件持续发生的事，而是一次性的。</Mark>做一次模型，就对应一份在某个时间点之前收集到的材料。等它训练完、上线、和你对话，它其实已经「停在那个时刻」了——训练之后发生的事，它并不知道。
      </P>
      <P>所以它的「知识」有几个自然边界：</P>
      <UL>
        <LI>只覆盖到某个时间点之前</LI>
        <LI>那之后的新闻、版本、数据，它接不上</LI>
        <LI>它自己未必会提醒你「这我不知道」</LI>
      </UL>

      <H3>但「知道很多」 ≠ 「什么都知道」</H3>
      <P>
        它最容易给人的一个错觉是：既然什么都能聊，是不是就等于什么都懂？并不是。它只是「接触过很多内容，因此在很多主题上能给出像样的回答」而已——这和「全知全能」是两回事。下一章，就专门讲它「不知道什么」、以及它有时会<em>怎么一本正经地说错</em>。
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">它怎么会</span>
      <span className="block">
        <span className="underline-sketch">知道</span>这么多事？
      </span>
    </>
  ),
  topics: [
    { id: 'history', color: '#ffb020', label: '历史' },
    { id: 'code', color: '#4b8bff', label: '编程' },
    { id: 'writing', color: '#ff7a9a', label: '写作' },
    { id: 'travel', color: '#3ea16d', label: '旅行' },
    { id: 'market', color: '#8a5cff', label: '营销' },
    { id: 'life', color: '#ff5a3c', label: '职场' },
  ],
}

const en: typeof zh = {
  caption: 'It saw a mountain of material during training — and once training ended, it stopped updating',
  eyebrow: 'It is like someone who has read a lot',
  keyLine: 'It knows a lot mostly because it read a mountain of material during training — not because it goes online to learn each time you ask.',
  interactive: {
    centerPrefix: 'Familiar with',
    centerSuffix: '',
    eyebrow: 'interactive · try a different topic',
    hint: "Across all that training material, every topic has its own 'familiar zone'.",
  },
  prose: (
    <>
      <P>
        People using it seriously for the first time often get a small jolt: how does it manage to chat about anything? History, film, writing, code, marketing, travel, work — whatever you bring up, it keeps up. So the natural question lands: how does it know all this?
      </P>
      <P>The simplest answer: <Mark>during training, it was exposed to an enormous amount of text.</Mark></P>

      <H3>It didn't just learn it now</H3>
      <P>
        When you ask it something today, it isn't "learning" that fact in this moment. Closer to the truth: it already saw a pile of related material during training, and along the way picked up a real knack for putting things into words.
      </P>
      <P>
        So the feeling it gives you is more like <Mark>"someone who has read a lot"</Mark> than "a search box piecing answers together live."
      </P>

      <H3>Why its answers can sound so put-together</H3>
      <P>Because it was exposed to such a wide range of text, it gradually picked up things like:</P>
      <ul className="mb-5 space-y-2 pl-1">
        <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">How common concepts usually get described</li>
        <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">How a certain kind of question generally gets answered</li>
        <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">What kind of explanation makes something feel like it "clicked"</li>
        <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">What kind of structure reads like a finished piece</li>
      </ul>
      <P>
        So when you ask it something, it isn't reciting a passage. It's drawing on what it already knows and re-arranging the "ways of saying things it has seen many times" into this particular answer.
      </P>

      <Pull>
        It might not remember every page of every book, but it's familiar with a lot of topics — ask, and it can quickly piece together something coherent.
      </Pull>

      <H3>But training has a hard "cutoff date"</H3>
      <P>
        One thing newcomers should hold onto: <Mark>training doesn't keep happening — it's a one-time event.</Mark> Each model corresponds to material gathered up to some point in time. By the time it's trained, deployed, and talking to you, it's already "frozen at that moment" — anything that happened after that, it doesn't know.
      </P>
      <P>So its knowledge has a few natural edges:</P>
      <UL>
        <LI>Only goes up to a certain point in time</LI>
        <LI>News, releases, data after that — it can't help</LI>
        <LI>It may not warn you that "this part I don't know"</LI>
      </UL>

      <H3>But "knows a lot" ≠ "knows everything"</H3>
      <P>
        Here's the illusion it most easily creates: if it can chat about anything, surely it knows everything? Not at all. It just "saw a lot of content, so it can give a decent answer on a lot of topics" — that's a long way from omniscience. The next chapter is specifically about what it doesn't know — and how it sometimes <em>says wrong things with a perfectly straight face</em>.
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">How does it</span>
      <span className="block">
        <span className="underline-sketch">know</span> so much?
      </span>
    </>
  ),
  topics: [
    { id: 'history', color: '#ffb020', label: 'History' },
    { id: 'code', color: '#4b8bff', label: 'Coding' },
    { id: 'writing', color: '#ff7a9a', label: 'Writing' },
    { id: 'travel', color: '#3ea16d', label: 'Travel' },
    { id: 'market', color: '#8a5cff', label: 'Marketing' },
    { id: 'life', color: '#ff5a3c', label: 'Work' },
  ],
}

export default { en, zh }
