import { Github, Linkedin } from 'lucide-react';
import { navItems } from '../data/portfolioData';

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Shaurya Das home">
          <span className="brand-mark" aria-hidden="true">SD</span>
          <span>Shaurya Das</span>
        </a>

        <div className="nav-links" aria-label="Page sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
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
