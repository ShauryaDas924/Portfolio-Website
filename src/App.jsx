import { Github, LockKeyhole, Sparkles } from 'lucide-react';
import ContactCard from './components/ContactCard.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import ResumeCard from './components/ResumeCard.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import AboutPrehistoricScene from './components/pixel/AboutPrehistoricScene.jsx';
import { PixelSpriteLibrary } from './components/pixel/PixelSpriteLibrary.jsx';
import { buildCards, contactItems, githubCards, products, resumes } from './data/portfolioData.js';

export default function App() {
  return (
    <>
      <PixelSpriteLibrary />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />

        <section className="section-pad about-section" id="about">
          <div className="shell two-column">
            <div className="about-copy">
              <SectionHeader eyebrow="About" title="Student builder with product instincts">
                I’m Shaurya Das, a software engineer and product builder based in Frisco, Texas. I like building real
                products, not just class projects. My work spans native macOS apps, SwiftUI/iOS, Chrome extensions,
                AI-powered full-stack applications, FastAPI backends, PostgreSQL databases, and polished product
                websites.
              </SectionHeader>
              <AboutPrehistoricScene />
            </div>

            <div className="build-grid" aria-label="What I build">
              {buildCards.map((card, index) => (
                <article className="build-card" key={card}>
                  <span className="build-card-marker" aria-hidden="true">
                    <Sparkles size={16} />
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{card}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad products-section" id="products">
          <div className="shell">
            <SectionHeader eyebrow="Featured Products" title="Private products, public product thinking">
              These case studies show what the products do, how they are architected, and where the boundaries are. The
              repositories stay private because several projects may become commercial products.
            </SectionHeader>

            <div className="product-grid">
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>

            <div className="case-study-list" aria-label="Featured product case studies">
              {products.map((product) => (
                <ProductDetail product={product} key={product.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad resume-section" id="resume">
          <div className="shell">
            <SectionHeader eyebrow="Resume" title="Software Engineering Resume">
              One focused resume covering my strongest work across native macOS systems, full-stack AI, browser platforms,
              and data engineering.
            </SectionHeader>

            <div className="resume-grid">
              {resumes.map((resume) => (
                <ResumeCard resume={resume} key={resume.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad github-section" id="github">
          <div className="shell github-layout">
            <div>
              <SectionHeader eyebrow="GitHub" title="Private where it should be">
                Most active product repositories remain private. College AI is the archived public-code exception,
                available for direct inspection alongside recruiter-friendly case studies for the shipped products.
              </SectionHeader>
              <a className="button button-primary" href="https://github.com/ShauryaDas924" target="_blank" rel="noreferrer">
                <Github size={18} aria-hidden="true" />
                Visit GitHub
              </a>
            </div>

            <div className="github-card-grid">
              {githubCards.map((card) => (
                <article className="github-card" key={card.title}>
                  {card.href ? <Github size={18} aria-hidden="true" /> : <LockKeyhole size={18} aria-hidden="true" />}
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  {card.details ? (
                    <ul className="github-card-list">
                      {card.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                  {card.href ? (
                    <a className="text-link" href={card.href} target="_blank" rel="noreferrer">
                      {card.linkLabel}
                      <span aria-hidden="true">→</span>
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="shell contact-layout">
            <SectionHeader eyebrow="Contact" title="Let’s talk internships, demos, and product work">
              Reach out for software engineering internships, technical interviews, product walkthroughs, or architecture
              discussions.
            </SectionHeader>

            <div className="contact-grid">
              {contactItems.map((item) => (
                <ContactCard item={item} key={item.label} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
