import { H3, Mark, P } from '../components/Prose'

const zh = {
  caption: '模型负责组织答案，工具负责把新资料递到它手里',
  eyebrow: '联网、工具、MCP',
  keyLine: '联网和工具，不是让它突然变聪明，而是让它能接触到新的资料；MCP 则像连接这些外部能力的那个标准插座。',
  interactive: {
    eyebrow: 'interactive · 给它接上不同工具',
    hint: '点一下外圈的工具把它「接」进来，看看它能够到什么。',
    modelLabel: '组织回答',
    noToolMsg: '一样工具都没接——只能靠训练时学到的东西。',
    reachLabel: '它现在够得到的信息',
    socketBadge: 'MCP · 标准插座',
  },
  prose: (
    <>
      <P>
        前面讲过两件事：它的知识停在训练截止那天，它有时会在不知道的地方一本正经地补。那能不能给它"现场查一下"的能力？——可以。这就是本章要讲的联网和工具。
      </P>
      <P>
        所以，<Mark>"让它知道最新信息"不是让它突然变聪明，而是让它能去把新资料拿回来，再照着新资料回答你。</Mark>
      </P>

      <H3>联网到底补上了什么</H3>
      <P>最直接的作用，是把「训练之后发生的事」补回来。今天刚发生的新闻、某个产品昨天更新的说明、某个城市今天的天气——光靠训练阶段学到的内容，它很可能答不准。但能联网，它就可以先查，再答。</P>
      <P>这时它的工作方式也变了：从「凭已有知识直接回答」，变成「先查当下资料，再按查到的内容组织回答」。</P>

      <H3>外部工具不只是「上网搜索」</H3>
      <P>它还可以被接上很多别的数据来源和操作能力：文档库、数据库、日历、代码仓库、企业内部系统、本地文件……一旦接上，它就不只是「会说话」，而是能先拿到你真正需要的信息，再动手帮你做事。</P>

      <H3>MCP，可以先这样理解</H3>
      <P>第一次听到 MCP，先把它的协议细节放一放。最适合起步的理解是：</P>
      <blockquote className="font-display my-6 max-w-3xl rounded-2xl border-2 border-leaf bg-leaf/15 px-6 py-5 text-lg leading-[1.85] font-medium text-ink/90 md:px-7 md:py-6 md:text-xl md:leading-[1.8]">
        MCP 就像模型接外部工具时用的一种<Mark>标准插座</Mark>——不管是数据库、日历、还是你本地的文件，都按同一个规格插上去。
      </blockquote>
      <P>
        在这之前，想给模型接一个新工具，每种工具都要对接一套自己的接口。有了 MCP，这件事变得像家电接电源：插座是统一的，设备照规格接上就能用。
      </P>

      <H3>一句话讲清楚这一章</H3>
      <P>
        模型主要负责「理解你说什么」和「把回答组织好」；联网、工具、MCP 则负责「去拿新资料、查外部信息、连接真实系统」。两边合起来，它才会从「只会说」变成「既能查、又能答、还能动手做一点事」。
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">让它能伸手，</span>
      <span className="block">
        够到<span className="text-ember">外部世界</span>。
      </span>
    </>
  ),
  tools: [
    { id: 'web',   color: '#4b8bff', icon: '🌐', label: '网页搜索', value: '今日最新新闻、价格、政策',  x: 50, y: 8 },
    { id: 'db',    color: '#8a5cff',   icon: '🗃️', label: '数据库', value: '你们业务表里的具体记录', x: 88, y: 35 },
    { id: 'cal',   color: '#ff5a3c',     icon: '🗓️', label: '日历', value: '你这周的会议和待办', x: 80, y: 80 },
    { id: 'repo',  color: '#3ea16d', icon: '🧩', label: '代码仓库', value: '最新代码的真实状态', x: 20, y: 80 },
    { id: 'files', color: '#ffb020', icon: '📁', label: '本地文件', value: '你电脑里的这份 PDF', x: 12, y: 35 },
  ],
}

