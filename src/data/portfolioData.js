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
    id: 'focuslock-dns-guard',
    name: 'FocusLock DNS Guard',
    description:
      'Native macOS Swift/SwiftUI focus-blocking app with privileged helper enforcement, LaunchDaemon support, hosts-file blocking, Browser Allow List mode, Chromium MV3 extension integration, and Swift native messaging bridge.',
    shortDescription:
      'Strict macOS focus blocking with privileged helper enforcement and browser-scoped allow-list support.',
    techStack: [
      'Swift',
      'SwiftUI',
      'LaunchDaemon',
      'Privileged helper',
      'Chrome MV3',
      'Native Messaging',
      'XCTest',
    ],
    status: 'Private product / In development',
    accent: 'blue',
    previewLabel: 'macOS enforcement dashboard',
    logo: '/product-logos/focuslock-logo.png',
    logoAlt: 'FocusLock DNS Guard logo',
    highlights: [
      'Privileged helper and LaunchDaemon architecture',
      'Immutable active lock records and schedule windows',
      'Hosts-file enforcement, DNS flushing, helper repair checks',
      'Browser-scoped allow-list mode with extension/native bridge',
      '604 XCTest tests with 0 failures',
    ],
    caseStudy: {
      problem:
        'I wanted a website blocker that was stronger than a normal browser extension, worked across browsers for block-list sessions, supported schedules and multiple block windows, and could fit into a larger Apple-focused productivity system. The goal was not to claim total bypass resistance, but to create real local friction with clear technical boundaries.',
      built:
        'I built a native macOS blocker that uses a SwiftUI app, privileged helper, LaunchDaemon checks, immutable active lock records, schedule snapshots, hosts-file enforcement for block-list sessions, DNS cache flushing, and a browser-extension bridge for browser-scoped allow-list mode.',
      architecture:
        'The SwiftUI app handles setup, schedules, presets, diagnostics, and user flow. A privileged helper owns protected system writes and active lock state, while the Chromium MV3 extension communicates through native messaging for browser-scoped allow-list enforcement.',
      challenge:
        'The hardest engineering challenge was making scheduled blocks clean up correctly after their time windows ended. I ran into orphaned schedule records, expired occurrence IDs, and leftover managed hosts-file entries that could cause old blocks to survive longer than intended. I fixed this by tightening schedule snapshots, active occurrence tracking, expiry cleanup, and overlap-safe rebuilding so one block ending would not accidentally remove or preserve the wrong protection.',
      boundaries:
        'The product does not claim system-wide allow-only networking through hosts files. Hosts-file enforcement is used for block-list sessions and has documented limitations around VPNs, proxies, browser DNS-over-HTTPS, administrator removal, and unsupported browser behavior. Allow-list mode is browser-scoped and currently depends on supported Chromium-style browsers such as Chrome and Edge.',
    },
  },
  {
    id: 'mac-app-time-guard',
    name: 'MacAppTimeGuard',
    description:
      'Local-only macOS menu-bar app that limits selected apps with daily limits, schedules, Pomodoro-only access, temporary blocks, and admin-protected rule changes.',
    shortDescription:
      'Local-only macOS menu-bar guard for app limits, schedules, Pomodoro access, and protected rules.',
    techStack: [
      'Swift',
      'SwiftUI',
      'AppKit',
      'NSWorkspace',
      'UserNotifications',
      'LaunchAgent',
    ],
    status: 'Private product / In development',
    accent: 'mint',
    previewLabel: 'menu-bar rule manager',
    logo: '/product-logos/macapptimeguard-logo.png',
    logoAlt: 'MacAppTimeGuard logo',
    highlights: [
      'SwiftUI/AppKit menu-bar app',
      'NSWorkspace and NSRunningApplication monitoring',
      'Local rule engine and persistent state',
      'Pomodoro, daily limits, schedules, blocked windows',
      'Admin-protected weakening policy',
    ],
    caseStudy: {
      problem:
        'While building my larger software projects, I realized I needed a better way to set boundaries around certain Mac apps. Ordinary timers and reminders were too easy to ignore, so I wanted a local tool that could enforce app limits, schedules, and Pomodoro-based access with more friction.',
      built:
        'I built a macOS menu-bar app that tracks selected app usage, closes apps when rules disallow access, and supports daily limits, allowed windows, blocked windows, Pomodoro-only access, temporary blocks, protected settings, and admin-protected rule changes.',
      architecture:
        'The app combines SwiftUI screens with AppKit menu-bar behavior, NSWorkspace monitoring, NSRunningApplication termination, Codable local persistence, notification warnings, login/startup support, protected configuration, and a local rule engine for evaluating app access.',
      challenge:
        'The hardest part was not just making app rules run at the right times. The bigger challenge was turning a powerful control system into a friendly macOS product. This was my first serious macOS app, so I had to learn how to design a simple menu-bar experience, a deeper Manage Apps editor, clear rule states, and onboarding that made the app understandable for someone besides me.',
      boundaries:
        'The app is local-only and does not inspect app contents, browser history, screenshots, keystrokes, messages, or documents. It is designed as a self-control friction tool, not a surveillance product, kernel-level security tool, or cryptographic security boundary. A Mac administrator can intentionally remove or weaken it.',
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
        'I wanted to bundle my Apple-focused productivity tools, browser extensions, configuration profiles, setup guidance, and support materials into a clear product that users could understand and purchase as a one-time kit.',
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
