import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '别问「agent 都有哪些」——问「我这个情况能让谁帮忙」',
  eyebrow: '从概念到日常',
  keyLine: '合上书，带走五个问题——它能看到什么、我给够没、要它说还是要它做、动手前要不要先看计划、结果要不要再核。产品会变，这几个问题不会。',
  panel: {
    doingLabel: '🤖 它具体会帮你',
    interactiveHint: '点一个场景，看看这类问题里长出了哪些工具。',
    interactiveLabel: 'interactive · 换个角度 · 按你要做什么找',
    sceneLabel: '场景',
    takeawaysLabel: '🧳 合上书，带走的 5 个问题',
    toolsLabel: '· 这类里常见的工具',
    takeaways: [
      { prefix: '· 它这次能', strong: '看到', suffix: '什么？' },
      { prefix: '· 我递的', strong: '材料够不够', suffix: '？' },
      { prefix: '· 它', strong: '答完就行', strong2: '动手做', suffix: '，还是要', suffix2: '？' },
      { prefix: '· 它动手前，要不要', strong: '先看计划', suffix: '？' },
      { prefix: '· 最后的结果，要不要', strong: '再核一下', suffix: '？' },
    ],
  },
  prose: (
    <>
      <P>
        概念、循环、边界、协作——都讲完了。最后一问：这些 agent 到底<Mark>长在哪里</Mark>？你什么时候会遇到？
      </P>

      <H3>别问「agent 都有哪些」——</H3>
      <H3>问「我这个情况能让谁帮忙」</H3>
      <P>
        产品名字太多、换得也快，记不住。你真正要学的，是一个<Mark>换位思考的习惯</Mark>：
      </P>
      <P>
        <strong>我想让它做什么 → 它大概是哪一类工具？</strong>
      </P>
      <P>右边那个小面板把常见的几类场景列出来了——换一下，看每类场景里长出了哪些产品。</P>

      <H3>不写代码的人也值得知道</H3>
      <P>
        越来越多的办公产品都在长出 agent 按钮——写邮件、整理表格、生成幻灯片……<Mark>你可能已经在用，只是没想过这也是 agent。</Mark>
      </P>
      <P>
        知道 agent 的心智之后，任何新冒出的产品，一眼就能看懂它在干什么。
      </P>

      <Pull>学的不是产品名字，学的是"看懂产品在干什么"的能力。</Pull>

      <H3>合上这本书，带走什么</H3>
      <P>书到这里就结束了。把下面这五个问题收进口袋——以后用任何 agent 工具，它们都会派上用场：</P>
      <UL>
        <LI><strong>它这次能看到什么？</strong>（上下文）</LI>
        <LI><strong>我递的材料够不够？</strong>（提示词）</LI>
        <LI><strong>这件事它答完就行，还是要动手做？</strong>（agent 与否）</LI>
        <LI><strong>它动手之前，我要不要先看计划？</strong>（审批）</LI>
        <LI><strong>最后的结果，我还要不要再核一下？</strong>（幻觉）</LI>
      </UL>
      <P>下一次冒出来什么新工具——<Mark>这五个问题，都还用得上</Mark>。</P>
    </>
  ),
  scenes: [
    {
      id: 'code',
      accent: 'bg-sky/15 border-sky',
      doing: '读你的代码 → 定位问题 → 动手改 → 跑测试 → 把改动整理成 PR。整个过程你坐着看它干。',
      icon: '🧑‍💻',
      short: '改代码',
      title: '我要改一段代码',
      tools: [
        { name: 'Claude Code', maker: 'Anthropic', oneliner: '命令行里的编码助手 · Plan Mode / 权限 / 家规 / Skills 一整套都在这' },
        { name: 'Cursor / Windsurf', maker: 'Cursor · Codeium', oneliner: 'AI 直接装进编辑器，左边写代码右边对话' },
        { name: 'Codex CLI', maker: 'OpenAI', oneliner: '命令行的代码代理，思路和 Claude Code 类似' },
      ],
    },
    {
      id: 'daily',
      accent: 'bg-sun/20 border-sun',
      doing: '定时打开你的收件箱 → 过一遍 → 挑出重要的 → 用你定的格式写成摘要发给你。你睡觉它干活。',
      icon: '📬',
      short: '定时帮忙',
      title: '我要它每天帮我整理邮件',
      tools: [
        { name: 'ChatGPT Tasks', maker: 'OpenAI', oneliner: '定时跑任务，说一次以后自动按计划做' },
      ],
    },
    {
      id: 'browser',
      accent: 'bg-leaf/20 border-leaf',
      doing: '自己打开浏览器 → 点开网页 → 填表格 → 比价 → 该下单时停下来问你。',
      icon: '🌐',
      short: '刷网页',
      title: '我要它帮我刷网页、查资料、下单',
      tools: [
        { name: '浏览器 agent', maker: 'ChatGPT Atlas · Browser Use 等', oneliner: '内嵌在浏览器里的 agent，看得见你的页面' },
      ],
    },
    {
      id: 'computer',
      accent: 'bg-violet/20 border-violet',
      doing: '像真人一样操作你的电脑——看屏幕、挪鼠标、敲键盘。目前还比较新，限制不少，演示价值大于日常价值。',
      icon: '🖱',
      short: '动电脑',
      title: '我要它看着屏幕动鼠标键盘',
      tools: [
        { name: 'Computer Use', maker: 'Anthropic', oneliner: '让模型直接看屏幕、动鼠标键盘的实验能力' },
      ],
    },
    {
      id: 'embedded',
      accent: 'bg-rose/20 border-rose',
      doing: '读这一页文档 → 出摘要 / 续写 / 翻译 / 整理表格 / 生成幻灯片。你可能已经在用，只是没想过这也是 agent。',
      icon: '🏢',
      short: '办公软件',
      title: '我每天用的办公软件里就有',
      tools: [
        { name: 'Word · Excel · PPT', maker: 'Microsoft 365 Copilot', oneliner: '文档、表格、幻灯片里的 AI 按钮' },
        { name: '飞书 · 语雀 · 石墨', maker: '国内办公协作', oneliner: '国产办公产品里的 AI 写作 / 整理助手' },
        { name: 'Notion AI', maker: 'Notion', oneliner: '笔记/文档场景里的轻量 agent' },
      ],
    },
  ],
  title: (
    <>
      <span className="block">它变成了</span>
      <span className="block">
        <span className="text-ember">谁</span>？
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: "Don't ask 'what agents are there' — ask 'who can help me with this'",
  eyebrow: 'From concept to daily life',
  keyLine: "Close the book with five questions — what can it see, did I give it enough, talk or act, do I review the plan first, do I double-check the result. Products keep changing. These five questions don't.",
  panel: {
    doingLabel: '🤖 What it will actually do for you',
    interactiveHint: 'Pick a scenario and see what tools have grown up around it.',
    interactiveLabel: 'interactive · think by what you need to do',
    sceneLabel: 'Scenario',
    takeawaysLabel: '🧳 Close the book — 5 questions to keep',
    toolsLabel: '· Common tools in this space',
    takeaways: [
      { prefix: '· What can it ', strong: 'see', suffix: ' this time?' },
      { prefix: '· Am I handing it ', strong: 'enough to work with', suffix: '?' },
      { prefix: '· Is a ', strong: 'reply enough', strong2: 'act', suffix: ', or does it need to ', suffix2: '?' },
      { prefix: '· Before it acts, do I want to ', strong: 'see the plan first', suffix: '?' },
      { prefix: '· When it\'s done, do I want to ', strong: 'double-check the result', suffix: '?' },
    ],
  },
  prose: (
    <>
      <P>
        Concepts, loops, boundaries, collaboration — done. One last question: where do these agents actually <Mark>show up</Mark>? When will you bump into them?
      </P>

      <H3>Don't ask "what agents exist" —</H3>
      <H3>ask "who can help me with this"</H3>
      <P>
        There are too many product names, and they change too fast to memorize. What you really want is a <Mark>habit of thinking from what you need</Mark>:
      </P>
      <P>
        <strong>What do I want it to do → roughly what kind of tool is that?</strong>
      </P>
      <P>The panel on the right lists the common scenarios — click through and see what products have grown up around each.</P>

      <H3>Worth knowing even if you don't write code</H3>
      <P>
        More and more everyday productivity tools are growing agent buttons — drafting emails, cleaning up spreadsheets, generating slides… <Mark>you might already be using one without thinking of it as an agent.</Mark>
      </P>
      <P>
        Once you've got the agent mental model, the next new product that pops up — you'll see what it's doing the moment you open it.
      </P>

      <Pull>You're not learning product names. You're learning to see what a product is actually doing.</Pull>

      <H3>Closing the book — what to take with you</H3>
      <P>That's it for the book. Tuck these five questions into your pocket — they'll apply to any agent tool you use from here on:</P>
      <UL>
        <LI><strong>What can it see this time?</strong> (context)</LI>
        <LI><strong>Am I handing it enough to work with?</strong> (prompting)</LI>
        <LI><strong>Is a reply enough, or does it need to actually do something?</strong> (agent or not)</LI>
        <LI><strong>Before it acts, do I want to see the plan first?</strong> (approval)</LI>
        <LI><strong>When it's done, do I want to double-check the result?</strong> (hallucination)</LI>
      </UL>
      <P>Whatever new tool shows up next — <Mark>these five questions still apply</Mark>.</P>
    </>
  ),
  scenes: [
    {
      id: 'code',
      accent: 'bg-sky/15 border-sky',
      doing: 'Reads your code → finds the problem → makes the change → runs tests → wraps it up as a PR. You sit and watch.',
      icon: '🧑‍💻',
      short: 'Edit code',
      title: 'I want to change some code',
      tools: [
        { name: 'Claude Code', maker: 'Anthropic', oneliner: 'A coding assistant in your terminal · Plan Mode, permissions, house rules, Skills — the whole kit' },
        { name: 'Cursor / Windsurf', maker: 'Cursor · Codeium', oneliner: 'AI built into the editor — code on one side, chat on the other' },
        { name: 'Codex CLI', maker: 'OpenAI', oneliner: 'A terminal-based code agent, same idea as Claude Code' },
      ],
    },
    {
      id: 'daily',
      accent: 'bg-sun/20 border-sun',
      doing: 'Opens your inbox on a schedule → reads through → picks out what matters → sends you a formatted summary. You sleep, it works.',
      icon: '📬',
      short: 'Scheduled tasks',
      title: 'I want it to sort my email every day',
      tools: [
        { name: 'ChatGPT Tasks', maker: 'OpenAI', oneliner: 'Scheduled task runner — tell it once, it follows through on its own' },
      ],
    },
    {
      id: 'browser',
      accent: 'bg-leaf/20 border-leaf',
      doing: "Opens a browser itself → moves through pages → fills in forms → compares prices → pauses to ask before placing the order.",
      icon: '🌐',
      short: 'Browse the web',
      title: 'I want it to browse, research, place orders',
      tools: [
        { name: 'Browser agent', maker: 'ChatGPT Atlas · Browser Use, etc.', oneliner: 'An agent embedded in the browser that can see your pages' },
      ],
    },
    {
      id: 'computer',
      accent: 'bg-violet/20 border-violet',
      doing: 'Drives your computer like a person — reads the screen, moves the mouse, types. Still new, plenty of limits — more demo value than daily value right now.',
      icon: '🖱',
      short: 'Drive the PC',
      title: 'I want it to watch the screen and use the mouse',
      tools: [
        { name: 'Computer Use', maker: 'Anthropic', oneliner: 'An experimental capability that lets the model see the screen and drive the mouse and keyboard' },
      ],
    },
    {
      id: 'embedded',
      accent: 'bg-rose/20 border-rose',
      doing: "Reads this page → summarizes / continues / translates / tidies a table / generates slides. You might already be using it — you just haven't thought of it as an agent.",
      icon: '🏢',
      short: 'Office apps',
      title: "It's already inside the apps I use every day",
      tools: [
        { name: 'Word · Excel · PowerPoint', maker: 'Microsoft 365 Copilot', oneliner: 'AI buttons in your documents, spreadsheets, and slides' },
        { name: 'Feishu · Yuque · Shimo', maker: 'Chinese productivity tools', oneliner: 'AI writing and tidying assistants in Chinese productivity apps' },
        { name: 'Notion AI', maker: 'Notion', oneliner: 'A lightweight agent for notes and docs' },
      ],
    },
  ],
  title: (
    <>
      <span className="block">Where does it</span>
      <span className="block">
        show up <span className="text-ember">around you</span>?
      </span>
    </>
  ),
}

export default { en, zh }
