export const SITE_URL = 'https://onemindsys.com'

export type ContentSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type RelatedLink = {
  href: string
  label: string
  description: string
}

export type InsightArticle = {
  slug: string
  title: string
  description: string
  excerpt: string
  summary: string
  seenIn: string
  eyebrow?: string
  cardLabel?: string
  seenInLabel?: string
  ctaTitle?: string
  keywords: string[]
  sections: ContentSection[]
  relatedLinks: RelatedLink[]
}

export type ProjectEntry = {
  slug: string
  title: string
  description: string
  summary: string
  region: string
  projectType: string
  roleType: string
  role: string
  value: string
  keywords: string[]
  sections: ContentSection[]
  relatedLinks: RelatedLink[]
}

export type ZhInsightArticle = {
  slug: string
  title: string
  description: string
  excerpt: string
  summary: string
  keywords: string[]
  sections: ContentSection[]
  relatedLinks: RelatedLink[]
}

export const insights: InsightArticle[] = [
  {
    slug: 'structuring-a-utility-scale-power-project-for-full-financing',
    title: 'Structuring a Utility-Scale Power Project for Full Financing',
    description:
      'A project perspective on how Bangladesh utility-scale power projects become bankable through aligned financing structures, sovereign support, and delivery coordination.',
    excerpt: 'Large power projects rarely fail because the engineering is impossible. They fail because the structure is not yet bankable.',
    summary:
      'This page illustrates how large power projects in emerging markets are often made bankable through aligned financing structures, sovereign support, and coordinated delivery frameworks.',
    seenIn:
      "Representative financing structures referenced in Bangladesh utility-scale power materials, including buyer's credit, sovereign support, multilateral guarantees, export credit insurance, and syndicated bank participation.",
    eyebrow: 'Project Perspective',
    cardLabel: 'Project Perspective',
    seenInLabel: 'Reference Frame',
    ctaTitle: 'Discuss a Similar Project Situation',
    keywords: [
      'power infrastructure',
      'bankability',
      'financing readiness',
      'risk allocation',
      'Bangladesh power project',
    ],
    sections: [
      {
        title: 'Project Context',
        paragraphs: [
          'This case reflects a utility-scale, public-utility-oriented power project context in Bangladesh where engineering scope and government-linked delivery conditions both matter. Projects of this nature typically depend not only on EPC capability, but also on financing pathways, support structures, and credible capital entry conditions.',
        ],
      },
      {
        title: 'The Real Constraint',
        paragraphs: [
          'Large power projects rarely fail because the engineering is impossible. They fail because the structure is not yet bankable.',
          'Before capital enters, lenders and counterparties usually need risk allocation, support mechanisms, and execution logic to align closely enough for the project to be financed with confidence.',
        ],
      },
      {
        title: 'Typical Financing Structure',
        paragraphs: [
          'Representative projects of this kind often rely on layered capital structures rather than a single funding source.',
        ],
        bullets: [
          'Sovereign-backed support mechanisms that strengthen payment confidence and policy continuity.',
          'Multilateral guarantee participation to reduce political or counterparty risk for lenders.',
          'Export credit insurance and lending for eligible offshore contract components.',
          'Commercial bank syndication across covered and uncovered financing tranches.',
          'Alignment between EPC scope, repayment logic, and financing terms so delivery supports lender review.',
        ],
      },
      {
        title: 'Why Structure Matters',
        paragraphs: [
          'Financing is not a downstream step. In projects of this scale, capital usually enters only when risk, support, and execution logic are clear enough to underwrite.',
        ],
        bullets: [
          'Capital follows clarity, not scale alone.',
          'Delivery contracts need to reinforce lender confidence, not sit beside it as a separate track.',
          'Misalignment between EPC terms, guarantees, and financing pathways can delay an otherwise viable project.',
        ],
      },
      {
        title: 'What This Means for Project Sponsors',
        paragraphs: [
          'Projects of this nature typically require early decisions around structure, guarantees, financing pathways, and delivery sequencing. Without that alignment, even technically feasible projects can remain stalled.',
        ],
        bullets: [
          'Financing should be structured early, not added after EPC definition.',
          'Project scope and documentation should support lender comfort, not only owner requirements.',
          'Project momentum depends on coordinated stakeholder alignment across structure, financing, and delivery.',
        ],
      },
      {
        title: 'ONEMIND Perspective',
        paragraphs: [
          'ONEMIND is focused on the part of projects where structure, financing readiness, and advancement logic need to work together. In power infrastructure contexts, that means helping frame bankability, risk allocation, and execution alignment early enough for the project to move with discipline.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/support#inquiry-form',
        label: 'Discuss Your Project',
        description: 'Bring a similar power, financing, or advancement constraint into a structured discussion.',
      },
      {
        href: '/capabilities',
        label: 'View Capabilities',
        description: 'See how ONEMIND works on structuring, financing readiness, and project advancement.',
      },
    ],
  },
  {
    slug: 'power-availability-does-not-match-project-scale',
    title: 'Power availability does not match project scale',
    description: 'A short project insight on what happens when proposed scale exceeds realistic power availability.',
    excerpt: 'The planned scale is clear. The available power is not.',
    summary: 'Projects stall when proposed capacity is disconnected from realistic power availability and site readiness.',
    seenIn: 'Seen in early-stage projects without confirmed power access.',
    keywords: ['power availability', 'project scale', 'infrastructure readiness'],
    sections: [
      {
        title: 'Context',
        paragraphs: ['The project ambition is defined before usable power availability is confirmed.'],
      },
      {
        title: 'What Happens',
        paragraphs: ['Scope moves ahead, but site, grid, or system conditions cannot support the planned scale.'],
      },
      {
        title: 'Where It Gets Stuck',
        paragraphs: ['The project cannot progress because the infrastructure base is weaker than the commercial plan.'],
      },
      {
        title: 'How It Can Be Addressed',
        paragraphs: ['Reset the project around actual power conditions, phased pathways, and infrastructure readiness.'],
      },
    ],
    relatedLinks: [
      {
        href: '/capabilities',
        label: 'View Capabilities',
        description: 'See how ONEMIND supports project structuring and readiness.',
      },
      {
        href: '/support#inquiry-form',
        label: 'Discuss Your Project',
        description: 'Start with the infrastructure constraint that is shaping the decision.',
      },
    ],
  },
  {
    slug: 'project-is-not-financing-ready',
    title: 'Project is not financing-ready',
    description: 'A short project insight on why defined projects still fail to attract capital engagement.',
    excerpt: 'The project exists, but the financing case does not.',
    summary: 'Projects stall when technical, commercial, and risk elements are not aligned for lender or investor review.',
    seenIn: 'Seen in projects where financing discussions begin before structuring is complete.',
    keywords: ['financing readiness', 'capital engagement', 'project structuring'],
    sections: [
      {
        title: 'Context',
        paragraphs: ['The project has direction, but key assumptions remain too loose for capital review.'],
      },
      {
        title: 'What Happens',
        paragraphs: ['Funding discussions begin early, then slow because the structure is not yet financeable.'],
      },
      {
        title: 'Where It Gets Stuck',
        paragraphs: ['The project cannot move because readiness for capital engagement has not been built in.'],
      },
      {
        title: 'How It Can Be Addressed',
        paragraphs: ['Tighten technical scope, commercial logic, and risk framing before financing outreach expands.'],
      },
    ],
    relatedLinks: [
      {
        href: '/capabilities',
        label: 'View Capabilities',
        description: 'Review financing enablement and project advancement support.',
      },
      {
        href: '/support#inquiry-form',
        label: 'Discuss Your Project',
        description: 'Share where the project is falling short on readiness.',
      },
    ],
  },
  {
    slug: 'project-lacks-structure',
    title: 'Project lacks structure',
    description: 'A short project insight on what happens when a project has ambition but no workable definition.',
    excerpt: 'The opportunity sounds clear. The project path does not.',
    summary: 'Projects stall when the core structure is missing, even if market interest or demand looks strong.',
    seenIn: 'Seen in developments that have defined ambition but unclear delivery pathways.',
    keywords: ['project structure', 'assessment', 'development pathway'],
    sections: [
      {
        title: 'Context',
        paragraphs: ['The project has a concept, but not yet a clear definition, pathway, or decision frame.'],
      },
      {
        title: 'What Happens',
        paragraphs: ['Stakeholders move in different directions because the project logic remains too broad.'],
      },
      {
        title: 'Where It Gets Stuck',
        paragraphs: ['The work cannot advance because scope, infrastructure needs, and next-stage priorities are still unclear.'],
      },
      {
        title: 'How It Can Be Addressed',
        paragraphs: ['Clarify the constraint, define the pathway, and reduce the project to an actionable structure.'],
      },
    ],
    relatedLinks: [
      {
        href: '/capabilities',
        label: 'View Capabilities',
        description: 'See how structuring support helps projects move from concept to definition.',
      },
      {
        href: '/support#inquiry-form',
        label: 'Discuss Your Project',
        description: 'Start with the part of the project that is still undefined.',
      },
    ],
  },
  {
    slug: 'cannot-move-to-execution',
    title: 'Cannot move to execution',
    description: 'A short project insight on why defined projects still fail to progress toward implementation.',
    excerpt: 'The project has been discussed. It has not been advanced.',
    summary: 'Projects stall when delivery pathways, sequencing, and coordination are not strong enough for execution.',
    seenIn: 'Seen in projects that have scope but no clear sequence for execution.',
    keywords: ['execution', 'delivery support', 'project advancement'],
    sections: [
      {
        title: 'Context',
        paragraphs: ['The project is defined, but practical advancement and delivery coordination remain weak.'],
      },
      {
        title: 'What Happens',
        paragraphs: ['Meetings continue, but the project does not gain execution momentum or controlled progress.'],
      },
      {
        title: 'Where It Gets Stuck',
        paragraphs: ['Implementation stalls because execution-aware planning has not caught up with project intent.'],
      },
      {
        title: 'How It Can Be Addressed',
        paragraphs: ['Rebuild the next stage around sequencing, responsibilities, and practical delivery support.'],
      },
    ],
    relatedLinks: [
      {
        href: '/projects',
        label: 'View Projects',
        description: 'Review project contexts where advancement and delivery support matter.',
      },
      {
        href: '/support#inquiry-form',
        label: 'Discuss Your Project',
        description: 'Share where the project is losing momentum.',
      },
    ],
  },
  {
    slug: 'compute-defined-power-missing',
    title: 'Compute defined, power missing',
    description: 'A short project insight on the risk of defining digital scope before power foundations are clear.',
    excerpt: 'The digital requirement is clear. The power base is not.',
    summary: 'Projects stall when compute or digital requirements are specified before the power foundation is understood.',
    seenIn: 'Seen in digital infrastructure projects where compute planning moves ahead of power planning.',
    keywords: ['compute defined', 'power missing', 'digital infrastructure'],
    sections: [
      {
        title: 'Context',
        paragraphs: ['The digital scope is moving ahead faster than the supporting power infrastructure assessment.'],
      },
      {
        title: 'What Happens',
        paragraphs: ['Technical ambition advances, but long-term feasibility weakens because the power base is unresolved.'],
      },
      {
        title: 'Where It Gets Stuck',
        paragraphs: ['The project cannot scale with confidence because infrastructure readiness is still incomplete.'],
      },
      {
        title: 'How It Can Be Addressed',
        paragraphs: ['Reset the project around power availability, reliability, and phased infrastructure logic.'],
      },
    ],
    relatedLinks: [
      {
        href: '/capabilities',
        label: 'View Capabilities',
        description: 'Review where power infrastructure sits inside project structuring and advancement.',
      },
      {
        href: '/support#inquiry-form',
        label: 'Discuss Your Project',
        description: 'Start with the missing power condition that is blocking progress.',
      },
    ],
  },
]

export const projects: ProjectEntry[] = [
  {
    slug: 'power-infrastructure-project-in-iraq',
    title: 'Power Infrastructure Project in Iraq',
    description: 'A short project summary showing ONEMIND experience in a complex power infrastructure environment.',
    summary: 'Power infrastructure work in a complex market with delivery pressure and infrastructure constraints.',
    region: 'Iraq',
    projectType: 'Power Project',
    roleType: 'Project Coordination',
    role: 'Supported project structuring and advancement in a delivery-sensitive power context.',
    value: 'Showed how infrastructure readiness and execution logic shape project progress in complex environments.',
    keywords: ['Iraq power project', 'complex market', 'power infrastructure'],
    sections: [
      { title: 'Context', paragraphs: ['The project sat in a market where infrastructure conditions and execution discipline both mattered.'] },
      { title: 'Challenge', paragraphs: ['Project progress depended on aligning local constraints, system logic, and delivery reality.'] },
      { title: 'Our Role', paragraphs: ['We supported the work through project thinking grounded in power infrastructure conditions and advancement logic.'] },
      { title: 'Outcome', paragraphs: ['The experience reinforced how structure and delivery awareness affect project viability in complex markets.'] },
    ],
    relatedLinks: [
      { href: '/capabilities', label: 'View Capabilities', description: 'See how structuring and advancement support connect to project work.' },
      { href: '/support#inquiry-form', label: 'Discuss Your Project', description: 'Start with the market, constraint, or delivery issue that matters most.' },
    ],
  },
  {
    slug: 'utility-scale-solar-pv-project',
    title: 'Utility-Scale Solar PV Project',
    description: 'A short project summary showing ONEMIND experience in renewable energy development support.',
    summary: 'Renewable energy development shaped by technical configuration, readiness, and delivery sequencing.',
    region: 'Renewable Energy Market',
    projectType: 'Renewable Project',
    roleType: 'Structuring',
    role: 'Supported project thinking around structure, readiness, and staged advancement for large-scale solar development.',
    value: 'Showed how renewable projects need technical logic and financing readiness to move beyond concept. ',
    keywords: ['solar PV project', 'renewable development', 'financing readiness'],
    sections: [
      { title: 'Context', paragraphs: ['The project involved renewable energy development where staged progress and readiness mattered early.'] },
      { title: 'Challenge', paragraphs: ['The work required alignment between technical setup, development logic, and project progression.'] },
      { title: 'Our Role', paragraphs: ['We supported the project through infrastructure-led thinking tied to readiness and advancement.'] },
      { title: 'Outcome', paragraphs: ['The experience strengthened our view that renewable projects move faster when structure and financing logic are addressed early.'] },
    ],
    relatedLinks: [
      { href: '/capabilities', label: 'View Capabilities', description: 'See where renewable projects fit inside our capabilities model.' },
      { href: '/support#inquiry-form', label: 'Discuss Your Project', description: 'Start with the readiness issue shaping your next stage.' },
    ],
  },
  {
    slug: 'bess-for-critical-infrastructure',
    title: 'BESS for Critical Infrastructure',
    description: 'A short project summary showing ONEMIND experience in resilience-focused power systems.',
    summary: 'Critical infrastructure power work where reliability, backup logic, and operational continuity mattered.',
    region: 'Critical Infrastructure Environment',
    projectType: 'Industrial Power Project',
    roleType: 'Infrastructure Planning',
    role: 'Supported project thinking around resilience, backup power, and practical advancement in a critical environment.',
    value: 'Showed how dependable power systems become a defining constraint for operational continuity and project viability.',
    keywords: ['BESS', 'critical infrastructure', 'industrial power'],
    sections: [
      { title: 'Context', paragraphs: ['The project involved a critical environment where dependable power systems were central to operations.'] },
      { title: 'Challenge', paragraphs: ['Reliability requirements had to be translated into workable backup, resilience, and delivery decisions.'] },
      { title: 'Our Role', paragraphs: ['We supported the work with power infrastructure thinking tied to continuity, readiness, and advancement.'] },
      { title: 'Outcome', paragraphs: ['The experience confirmed that resilience planning is often a core project question, not a technical afterthought.'] },
    ],
    relatedLinks: [
      { href: '/projects', label: 'View Projects', description: 'Review more short project summaries across power and infrastructure contexts.' },
      { href: '/support#inquiry-form', label: 'Discuss Your Project', description: 'Start with the reliability or execution constraint facing the project.' },
    ],
  },
]

export function getInsightBySlug(slug: string) {
  return insights.find((item) => item.slug === slug)
}

export function getProjectBySlug(slug: string) {
  return projects.find((item) => item.slug === slug)
}

export const zhInsights: ZhInsightArticle[] = [
  {
    slug: 'ai-data-center-power-and-infrastructure-requirements',
    title: 'AI数据中心怎么建设：电力与基础设施要求解析',
    description:
      '从电力需求、供电稳定性、站点条件到算力基础设施协同，解析 AI 数据中心建设的关键要求。',
    excerpt:
      'AI数据中心建设不是先买 GPU 再找地方上架，而是要先看电力、站点和基础设施是否能承接长期算力部署。',
    summary:
      '这篇文章围绕 AI 数据中心建设中最常被低估的部分展开：电力、供电稳定性、站点准备度，以及为什么算力与能源要一起规划。',
    keywords: ['AI数据中心', '算力基础设施', '电力需求', 'AI算力部署', '数据中心供电'],
    sections: [
      {
        title: 'AI数据中心建设，核心不是先选 GPU',
        paragraphs: [
          '很多团队讨论 AI 数据中心时，第一反应是 GPU 型号、服务器密度或机柜规模。但真正决定项目能否落地的，往往不是设备清单，而是站点是否具备承接这类负载的基础设施条件。',
          '对于面向长期运营的 AI 算力部署来说，供电能力、供电稳定性、冷却策略、站点准备度和后续扩容路径，都会直接影响项目可行性。',
        ],
      },
      {
        title: '电力需求会反过来决定建设路径',
        paragraphs: [
          'AI 数据中心的电力需求不是一个后置问题。它会影响选址、建设节奏、冗余策略、设备部署方式，以及未来的扩容安排。',
          '很多项目不是拿不到设备，而是拿到了设备之后发现电力条件、接入条件或者基础设施准备度并不支持持续运营。',
        ],
        bullets: ['供电接入条件', '负载连续性要求', '备用电与冗余策略', '未来扩容能力'],
      },
      {
        title: '算力基础设施与能源系统必须一起看',
        paragraphs: [
          '如果算力系统和能源系统分开规划，项目后期很容易出现成本上升、交付延迟或稳定性不达标的问题。',
          '更合理的做法，是在项目早期就把供电能力、能源系统、算力规模和部署节奏放进同一个基础设施框架里一起评估。',
        ],
      },
      {
        title: '选址与供电稳定性决定长期运营质量',
        paragraphs: [
          'AI 数据中心不是只要有地就能建。不同区域的供电稳定性、基础设施条件和交付成熟度差异很大。',
          '对海外项目或新建项目来说，越早判断当地电力与基础设施条件，越容易建立稳定、可扩展的算力部署路径。',
        ],
      },
      {
        title: 'ONEMIND 更关注的是整体部署逻辑',
        paragraphs: [
          'ONEMIND 不把 AI 数据中心看成单纯的设备采购项目，而是把它当作算力与能源一体化的基础设施项目来规划。',
          '这意味着我们更关注项目是否具备可交付性、可扩展性和长期成本合理性，而不是只给出一份硬件清单。',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/financing',
        label: '了解融资路径',
        description: '查看 AI 基础设施融资如何与算力和能源部署协同。',
      },
      {
        href: '/projects',
        label: '查看项目经验',
        description: '了解 ONEMIND 在电力、光伏和储能方向的项目经验。',
      },
      {
        href: '/support#inquiry-form',
        label: '提交项目需求',
        description: '提交您的站点、电力与算力需求，获取方案评估。',
      },
    ],
  },
  {
    slug: 'reducing-ai-compute-cost-through-energy-integration',
    title: '如何通过能源一体化降低AI算力成本',
    description:
      '解析 AI 算力成本背后的电力、CAPEX、OPEX 与专属能源系统逻辑，理解为什么算力与能源一体化有助于降低长期成本。',
    excerpt:
      'AI 算力成本不只是芯片价格，更长期的变量往往来自电力、站点和基础设施结构本身。',
    summary:
      '很多项目讨论降本时只看服务器采购价格，但长期来看，电力成本、部署方式和融资结构对 AI 算力成本的影响往往更大。',
    keywords: ['AI算力成本', '算力与能源', '降低算力成本', 'AI基础设施', '专属能源系统'],
    sections: [
      {
        title: '为什么 AI 算力成本不能只看设备价格',
        paragraphs: [
          '在算力项目早期，团队往往首先比较芯片、服务器和集群采购价格。但真正影响长期成本结构的，通常是电力、站点准备度、运行稳定性和扩容方式。',
          '如果这些因素在前期没有一起评估，表面上便宜的部署方案，后续可能变成更高的整体成本。',
        ],
      },
      {
        title: '电力成本会长期影响算力成本',
        paragraphs: [
          '一旦算力进入持续运营阶段，电力就会成为长期成本的重要组成部分。电价、供电稳定性、备用系统和能源获取方式，都会影响项目的运行效率。',
          '对中长期部署来说，算力成本本质上是“设备 + 电力 + 基础设施 + 运营”共同决定的结果。',
        ],
      },
      {
        title: '专属能源系统为什么有价值',
        paragraphs: [
          '专属能源系统的意义，并不只是为了“更便宜的电”，而是为了让算力部署拥有更稳定、更可控、更适合扩展的能源基础。',
          '当能源系统与算力部署同步规划时，项目在负载匹配、备用策略、扩容路径和整体运行逻辑上都更容易形成健康结构。',
        ],
      },
      {
        title: 'CAPEX 与 OPEX 需要一起看',
        paragraphs: [
          '降本不一定意味着最低 upfront CAPEX。对部分项目来说，更合理的能源系统投入可能换来更优的长期 OPEX 结构。',
          '因此，是否引入融资、是否分阶段部署、是否把能源纳入整体方案，都会影响最终的算力成本模型。',
        ],
      },
      {
        title: '能源一体化更适合项目型算力部署',
        paragraphs: [
          '对于海外项目、工业场景或新建算力基础设施来说，能源与算力一体化往往比单独采购设备更适合建立长期可运营的模型。',
          '这也是 ONEMIND 当前重点推动的方向：把算力、能源、融资和部署一起看，而不是分散处理。',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/financing',
        label: '获取融资方案',
        description: '查看融资如何帮助降低 AI 基础设施前期压力。',
      },
      {
        href: '/delivery',
        label: '查看交付流程',
        description: '了解从需求评估到部署规划的交付逻辑。',
      },
      {
        href: '/support#inquiry-form',
        label: '联系 ONEMIND',
        description: '提交算力、能源或融资需求，获取更匹配的部署建议。',
      },
    ],
  },
  {
    slug: 'middle-east-ai-infrastructure-opportunities-and-challenges',
    title: '中东AI基础设施部署的机会与挑战',
    description:
      '从电力条件、基础设施机会到交付风险，分析中东 AI 基础设施和算力部署为什么值得关注。',
    excerpt:
      '中东正在成为 AI 基础设施的重要关注区域，但真正决定项目成败的，仍然是电力、站点条件和交付方式。',
    summary:
      '中东市场正在吸引越来越多 AI 基础设施相关关注，但对项目客户来说，机会之外，更重要的是如何识别可落地的部署路径。',
    keywords: ['中东AI基础设施', '中东数据中心', 'AI算力部署', '电力与算力', '海外AI项目'],
    sections: [
      {
        title: '为什么中东值得关注',
        paragraphs: [
          '中东之所以受到关注，不只是因为区域发展速度快，还因为它在能源、基础设施和大型项目推进方面具备独特条件。',
          '对于考虑海外 AI 算力部署的客户来说，中东确实可能提供新的部署窗口，但前提是项目必须建立在真实可交付的基础设施条件上。',
        ],
      },
      {
        title: '机会来自电力、土地与基础设施窗口',
        paragraphs: [
          '在部分区域，中东具备相对明确的能源基础、基础设施投资能力以及对新型数字能力的承接意愿。',
          '这些因素叠加，使得 AI 数据中心和相关算力基础设施具备一定的建设机会。',
        ],
      },
      {
        title: '挑战也同样真实',
        paragraphs: [
          '中东并不是“有机会就能落地”。电力接入、站点准备度、项目协同、交付组织能力等因素，都会影响项目推进节奏。',
          '如果只看区域热度，而忽略具体部署条件，项目很容易在后期遇到延迟、成本失控或基础设施不匹配的问题。',
        ],
      },
      {
        title: '为什么一体化模型更适合',
        paragraphs: [
          '对于这类区域项目，把算力、能源和部署路径一起看，更容易形成可执行的项目结构。',
          '如果能源系统只是后置考虑，项目通常会在交付或长期运营阶段暴露问题。相反，越早把能源纳入算力方案，整体路径越清晰。',
        ],
      },
      {
        title: 'ONEMIND 更适合介入在哪些阶段',
        paragraphs: [
          'ONEMIND 更擅长介入项目评估、部署结构设计和基础设施方案阶段，帮助客户判断项目是否具备长期可行性。',
          '这类工作对于中东、非洲及其他新兴市场项目尤其重要，因为这些区域更需要项目型基础设施思维，而不是单点设备交付思维。',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/projects',
        label: '查看项目经验',
        description: '了解 ONEMIND 在新兴市场与能源基础设施方向的能力展示。',
      },
      {
        href: '/financing',
        label: '了解融资支持',
        description: '查看融资如何帮助海外 AI 基础设施项目建立更合理的部署路径。',
      },
      {
        href: '/support#inquiry-form',
        label: '提交海外项目需求',
        description: '围绕中东或其他海外项目提交站点与部署需求。',
      },
    ],
  },
]

export function getZhInsightBySlug(slug: string) {
  return zhInsights.find((item) => item.slug === slug)
}
