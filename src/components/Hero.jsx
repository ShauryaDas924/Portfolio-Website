import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import PrehistoricLandscape from './pixel/PrehistoricLandscape.jsx';

export default function Hero() {
  return (
    <section className="hero section-pad" id="home">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Shaurya Das · Frisco, Texas</p>
          <h1 tabIndex="-1">Software Engineer &amp; Product Builder</h1>
          <p className="hero-subheadline">
            I build end-to-end software products across macOS, AI, browser extensions, full-stack web, and iOS.
          </p>
          <p className="hero-support">
            Currently a student at The University of Texas at Dallas studying Actuarial Science, building productivity,
            self-control, and AI tools from concept to working product.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#products">
              View Featured Products
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#resume">
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a className="button button-ghost" href="https://github.com/ShauryaDas924" target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/shauryadas/" target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-world">
          <PrehistoricLandscape />
          <div className="hero-capabilities" aria-label="Portfolio strengths">
            <div className="hero-capabilities__lead">
              <span className="signal-kicker">Product range</span>
              <strong>macOS · AI · Web · Extensions · iOS</strong>
              <p>Private products with recruiter-friendly architecture notes, demo paths, and clear boundaries.</p>
            </div>
            <ol className="capability-list">
              <li><span>01</span>Native Apple systems</li>
              <li><span>02</span>AI-backed full stack</li>
              <li><span>03</span>Privacy-first UX</li>
              <li><span>04</span>Published browser extensions</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
