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
  name: 'FocusLock DNS Guard',
  subtitle: 'Native macOS Website Restriction Platform',
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
  metric: '1,101 XCTest tests · 0 failures',
  accent: 'blue',
  previewLabel: 'Private product — media withheld',
  highlights: [
    'Native macOS and browser-platform integration',
    'Reliable scheduled and overlapping restrictions',
    'Recovery across crashes, restarts, and interrupted states',
    'Setup, diagnostics, and repair-oriented user workflows',
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
  name: 'MacAppTimeGuard',
  subtitle: 'Native macOS Application Management Platform',
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
    productUrl: 'https://reflectmind.app',
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
        'React powers the web client, FastAPI handles backend services and AI workflows, PostgreSQL stores application data, JWT/Google authentication protects user access, and the SwiftUI iOS client stores tokens in Keychain while using the same backend services as the web product.',
      challenge:
        'The hardest engineering challenge was keeping different AI experiences consistent without letting behavior from one mode bleed into another. I focused on clear separation between modes, predictable backend behavior, and careful handling of sensitive flows so each experience stayed aligned with its intended purpose.',
      boundaries:
        'The product treats reflection data as sensitive. The portfolio does not expose private prompts, private workflows, secrets, database contents, or repository source. The product is positioned as supportive reflection software, not crisis response or a replacement for qualified support.',
    },
  },

  {
  id: 'browser-manager',
  name: 'Browser Manager',
  description:
    'Published Chrome Manifest V3 extension that reduces distracting search loops by preserving direct access to useful websites while applying configurable search restrictions, schedules, saved links, and privacy-conscious location-aware controls.',
  shortDescription:
    'Published Chrome extension that reduces distracting search loops while preserving direct access to useful websites.',
  logo: '/product-logos/browser-manager-logo.png',
  logoAlt: 'Browser Manager logo',
  productUrl:
    'https://chromewebstore.google.com/detail/bhbajnjccejpbnffiodmkgpnlgnemdaa?utm_source=item-share-cb',
  techStack: [
    'Chrome MV3',
    'JavaScript',
    'Declarative Net Request',
    'Service worker',
    'Offscreen documents',
    'Chrome storage APIs',
    'Geolocation',
    'Node tests',
  ],
  status: 'Published extension',
  metric: '143 installs',
  accent: 'blue',
  previewLabel: 'direct-access and location controls',
  highlights: [
    'Direct-access browsing with search-route restrictions',
    'Saved website workflow for intentional navigation',
    'Location-aware Safe and Lock behavior',
    'Schedule-based and indefinite browsing modes',
    'Automatic recovery across Chrome and Manifest V3 lifecycle changes',
    'Local-first settings and location decisions without movement-history tracking',
  ],
  sourceNote:
    'Source repository private; product behavior and selected architecture decisions are documented publicly, with deeper implementation walkthroughs available during interviews.',
  caseStudy: {
    problem:
      'I wanted a browser extension that reduced distracting search loops without blocking useful sites. Direct access to documentation, email, course pages, and work tools still mattered; open-ended search was the part that pulled me off task. That led to a direct-access mode built around intentional destinations.',

    built:
      'I built a Chrome Manifest V3 extension with saved sites, search-route limits, schedules, and privacy-conscious location controls. Users can move directly to useful destinations while local settings keep the current browsing mode understandable.',

    architecture:
      'Chrome Manifest V3 components coordinate route controls, saved sites, schedules, local settings, and geolocation. The design accounts for background lifecycle interruptions and restores expected behavior without keeping a remote browsing or movement history.',

    challenge:
      'Handled imperfect geolocation and Manifest V3 lifecycle interruptions while keeping browsing behavior predictable. The work centered on recovering cleanly after browser restarts or suspended background work and presenting location-aware controls without exposing users to internal state changes.',

    boundaries:
      'Settings and location decisions stay local. Location is used only for current behavior, not movement tracking. These controls are self-control tools rather than physical-security guarantees. Exact policy rules, thresholds, storage details, and recovery mechanisms remain private.',
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
    metric: '314 installs · 8-country adoption',
    accent: 'lavender',
    previewLabel: 'extension controls and blocked page',
    logo: '/product-logos/keyword-blocker-logo.png',
    logoAlt: 'Personal Keyword Blocker logo',
    productUrl:
      'https://chromewebstore.google.com/detail/mkhalihbhhhbejdpbokmbmodenjlbaom?utm_source=item-share-cb',
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
        'I wanted a keyword blocker that was more versatile than simple word matching. Many blockers only check exact words or obvious pages, which means variations, separators, accents, or larger word forms can bypass them. I wanted users to choose between boundary-safe matching and a broader matching mode for terms they intentionally want matched more widely.',
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
    status: 'Published extension',
    metric: '200 installs',
    accent: 'mint',
    previewLabel: 'Reddit, YouTube, and LinkedIn guardrails',
    logo: '/product-logos/discipline-feed-guard-logo.png',
    logoAlt: 'Discipline Feed Guard logo',
    productUrl:
      'https://chromewebstore.google.com/detail/lfbhmaggcghidgndclnhabgfhpnbdilp?utm_source=item-share-cb',
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
    id: 'whoopberry',
    name: 'Whoopberry',
    subtitle: 'Student Career Resource Directory',
    description:
      'Student-focused career resource directory that organizes 61 manually curated external starting points across 13 broad career paths, with search, filters, and direct links to the original destinations.',
    shortDescription:
      'Student-focused directory that makes useful internship and early-career resources easier to find without another account or feed.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Vinext / Vite', 'Cloudflare Workers'],
    status: 'Live public website',
    metric: '61 curated resources · 13 career paths',
    accent: 'yellow',
    previewLabel: 'Whoopberry career resource guide',
    logo: '/product-logos/whoopberry-logo.png',
    logoAlt: 'Whoopberry pinwheel logo',
    productUrl: 'https://whoopberry.com/',
    caseStudyLinkLabel: 'Visit whoopberry.com',
    sourceNote:
      'Live site available; source repository private. Architecture and implementation walkthrough available on request.',
    highlights: [
      '61 manually curated external resources across 13 broad career paths',
      'Search across resource details, use cases, majors, roles, and aliases',
      'Category filters that combine with text search',
      'Direct external links with descriptive new-tab labels',
      'Typed catalog data with tests for integrity, search, and rendered output',
      'Responsive layouts, visible keyboard focus, and reduced-motion support',
    ],
    caseStudy: {
      problem:
        'Career resources are scattered across professional organizations, government sites, job platforms, and maintained internship lists. I wanted a simpler way for students and early-career people to find useful starting points without opening another account or relying on another feed.',
      built:
        'I built Whoopberry as a directory of 61 manually curated external resources across 13 broad career paths. People can search by major, role, or topic, combine search with category filters, see what each resource is best for, and follow a direct link to the original site. Whoopberry does not host job listings or handle applications.',
      architecture:
        'Whoopberry uses Next.js 16 and React 19 with TypeScript, built through Vinext and Vite for a Cloudflare Worker. A single route is server-rendered and then hydrated for search and filter interactions. The resource catalog is checked-in TypeScript data; there is no application database, resource API, account system, or runtime content feed.',
      challenge:
        'The main challenge was keeping 61 resources useful without creating a top-level category for every major. I grouped entries into 13 broad paths, indexed resource-specific details and aliases, and made direct matches win before broader category fallback. The catalog is maintained manually; four Node tests run after a production build to catch duplicate records, missing fields, category and search regressions, and missing external-link safeguards. Link freshness still needs periodic manual review.',
      boundaries:
        'Search and filters stay in React memory. The audited application has no accounts, saved searches, application database, browser storage, submission endpoint, or custom analytics, and it sends visitors to external destinations rather than collecting applications. The hosting provider and destination sites retain their own logging and privacy policies.',
    },
  },
  
];

export const resumes = [
  {
    title: 'Software Engineer / Product Builder Resume',
    description:
      'One-page software engineering resume focused on native macOS systems, full-stack AI, published browser products, data engineering, and end-to-end product building.',
    href: '/resume/Shaurya_Das_Master_Resume.pdf',
    downloadName: 'Shaurya_Das_Master_Resume.pdf',
  },
];

export const githubCards = [
  {
    title: 'College AI — Archived Public Codebase',
    text: 'Most of my active product repositories remain private because they contain commercial product code. College AI is an archived full-stack project that I keep public so recruiters and engineers can inspect a real codebase directly.',
    details: [
      'Next.js / TypeScript frontend',
      'FastAPI / PostgreSQL backend',
      'Persistent class-scoped learning workflows',
      '58 deterministic backend tests',
    ],
    href: 'https://github.com/ShauryaDas924/study-app',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Technical Walkthroughs Available During Interviews',
    text: 'I’m happy to discuss architecture, engineering tradeoffs, testing strategy, debugging, and selected implementation decisions during technical interviews.',
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
