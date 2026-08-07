export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Resume', href: '#resume' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const buildCards = [
  'Native macOS tools',
  'AI/full-stack products',
  'Browser extensions',
  'Productivity systems',
  'iOS apps',
  'Product documentation',
];

export const products = [
  {
  id: 'native-macos-website-restriction-platform',
  name: 'Native macOS Website Restriction Platform',
  description:
    'Native Swift and SwiftUI macOS platform for reliable website restrictions, scheduling, browser coordination, lifecycle recovery, and privacy-conscious local enforcement.',
  shortDescription:
    'Native macOS website-management platform built around reliability, recovery, and protected user controls.',
  techStack: [
    'Swift',
    'SwiftUI',
    'macOS',
    'Chrome MV3',
    'Native Messaging',
    'XCTest',
  ],
  status: 'Private product / In development',
  accent: 'blue',
  previewLabel: 'Private product — media withheld',
  highlights: [
    'Native macOS and browser-platform integration',
    'Reliable scheduled and overlapping restrictions',
    'Recovery across crashes, restarts, and interrupted states',
    'Setup, diagnostics, and repair-oriented user workflows',
    '1,003 XCTest tests with 0 failures',
  ],
  caseStudy: {
    problem:
      'I wanted a focus tool that could provide more reliable website restrictions than a browser-only solution while still feeling like a polished native Mac product. The goal was to make intentional focus easier through clear scheduling, dependable behavior, and meaningful friction without overstating what software can guarantee on a user-controlled computer.',

    built:
      'I built a native macOS platform that coordinates system-level and browser-level components to support website restrictions, schedules, protected sessions, and browser-specific workflows. I focused heavily on reliability, recovery, privacy, and making difficult system behavior understandable through a simple native interface.',

    architecture:
      'The product combines a native Swift/SwiftUI application with supporting macOS and browser components. The public portfolio intentionally omits lower-level enforcement mechanisms, state formats, communication protocols, and recovery implementation because the product remains under active private development.',

    challenge:
      'The most difficult engineering work was making protection state remain correct through real-world lifecycle events. Features that work perfectly during a normal session can behave very differently after crashes, restarts, interrupted updates, or overlapping schedules. I spent substantial time designing recovery behavior, validating edge cases, and building regression coverage so the product could return to the correct state rather than depending on the ideal execution path.',

    boundaries:
      'This is a private self-control product, not a claim of absolute device security. Public materials intentionally exclude implementation details that could expose proprietary enforcement or recovery behavior. I can discuss the architecture, tradeoffs, testing strategy, and selected implementation decisions in an interview setting.',
  },
},
  {
  id: 'native-macos-application-management-platform',
  name: 'Native macOS Application Management Platform',
  description:
    'Native SwiftUI and AppKit macOS application-management product for usage limits, schedules, focused sessions, protected settings, and reliable lifecycle behavior.',
  shortDescription:
    'Native macOS application-management platform combining time-based controls, focused workflows, and protected configuration.',
  techStack: [
    'Swift',
    'SwiftUI',
    'AppKit',
    'macOS',
    'Core Location',
    'UserNotifications',
  ],
  status: 'Private product / In development',
  accent: 'mint',
  previewLabel: 'Private product — media withheld',
  highlights: [
    'Native SwiftUI and AppKit menu-bar experience',
    'Application usage limits and scheduled controls',
    'Focused-session workflows',
    'Protected configuration changes',
    'Location-aware product behavior and lifecycle recovery',
  ],
  caseStudy: {
    problem:
      'While building larger software projects, I wanted a better way to create boundaries around distracting desktop applications. Simple timers were easy to ignore, so I wanted something native to macOS that could combine time-based controls with enough friction to make those decisions meaningful.',

    built:
      'I built a native macOS menu-bar product that manages application access through configurable limits, schedules, focused sessions, temporary restrictions, and protected settings. The product is designed to remain lightweight during normal Mac use while making its current state understandable to the user.',

    architecture:
      'The application is built with Swift, SwiftUI, and AppKit and integrates with native macOS lifecycle and application-management APIs. Persistent local state, notifications, startup behavior, and location-aware workflows support the user-facing experience. Detailed monitoring, enforcement, persistence, and policy logic remain private while the product is under development.',

    challenge:
      'One of the most interesting challenges was making a powerful control system feel simple. A product can support many combinations of limits, schedules, focused sessions, and protected states, but users still need to understand what is currently happening and why. I spent significant time refining the native menu-bar experience, configuration screens, lifecycle behavior, and rule presentation so the complexity stayed behind the interface rather than being pushed onto the user.',

    boundaries:
      'The application processes its configuration locally and is intended as a personal self-control tool rather than surveillance software or an absolute security boundary. Public materials intentionally omit implementation details that could expose proprietary monitoring, enforcement, location, or protection behavior.',
  },
},
  {
    id: 'evrana',
    name: 'Evrana',
    description:
      'Cross-platform AI habit-support and reflection app with React web, FastAPI backend, PostgreSQL persistence, OpenAI workflows, and SwiftUI iOS client.',
    shortDescription:
      'AI habit-support and reflection system spanning web, backend services, database, and iOS.',
    techStack: [
      'React',
      'FastAPI',
      'PostgreSQL',
      'OpenAI API',
      'SwiftUI iOS',
      'JWT',
      'Google Auth',
    ],
    status: 'Private product / In development',
    accent: 'pink',
    previewLabel: 'AI reflection workspace',
    logo: '/product-logos/evrana-logo.png',
    logoAlt: 'Evrana logo',
    highlights: [
      'AI chat, journaling, recall, trigger insights, growth tracking',
      'JWT/Google authentication',
      'iOS Keychain token storage',
      'SQL migrations and backend domain services',
      'Tests for trigger precision, privacy isolation, protected routes, malicious input, and rate limiting',
    ],
    caseStudy: {
      problem:
        'I wanted a place where I could reflect on my day, track growth over time, and organize important moments, setbacks, patterns, and insights. I also wanted the product to support conversation, journaling, recall, and progress tracking in one connected system.',
      built:
        'I built a cross-platform AI support and reflection product with AI chat, journaling, recall, trigger insights, golden moments, growth tracking, authenticated web flows, backend services, SQL persistence, and a native SwiftUI iOS client.',
      architecture:
        'React powers the web client, FastAPI handles domain services and OpenAI workflows, PostgreSQL persists user data, JWT/Google authentication protects routes, and SwiftUI iOS stores app tokens through Keychain while sharing backend API contracts with the web product.',
      challenge:
        'The hardest engineering challenge was keeping AI behavior separated across different modes. I thought of this as avoiding mode bleed: I did not want one mode\'s tone, assumptions, or safety behavior to leak into another mode, especially around sensitive flows. I handled this with backend-defined mode boundaries, separated prompt construction, endpoint-level validation, and defensive checks around mode selection and crisis-sensitive behavior.',
      boundaries:
        'The product treats reflection data as sensitive. The portfolio does not expose private prompts, private workflows, secrets, database contents, or repository source. The product is positioned as supportive reflection software, not crisis response or a replacement for qualified support.',
    },
  },
  {
    id: 'college-ai',
    name: 'College AI',
    description:
      'Full-stack AI study platform that turns notes, homework, practice attempts, and uploaded exam materials into class-scoped tutoring, practice, mastery tracking, and evidence-based exam prep.',
    shortDescription:
      'AI study platform for class-scoped tutoring, practice generation, mastery tracking, and exam prep.',
    techStack: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'OpenAI API',
      'async SQLAlchemy',
    ],
    status: 'Private product / In development',
    accent: 'yellow',
    previewLabel: 'class-scoped study system',
    highlights: [
      'Notes upload and concept extraction',
      'Homework tutoring and adaptive practice',
      'Mastery tracking, flashcards, analytics',
      'Evidence-grounded Exam Lockdown workflow',
      'Links LLM-generated plans to persisted extracted question IDs',
    ],
    caseStudy: {
      problem:
        'College AI started from a real study problem. In one of my classes, slides were basically the study guide, so I first built it as a flashcard generator for deeper review. As I used it for more classes, especially math-heavy classes where practice mattered more than memorization, it expanded into homework tutoring, mastery tracking, and exam-focused workflows.',
      built:
        'I built a full-stack AI study platform that ingests class notes, homework, practice attempts, and exam materials to power tutoring, practice, concept extraction, mastery tracking, flashcards, analytics, and evidence-based exam prep.',
      architecture:
        'The frontend uses Next.js and TypeScript. The backend uses FastAPI, async SQLAlchemy, PostgreSQL, pgvector, file extraction services, and OpenAI workflows tied back to persisted class artifacts and class-scoped learning data.',
      challenge:
        'The hardest challenge was grounding AI extraction in the actual course materials. I wanted extracted notes, topics, and recommended questions to be supported by evidence from uploaded materials instead of unsupported AI guesses. I worked on a retrieval and embedding-based pipeline, source-aware extraction, filtering for unnecessary information, and boosting important review sections so generated study plans could stay connected to real class artifacts.',
      boundaries:
        'The product is designed around user-scoped and class-scoped data with evidence-grounded outputs. Private materials, database contents, prompts, and source code stay out of the public portfolio. This is still a prototype/MVP, so it should not be presented as a hardened production system yet; production use would require deeper upload security, retention controls, deletion flows, and privacy review.',
    },
  },
  {
    id: 'personal-keyword-blocker',
    name: 'Personal Keyword Blocker',
    description:
      'Published privacy-first Chrome Manifest V3 extension that blocks user-defined keywords across URLs, search queries, page titles, typed text, forms, and optional visible page text.',
    shortDescription:
      'Published privacy-first Chrome MV3 extension for local keyword blocking and self-control lists.',
    techStack: ['Chrome MV3', 'JavaScript', 'Chrome APIs', 'HTML', 'CSS'],
    status: 'Published extension',
    accent: 'lavender',
    previewLabel: 'extension controls and blocked page',
    logo: '/product-logos/keyword-blocker-logo.png',
    logoAlt: 'Personal Keyword Blocker logo',
    highlights: [
      'Local-only enforcement with no backend or telemetry',
      'Custom regex builder',
      'Boundary-safe matching and leet/accent/separator variants',
      'Trusted URL exceptions',
      'Sync/local storage fallback',
      'Append-only lock mode',
    ],
    caseStudy: {
      problem:
        'I wanted a keyword blocker that was more versatile than simple word matching. Many blockers only check exact words or obvious pages, which means variations, separators, accents, or larger word forms can bypass them. I wanted users to choose between stricter boundary-safe matching and a stronger max-security mode for terms they intentionally want matched more broadly.',
      built:
        'I built a Chrome Manifest V3 extension that checks URLs, search queries, page titles, typed text, form submissions, and optional page text locally against user-defined lists.',
      architecture:
        'The extension uses MV3 service workers and content scripts, Chrome storage sync/local fallback, local regex compilation, trusted URL exceptions, blocked-page routing, and an options UI for import/export, previews, privacy controls, and append-only lock settings.',
      challenge:
        'The hardest engineering challenge was normalizing the detection engine while avoiding false positives. Short words could accidentally match harmless URL segments, authentication paths, or tracking parameters. I improved this by separating hostname, path, and meaningful search-query scanning so the extension could still catch intentional search terms while reducing false positives in unrelated URL parts.',
      boundaries:
        'The extension has no backend, telemetry, analytics, advertising, or remote code. Blocked terms and browsing content are processed locally. Append-only lock mode is designed as a self-control workflow, not a cryptographic security boundary.',
    },
  },
  {
    id: 'discipline-feed-guard',
    name: 'Discipline Feed Guard',
    description:
      'Local-only Chrome Manifest V3 extension that hides distracting Reddit, YouTube, and LinkedIn surfaces while preserving useful pages and workflows.',
    shortDescription:
      'Privacy-first Chrome extension that reduces distracting feeds, recommendations, Shorts, comments, news rails, promoted posts, and other distraction loops across Reddit, YouTube, and LinkedIn.',
    techStack: [
      'Chrome MV3',
      'JavaScript',
      'Content scripts',
      'Service worker',
      'Chrome storage APIs',
      'MutationObserver',
      'Node tests',
    ],
    status: 'Published extension / Store-ready local build',
    accent: 'mint',
    previewLabel: 'Reddit, YouTube, and LinkedIn guardrails',
    logo: '/product-logos/discipline-feed-guard-logo.png',
    logoAlt: 'Discipline Feed Guard logo',
    sourceNote: 'Source repository private; architecture and implementation walkthrough available on request.',
    highlights: [
      'Reddit, YouTube, and LinkedIn distraction-surface blocking',
      'Feed, Shorts, comments, recommendations, news rails, and promoted-content hiding',
      'Allowlist modes for intentional subreddits, channels, and useful routes',
      'Lock Mode with strengthening-only settings changes',
      'Sync/local storage fallback with strict merge behavior',
      'Node tests for migrations, lock rules, and LinkedIn route classification',
    ],
    caseStudy: {
      problem:
        'I wanted a browser extension that reduced the most distracting parts of Reddit, YouTube, and LinkedIn without blocking the entire sites. I still wanted intentional access to useful subreddits, channels, profiles, jobs, messages, search, and work-related pages, but I did not want feeds, recommendations, Shorts, comments, LinkedIn news rails, promoted posts, people suggestions, reaction counters, or infinite-scroll loops pulling me away from what I opened the site to do.',
      built:
        'I built a local-only Chrome Manifest V3 extension that hides high-distraction surfaces across Reddit, YouTube, and LinkedIn through platform-specific controls, popup quick toggles, a grouped options page, allowlist modes, blocked paths, import/export, and lock-mode strengthening rules.',
      architecture:
        'The extension uses a shared storage module for default settings, normalization, migrations, import/export, sync/local fallback, strict merge behavior, and Lock Mode weakening detection. A Manifest V3 service worker handles background behavior and settings messages, while separate Reddit, YouTube, and LinkedIn content scripts apply route-aware hiding rules, observe dynamic DOM changes, and reapply protections during single-page-app navigation.',
      challenge:
        'The hardest engineering challenge was making the extension reliable across three complex platforms that constantly update without full page reloads. Reddit, YouTube, and LinkedIn all behave like single-page apps, so a protection could work on first load but fail after navigation, infinite scroll, feed refreshes, or dynamic module updates. LinkedIn added its own challenge because I needed to hide distracting surfaces like the main feed, news rails, suggested posts, people suggestions, games, notifications, and reaction counters while preserving useful routes like jobs, profiles, messaging, and search.',
      boundaries:
        'The extension is local-only and has no analytics, telemetry, remote server, external APIs, account system, tracking pixels, or third-party runtime dependencies. Settings are stored in Chrome storage, using sync as the primary path and local storage as fallback. Content scripts run only on declared Reddit, YouTube, and LinkedIn hosts. Lock Mode is a self-control strengthening workflow, not a cryptographic security guarantee.',
    },
  },
  {
    id: 'apple-lockdown-kit-website',
    name: 'Apple Lockdown Kit Website',
    description:
      'React/Vite marketing and buyer-support site for a multi-layer Apple productivity kit across Mac, Chrome, iPhone, and iPad.',
    shortDescription:
      'React/Vite buyer-support site for a multi-layer Apple productivity kit.',
    techStack: ['React', 'Vite', 'JavaScript', 'CSS'],
    status: 'Portfolio-ready',
    accent: 'blue',
    previewLabel: 'premium support landing page',
    highlights: [
      'Premium landing page',
      'Thank-you and updates pages',
      'Buyer-support flow',
      'Reusable content arrays',
      'Privacy-focused and honest limitation copy',
      'Production build verification',
    ],
    caseStudy: {
      problem:
        'I wanted to bundle my Apple-focused productivity tools, browser extensions, setup guidance, and support materials into a clear product that users could understand and purchase as a one-time kit.',
      built:
        'I built a React/Vite marketing and buyer-support site with a polished landing page, thank-you flow, updates page, reusable content structure, product explanations, pricing section, and support-oriented copy.',
      architecture:
        'The site uses Vite, React components, reusable content arrays, and responsive CSS to present product layers, buyer guidance, privacy notes, limitation copy, updates, and setup-oriented support flows.',
      challenge:
        'The hardest challenge was making commercial copy feel premium without overstating protection guarantees or hiding platform limitations. I wanted the site to explain the value clearly while staying honest about what each layer can and cannot do.',
      boundaries:
        'The site avoids analytics and tracking in this portfolio version. It focuses on buyer support, clear product explanation, privacy-conscious messaging, and honest limitation copy. It does not expose private buyer files, secrets, source code, or private download links.',
    },
  },
];

