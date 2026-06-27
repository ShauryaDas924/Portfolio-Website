Shaurya Das — Portfolio Website

This is my personal software engineering portfolio website. It presents my work as a product builder across macOS apps, AI/full-stack software, browser extensions, iOS, productivity tools, and buyer-support websites.

The goal of this site is to give recruiters, mentors, and collaborators a clear view of what I have built without exposing private or commercial source code.

Overview

This portfolio highlights several private and portfolio-ready software products, including:

* FocusLock DNS Guard — native macOS focus-blocking app with privileged helper enforcement, LaunchDaemon support, hosts-file blocking, browser-scoped allow-list mode, Chromium MV3 integration, and Swift native messaging.
* MacAppTimeGuard — local-only macOS menu-bar app for app limits, schedules, Pomodoro-only access, temporary blocks, and admin-protected rule changes.
* Evrana — cross-platform AI habit-support and reflection product built with React, FastAPI, PostgreSQL, OpenAI workflows, and SwiftUI iOS.
* College AI — full-stack AI study platform for notes, tutoring, practice, mastery tracking, flashcards, analytics, and evidence-based exam prep.
* Personal Keyword Blocker — privacy-first Chrome Manifest V3 extension for local keyword blocking across URLs, search queries, page titles, typed text, forms, and optional page text.
* Apple Lockdown Kit Website — React/Vite marketing and buyer-support site for a multi-layer Apple productivity kit.

Most flagship product repositories are private because they are active private or commercial projects. This portfolio focuses on case studies, product explanations, architecture summaries, tech stacks, and recruiter-friendly project context.

Tech Stack

* React
* Vite
* JavaScript / JSX
* CSS
* Responsive layout
* Static frontend deployment

Features

* Colorful, professional personal landing page
* Featured product cards
* Product case studies
* Resume download section
* GitHub and LinkedIn links
* Contact section
* Responsive desktop and mobile design
* Private-source-code-safe presentation

Project Structure

.
├── public/
│   ├── resume/
│   │   ├── Shaurya_Das_Resume_A_Product_Builder.pdf
│   │   ├── Shaurya_Das_AI_Software_Engineer_Resume.pdf
│   │   └── Shaurya_Das_Swift_Apple_Resume.pdf
│   ├── product-logos/
│   └── screenshots/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md

The exact folder structure may vary slightly depending on future updates.

Local Development

Install dependencies:

npm install

Start the development server:

npm run dev

Build for production:

npm run build

Preview the production build locally:

npm run preview

Resume Files

Resume PDFs should be placed in:

public/resume/

Current resume versions:

Shaurya_Das_Resume_A_Product_Builder.pdf
Shaurya_Das_AI_Software_Engineer_Resume.pdf
Shaurya_Das_Swift_Apple_Resume.pdf

The site links to these files from the Resume section.

Product Logos and Screenshots

Product logos should be placed in:

public/product-logos/

Product screenshots or demo images should be placed in:

public/screenshots/

The site is designed to support private products by using screenshots, case studies, and architecture summaries instead of public source code links.

Private Repository Note

Many of the projects shown on this site are private because they may become commercial products or contain non-public implementation details.

This portfolio does not expose:

* private source code
* private prompts
* secrets or environment variables
* database contents
* private file paths
* API keys or tokens
* logs or user data
* proprietary implementation details

Architecture and demo walkthroughs are available on request.

## Search Indexing

This site is currently configured as link-accessible but not search-indexed. It includes robots noindex meta tags, a robots.txt disallow rule, and Cloudflare Pages X-Robots-Tag headers. This prevents normal search indexing but is not a substitute for authentication; anyone with the link can still view the site.

To make the site public/searchable later, remove the noindex meta tags, update robots.txt, remove the X-Robots-Tag noindex headers, and optionally add a sitemap.

Design Direction

The visual style is intended to be:

* professional
* colorful
* warm
* recruiter-friendly
* modern
* polished without being overly corporate

The design uses soft gradients, rounded cards, subtle shapes, and clean typography to reflect a product-builder identity while keeping the site appropriate for internship applications and professional review.

Purpose

This website supports software engineering internship applications by showing more than a traditional resume can show.

It helps communicate:

* what I built
* why I built it
* what technologies I used
* what engineering challenges I solved
* how I think about product quality
* how I handle privacy, security, and technical boundaries

Contact

Shaurya Das
Frisco, Texas
Email: shauryadas2006@gmail.com
LinkedIn: https://www.linkedin.com/in/shauryadas/
GitHub: https://github.com/ShauryaDas924

License / Usage

This portfolio is a personal website. The portfolio design and public-facing text may be used for presentation purposes, but the private products, product concepts, source code, architecture details, assets, and commercial materials remain private unless explicitly released.
