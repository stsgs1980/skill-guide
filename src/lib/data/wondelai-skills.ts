import type { WondelaiSkill } from './types'

export const WONDELAI_SKILLS: WondelaiSkill[] = [
  // Code Quality
  {
    slug: 'clean-code',
    source: 'Clean Code — Robert C. Martin',
    category: 'code',
    description: 'Write readable, maintainable code through disciplined naming, small functions, and clean error handling.',
    routingRule:
      'Tests pass and the structure is wrong: a god class, a grown conditional → Refactoring. The structure is fine and the prose is not: names like data2, eighty-line functions → Clean Code.',
    techniques: [
      'Meaningful names (intention-revealing, no Hungarian)',
      'Small functions (Step-Down Rule, ≤2 args, extract-till-you-drop)',
      'Error handling (exceptions over return codes, no null)',
      'Unit testing (Three Laws of TDD, F.I.R.S.T.)',
      'Code smells catalog paired with targeted refactorings',
    ],
  },
  {
    slug: 'pragmatic-programmer',
    source: 'The Pragmatic Programmer — Hunt & Thomas',
    category: 'code',
    description: 'Apply meta-principles of software craftsmanship: DRY, orthogonality, tracer bullets, design by contract.',
    routingRule:
      'Want line-level readability rules → Clean Code. Task is a named, mechanical code transformation → Refactoring. Choosing between architectures → Clean Architecture.',
    techniques: [
      'DRY (single source of truth, not characters)',
      'Orthogonality — decoupled, independently testable',
      'Tracer Bullets & Prototypes — reversible exploration',
      'Design by Contract & assertive programming',
      'Broken Window Theory — fix decay immediately',
    ],
  },
  {
    slug: 'refactoring-patterns',
    source: 'Refactoring — Martin Fowler',
    category: 'code',
    description: 'Apply named refactoring transformations to improve code structure without changing behavior.',
    routingRule:
      'No tests to protect the change → Legacy Code (safety net first). Deciding what good code looks like rather than how to transform it → Clean Code.',
    techniques: [
      'Code smells as triggers (smell → refactoring mapping)',
      'Composing Methods (Extract, Inline, Replace Temp with Query)',
      'Moving Features Between Objects (Move Method, Extract Class)',
      'Simplifying Conditional Logic (Replace Conditional with Polymorphism)',
      'Safe refactoring workflow (small steps, tests green between each)',
    ],
  },
  {
    slug: 'software-design-philosophy',
    source: 'A Philosophy of Software Design — John Ousterhout',
    category: 'code',
    description: 'Manage software complexity through deep modules, information hiding, and strategic programming.',
    routingRule:
      'Need naming and function-level style rules → Clean Code. Question is which layer owns a dependency → Clean Architecture. Modelling a complex business domain → DDD.',
    techniques: [
      'Complexity and its causes (change amplification, obscurity)',
      'Deep vs shallow modules (interface small, functionality deep)',
      'Information hiding and leakage detection',
      'General-purpose vs special-purpose modules',
      'Strategic vs tactical programming',
    ],
  },
  {
    slug: 'working-with-legacy-code',
    source: 'Working Effectively with Legacy Code — Michael Feathers',
    category: 'code',
    description: "Safely change and test untested codebases using Feathers' techniques.",
    routingRule: 'Code already has good test coverage → go straight to Refactoring. Writing new code that should read well → Clean Code.',
    techniques: [
      'The Legacy Code Dilemma & Change Algorithm',
      'Seams (object, link, preprocessing) — where to pry code apart',
      'Characterization tests / golden master',
      'Sprout Method & Sprout Class (change without tests first)',
      'Dependency-breaking techniques (extract interface, parameterize constructor)',
    ],
  },
  {
    slug: 'technical-documentation',
    source: 'Google Developer Documentation Style Guide',
    category: 'code',
    description: "Audit, write, and improve developer documentation using Google's style guide.",
    routingRule: 'Writing landing-page/marketing copy → StoryBrand. Problem is naming and comments inside the code → Clean Code.',
    techniques: [
      "Know the reader and the document's job",
      'Voice: you, active, present, timeless',
      'Structure: headings, lists, tables, notices',
      'Procedures and code samples',
      'Reference docs: API, docstrings, CLI help',
      'Release notes, changelogs, migration guides',
    ],
  },
  // Architecture & Systems
  {
    slug: 'clean-architecture',
    source: 'Clean Architecture — Robert C. Martin',
    category: 'architecture',
    description:
      'Structure software around the Dependency Rule: source code dependencies point inward from frameworks to use cases to entities.',
    routingRule:
      "App is small and layers would cost more than they save → Software Design's complexity test. Know you need boundaries but not where they go → DDD. Need the system to survive a failing dependency → Release It!.",
    techniques: [
      'Dependency Rule & concentric circles (Entities → Use Cases → Adapters → Frameworks)',
      'Entities and Use Cases',
      'Interface Adapters and Frameworks isolation',
      'Component Principles (REP, CCP, CRP, ADP, SDP, SAP)',
      'SOLID Principles',
      'Boundaries and boundary anatomy',
    ],
  },
  {
    slug: 'domain-driven-design',
    source: 'Domain-Driven Design — Eric Evans',
    category: 'architecture',
    description: 'Model software around the business domain using bounded contexts, aggregates, and ubiquitous language.',
    routingRule:
      'Domain is genuinely simple CRUD → 37signals Way. Have the model, need which way dependencies cross its boundaries → Clean Architecture. Hard part is persistence/replication/consistency → DDIA.',
    techniques: [
      'Ubiquitous Language',
      'Bounded Contexts and Context Mapping',
      'Entities vs Value Objects, Aggregates & roots',
      'Domain Events',
      'Repositories and Factories',
      'Strategic Design and Distillation',
    ],
  },
  {
    slug: 'ddia-systems',
    source: 'Designing Data-Intensive Applications — Martin Kleppmann',
    category: 'architecture',
    description: 'Design data systems by understanding storage engines, replication, partitioning, transactions, and consistency models.',
    routingRule:
      'Need capacity numbers and a component sketch rather than storage-engine internals → System Design. Question is how the app copes when the database is slow rather than wrong → Release It!.',
    techniques: [
      'Data models and query languages (relational, document, graph)',
      'Storage engines (B-trees, LSM-trees)',
      'Replication (single-leader, multi-leader, leaderless)',
      'Partitioning (key-range, hash)',
      'Transactions and consistency / isolation levels',
      'Batch and stream processing',
    ],
  },
  {
    slug: 'system-design',
    source: 'System Design Interview — Alex Xu',
    category: 'architecture',
    description: 'Design scalable distributed systems using structured approaches for load balancing, caching, database scaling.',
    routingRule:
      'Need the internals behind the boxes (replication modes, isolation levels) → DDIA. System already exists and falls over under real traffic → Release It!.',
    techniques: [
      'The four-step process (understand → estimate → design → wrap-up)',
      'Back-of-the-envelope estimation',
      'Building blocks (LB, cache, queues, CDN, proxies)',
      'Database design and scaling (sharding, replication)',
      'Common system designs (TinyURL, feeds, chat)',
      'Reliability and operations',
    ],
  },
  {
    slug: 'release-it',
    source: 'Release It! — Michael T. Nygard',
    category: 'architecture',
    description: 'Build production-ready systems with stability patterns: circuit breakers, bulkheads, timeouts, retry logic.',
    routingRule:
      "Sizing a system that does not exist yet → System Design's estimation. Failure is a data anomaly under concurrency → DDIA. Pages load slowly but nothing is falling over → High Perf Browser.",
    techniques: [
      'Stability anti-patterns (cascading failures, blocked threads)',
      'Stability patterns (circuit breaker, bulkhead, timeout, retry/backoff)',
      'Capacity and availability math',
      'Deployment and release decoupling (deploy vs release)',
      'Health checks and observability',
      'Adaptation and chaos engineering',
    ],
  },
  {
    slug: 'high-perf-browser',
    source: 'High Performance Browser Networking — Ilya Grigorik',
    category: 'architecture',
    description: 'Optimize web performance through network protocols, resource loading, and browser rendering internals.',
    routingRule:
      'Bottleneck is a query plan or saturated worker → DDIA or System Design. Want visual polish and perceived-speed cues → Refactoring UI. Fonts are blocking first paint → Web Typography.',
    techniques: [
      'Network fundamentals (TCP, TLS, latency)',
      'HTTP protocol evolution (HTTP/2, HTTP/3, QUIC)',
      'Resource loading & critical rendering path',
      'Caching strategies (Cache-Control, service workers)',
      'Core Web Vitals optimization (LCP, INP, CLS)',
      'Real-time communication (WebSocket, SSE, WebRTC)',
    ],
  },
  // Design & UX (4 recommended)
  {
    slug: 'refactoring-ui',
    source: 'Refactoring UI — Adam Wathan & Steve Schoger',
    category: 'design',
    description: 'Audit and fix visual hierarchy, spacing, color, and depth in web UIs.',
    routingRule:
      'Users cannot find the button rather than disliking how it looks → UX Heuristics. Choosing and tuning typefaces → Web Typography. Want a site people remember, not one that looks professional → Top Design.',
    techniques: [
      'Visual hierarchy (contrast, size, color → what draws the eye)',
      'Spacing & sizing (constrained scales, 8pt systems)',
      'Typography basics for UI',
      'Color (grayscale-first workflow, dark mode, palettes)',
      'Depth & shadows (consistent elevation)',
      'Layout & composition',
    ],
  },
  {
    slug: 'ux-heuristics',
    source: "Don't Make Me Think (Krug) + Nielsen's 10 Heuristics",
    category: 'design',
    description: 'Evaluate and improve interface usability using heuristic analysis.',
    routingRule:
      'Interface is usable and simply looks unprofessional → Refactoring UI. Want more signups from the same traffic → CRO Methodology. Need real reasons from real users → The Mom Test.',
    techniques: [
      "Krug's laws (Don't Make Me Think; clicks do not matter; cut half the words; the Trunk Test)",
      "Nielsen's 10 heuristics (visibility, real-world match, user control, consistency, error prevention)",
      'Severity rating scale (0-4)',
      'Dark-pattern recognition',
      'Heuristic-conflict resolution',
      'Choosing the right method per situation',
    ],
  },
  {
    slug: 'web-typography',
    source: 'On Web Typography — Jason Santa Maria',
    category: 'design',
    description: 'Select, pair, and implement typefaces for web projects.',
    routingRule:
      'Want type as spectacle (viewport-filling display, kinetic text) → Top Design. Whole visual system needs work, not only the type → Refactoring UI. Font weight is one symptom of a slow page → High Perf Browser.',
    techniques: [
      'How we read (saccades, fixation)',
      'Evaluating typefaces (readability metrics)',
      'Choosing and pairing typefaces',
      'Typographic measurements (measure, leading, tracking, scale)',
      'Building type hierarchies',
      'Responsive typography & web font performance (FOUT/FOIT, variable fonts)',
    ],
  },
  {
    slug: 'microinteractions',
    source: 'Microinteractions — Dan Saffer',
    category: 'design',
    description: 'Design the small details — triggers, rules, feedback, loops and modes — that separate good products from great ones.',
    routingRule:
      'Nobody can find the feature in the first place → UX Heuristics (findability before delight). On iOS and want system-standard haptics → iOS HIG Design. Visual language is inconsistent, not just the transitions → Refactoring UI.',
    techniques: [
      'Triggers (manual & system)',
      'Rules (what happens, constraints, edge cases)',
      'Feedback (visual, audio, haptic)',
      'Loops and modes',
      'Signature moments',
      'Reducing and simplifying',
    ],
  },
]