export const resumes = [
  {
    title: 'Resume A — Software Engineer / Product Builder',
    description:
      'Broad software engineering resume focused on end-to-end product building, systems thinking, and shipped portfolio artifacts.',
    href: '/resume/Shaurya_Das_Resume_A_Product_Builder.pdf',
    downloadName: 'Shaurya_Das_Resume_A_Product_Builder.pdf',
  },
  {
    title: 'Resume B — AI Software Engineer',
    description:
      'AI-focused resume emphasizing FastAPI backends, OpenAI workflows, PostgreSQL, auth, retrieval, and testing.',
    href: '/resume/Shaurya_Das_AI_Software_Engineer_Resume.pdf',
    downloadName: 'Shaurya_Das_AI_Software_Engineer_Resume.pdf',
  },
  {
    title: 'Resume C — Swift / Apple Ecosystem',
    description:
      'Apple-platform resume focused on Swift, SwiftUI, AppKit, LaunchAgents, LaunchDaemons, iOS, and macOS product work.',
    href: '/resume/Shaurya_Das_Swift_Apple_Resume.pdf',
    downloadName: 'Shaurya_Das_Swift_Apple_Resume.pdf',
  },
];

export const githubCards = [
  {
    title: 'Public Samples Coming Soon',
    text: 'Selected public samples will be added when they can represent the work without exposing active private product IP.',
  },
  {
    title: 'Private Product Architecture Available On Request',
    text: 'Architecture diagrams, technical walkthroughs, and implementation decisions can be shared in interview settings.',
  },
  {
    title: 'Demo Walkthroughs Available',
    text: 'Recruiters and interviewers can request product demos, architecture reviews, and selected code samples.',
  },
];

export const contactItems = [
  {
    label: 'Email',
    value: 'shauryadas2006@gmail.com',
    href: 'mailto:shauryadas2006@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shauryadas',
    href: 'https://www.linkedin.com/in/shauryadas/',
  },
  {
    label: 'GitHub',
    value: 'github.com/ShauryaDas924',
    href: 'https://github.com/ShauryaDas924',
  },
  {
    label: 'Location',
    value: 'Frisco, Texas',
    href: null,
  },
];
