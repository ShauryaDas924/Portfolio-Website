import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolioData.js';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    const syncViewport = () => {
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) setMobileOpen(false);
    };

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);
    return () => mediaQuery.removeEventListener('change', syncViewport);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  const handleNavigation = (event) => {
    if (!isMobile) return;

    const destinationHash = event.currentTarget.hash;
    setMobileOpen(false);

    window.requestAnimationFrame(() => {
      const destination = document.querySelector(destinationHash);
      destination?.querySelector('h1, h2')?.focus({ preventScroll: true });
    });
  };

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Shaurya Das home" onClick={handleNavigation}>
          <span className="brand-mark" aria-hidden="true">SD</span>
          <span>Shaurya Das</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          ref={toggleRef}
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation-links"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <div
          className="nav-links"
          id="primary-navigation-links"
          data-mobile-open={mobileOpen ? 'true' : 'false'}
          aria-hidden={isMobile && !mobileOpen ? 'true' : undefined}
          inert={isMobile && !mobileOpen ? '' : undefined}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavigation}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-social" aria-label="Profile links">
          <a href="https://github.com/ShauryaDas924" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/shauryadas/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