const en: typeof zh = {
  caption: 'The model organizes the answer; tools are what put fresh material into its hands',
  eyebrow: 'Web access, tools, MCP',
  keyLine: "Web access and tools don't suddenly make it smarter — they give it access to new material. MCP is the standard socket that connects all those external capabilities.",
  interactive: {
    eyebrow: 'interactive · plug in different tools',
    hint: 'Click a tool in the outer ring to "plug it in" — see what it can reach now.',
    modelLabel: 'Organizes the answer',
    noToolMsg: "No tools connected — it can only lean on what it learned during training.",
    reachLabel: 'What it can reach right now',
    socketBadge: 'MCP · standard socket',
  },
  prose: (
    <>
      <P>
        Two things from earlier: its knowledge stops on the day training ended, and it sometimes fills in the gaps with confident-sounding inventions. Can we give it the ability to "look things up on the spot"? Yes. That's what this chapter is about: web access and tools.
      </P>
      <P>
        So: <Mark>"giving it access to current info" doesn't make it suddenly smarter — it lets it go fetch new material and then answer you based on what it finds.</Mark>
      </P>

      <H3>What web access actually fills in</H3>
      <P>Its most direct job is patching the gap of "stuff that happened after training". Today's news, a product update that shipped yesterday, the weather in some city right now — going on training alone, it probably can't get those right. With web access, it can search first, then answer.</P>
      <P>The shape of its work also changes: from "answer directly from what I know" to "check the current sources first, then put the answer together from what I found."</P>

      <H3>External tools aren't just "web search"</H3>
      <P>It can also be plugged into all kinds of other data sources and actions: document stores, databases, calendars, code repositories, internal company systems, local files… Once it's connected, it stops being "something that just talks" — it can pull the information you actually need, then take real steps to help.</P>

      <H3>MCP — start with this mental model</H3>
      <P>First time hearing about MCP? Skip the protocol details for now. The simplest way in:</P>
      <blockquote className="font-display my-6 max-w-3xl rounded-2xl border-2 border-leaf bg-leaf/15 px-6 py-5 text-lg leading-[1.85] font-medium text-ink/90 md:px-7 md:py-6 md:text-xl md:leading-[1.8]">
        MCP is like a <Mark>standard socket</Mark> for plugging external tools into a model — a database, a calendar, files on your laptop — they all plug in the same way.
      </blockquote>
      <P>
        Before MCP, connecting a new tool meant building a custom integration for each one. With MCP, it's more like plugging in an appliance: the socket is standardized, and anything built to spec just works.
      </P>

      <H3>This chapter in one sentence</H3>
      <P>
        The model mostly handles "understanding what you said" and "putting the answer together". Web access, tools, and MCP handle "going to fetch new material, checking outside data, talking to real systems." Together, they turn it from "can only talk" into "can look things up, answer, and get a little real work done."
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">Let it reach out</span>
      <span className="block">
        and touch the <span className="text-ember">outside world</span>.
      </span>
    </>
  ),
  tools: [
    { id: 'web',   color: '#4b8bff',   icon: '🌐', label: 'Web search', value: "Today's news, prices, policies",  x: 50, y: 8 },
    { id: 'db',    color: '#8a5cff',     icon: '🗃️', label: 'Database', value: 'The real records in your business tables', x: 88, y: 35 },
    { id: 'cal',   color: '#ff5a3c',     icon: '🗓️', label: 'Calendar', value: "Your meetings and to-dos this week", x: 80, y: 80 },
    { id: 'repo',  color: '#3ea16d',    icon: '🧩', label: 'Code repo', value: 'The real state of the latest code', x: 20, y: 80 },
    { id: 'files', color: '#ffb020',  icon: '📁', label: 'Local files', value: 'The PDF sitting on your laptop', x: 12, y: 35 },
  ],
}

export default { en, zh }
