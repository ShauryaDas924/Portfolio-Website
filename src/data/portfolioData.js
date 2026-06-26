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
    highlights: [
      'Privileged helper and LaunchDaemon architecture',
      'Immutable active lock records and schedule windows',
      'Hosts-file enforcement, DNS flushing, helper repair checks',
      'Browser-scoped allow-list mode with extension/native bridge',
      '604 XCTest tests with 0 failures',
    ],
    caseStudy: {
      problem:
        'Blocking tools are easy to weaken if they only live inside a normal app process. A useful self-control product needs persistence, clear limits, and honest failure modes.',
      built:
        'I built a native macOS blocker that uses a privileged helper, LaunchDaemon checks, immutable active lock records, schedule snapshots, hosts-file enforcement, DNS cache flushing, and a browser-extension bridge for allow-list mode.',
      architecture:
        'The SwiftUI app handles setup, schedules, presets, diagnostics, and user flow. A privileged helper owns protected system writes and active lock state, while the Chromium MV3 extension communicates through native messaging for browser-scoped allow-list enforcement.',
      challenge:
        'The hardest part was making protected sessions difficult to weaken while still supporting repair, expiry cleanup, multiple overlapping locks, setup diagnostics, and plain-language safety boundaries.',
      boundaries:
        'The product does not claim impossible system-wide allow-only networking through hosts files. It documents VPN, proxy, browser DoH, administrator, and unsupported-browser limitations clearly.',
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
    highlights: [
      'SwiftUI/AppKit menu-bar app',
      'NSWorkspace and NSRunningApplication monitoring',
      'Local rule engine and persistent state',
      'Pomodoro, daily limits, schedules, blocked windows',
      'Admin-protected weakening policy',
    ],
    caseStudy: {
      problem:
        'People need app limits that work locally and respect privacy without inspecting the contents of other apps.',
      built:
        'I built a macOS menu-bar app that tracks selected app usage, closes apps when rules disallow access, and supports daily limits, allowed windows, Pomodoro-only access, temporary blocks, and protected settings.',
      architecture:
        'The app combines SwiftUI screens with AppKit menu-bar behavior, NSWorkspace monitoring, local persistence, notification warnings, and LaunchAgent startup support.',
      challenge:
        'The hardest challenge was separating stricter changes from weaker changes so users can tighten rules freely while requiring admin authorization for changes that would reduce protection.',
      boundaries:
        'The app is local-only and does not inspect app contents. It is designed as a self-control tool, not a surveillance product or cryptographic security boundary.',
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
    highlights: [
      'AI chat, journaling, recall, trigger insights, growth tracking',
      'JWT/Google authentication',
      'iOS Keychain token storage',
      'SQL migrations and backend domain services',
      'Tests for trigger precision, privacy isolation, protected routes, malicious input, and rate limiting',
    ],
    caseStudy: {
      problem:
        'Habit-support apps often lose context, feel generic, or fail to protect sensitive reflection data with the seriousness it deserves.',
      built:
        'I built a cross-platform AI support product with journaling, chat, recall, trigger insight, growth tracking, authenticated web flows, backend services, and an iOS client.',
      architecture:
        'React powers the web client, FastAPI handles domain services and OpenAI workflows, PostgreSQL persists user data, JWT/Google auth protects routes, and SwiftUI iOS stores tokens through Keychain.',
      challenge:
        'The hardest challenge was designing AI workflows that remain useful while keeping privacy isolation, protected routes, rate limits, and malicious-input handling testable.',
      boundaries:
        'The product treats reflection data as sensitive. The portfolio does not expose prompts, private workflows, secrets, databases, or repository source.',
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
        'Students need help that is grounded in their actual class materials instead of generic tutoring that drifts away from the evidence.',
      built:
        'I built a full-stack AI platform that ingests class notes, homework, attempts, and exam materials to power tutoring, practice, mastery tracking, flashcards, analytics, and exam-focused workflows.',
      architecture:
        'The frontend uses Next.js and TypeScript. The backend uses FastAPI, async SQLAlchemy, PostgreSQL, pgvector, file extraction services, and OpenAI workflows tied back to persisted class artifacts.',
      challenge:
        'The hardest challenge was keeping LLM-generated plans evidence-linked by connecting study and exam workflows to extracted concepts and persisted question IDs.',
      boundaries:
        'The product is designed around class-scoped data and evidence-grounded outputs. Private materials, database contents, prompts, and source code stay out of the public portfolio.',
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
        'Keyword blockers can be too blunt, too easy to bypass, or too invasive if they send browsing data elsewhere.',
      built:
        'I built a Chrome Manifest V3 extension that checks URLs, search queries, page titles, typed text, form submissions, and optional page text locally against user-defined lists.',
      architecture:
        'The extension uses MV3 scripts, Chrome storage sync/local fallback, local regex compilation, trusted URL exceptions, blocked-page routing, and an options UI for import/export and lock settings.',
      challenge:
        'The hardest part was building separator, accent, leet, plural, and action-form matching while keeping strict boundaries to avoid accidental matches inside unrelated words.',
      boundaries:
        'The extension has no backend, telemetry, analytics, advertising, or remote code. Append-only lock mode is a self-control workflow, not a cryptographic security guarantee.',
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
        'A technical productivity kit needs a buyer-support experience that feels credible, clear, and honest about what each layer can and cannot do.',
      built:
        'I built a React/Vite site with a polished landing page, thank-you flow, updates page, reusable content structure, and support-oriented copy.',
      architecture:
        'The site uses Vite, React components, reusable content arrays, and responsive CSS to present product layers, buyer guidance, privacy notes, and limitation copy.',
      challenge:
        'The hardest challenge was making commercial copy feel premium without overstating protection guarantees or hiding platform limitations.',
      boundaries:
        'The site avoids analytics and tracking in this portfolio version. It focuses on buyer support, clear product explanation, and honest privacy positioning.',
    },
  },
];

export const resumes = [
  {
    title: 'Resume A — Software Engineer / Product Builder',
    description:
      'Broad software engineering resume focused on end-to-end product building, systems thinking, and shipped portfolio artifacts.',
    href: '/resume/Shaurya_Das_Resume_A_Product_Builder.pdf',
  },
  {
    title: 'Resume B — AI Software Engineer',
    description:
      'AI-focused resume emphasizing FastAPI backends, OpenAI workflows, PostgreSQL, auth, retrieval, and testing.',
    href: '/resume/Shaurya_Das_AI_Software_Engineer_Resume.pdf',
  },
  {
    title: 'Resume C — Swift / Apple Ecosystem',
    description:
      'Apple-platform resume focused on Swift, SwiftUI, AppKit, LaunchAgents, LaunchDaemons, iOS, and macOS product work.',
    href: '/resume/Shaurya_Das_Swift_Apple_Resume.pdf',
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
