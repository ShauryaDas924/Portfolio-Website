import { ShieldCheck } from 'lucide-react';
import ProjectTreasureScene from './pixel/ProjectTreasureScene.jsx';

const caseRows = [
  ['Problem', 'problem'],
  ['What I built', 'built'],
  ['Technical architecture', 'architecture'],
  ['Hardest engineering challenge', 'challenge'],
  ['Privacy/security/product boundaries', 'boundaries'],
];

export default function ProductDetail({ product }) {
  return (
    <article className="case-study" id={`case-${product.id}`}>
      <div className="case-study-header">
        <div className="case-study-intro">
          <p className="eyebrow">Case study</p>
          <h3>{product.name}</h3>
          {product.subtitle ? <p className="case-study-subtitle">{product.subtitle}</p> : null}
          <p>{product.description}</p>
        </div>
        <div className="case-study-art">
          <ProjectTreasureScene projectId={product.id} compact />
          <span className="status-pill">{product.status}</span>
        </div>
      </div>

      <div className="case-study-grid">
        <div className="case-study-main">
          {caseRows.map(([label, key]) => (
            <section className="case-row" key={key} aria-labelledby={`${product.id}-${key}`}>
              <h4 id={`${product.id}-${key}`}>{label}</h4>
              <p>{product.caseStudy[key]}</p>
            </section>
          ))}
        </div>

        <aside className="case-aside" aria-label={`${product.name} details`}>
          <div>
            <h4>Highlights</h4>
            <ul className="check-list">
              {product.highlights.map((highlight) => (
                <li key={highlight}>
                  <ShieldCheck size={16} aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Tech stack</h4>
            <div className="chip-row">
              {product.techStack.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {product.caseStudyLinkLabel && product.productUrl ? (
            <div>
              <h4>Live site</h4>
              <a className="text-link" href={product.productUrl} target="_blank" rel="noopener noreferrer">
                {product.caseStudyLinkLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          ) : null}

          <div className="private-note">
            <h4>Source code note</h4>
            <p>{product.sourceNote ?? 'Private repository; architecture/demo available on request.'}</p>
          </div>
        </aside>
      </div>
    </article>
  );
}
