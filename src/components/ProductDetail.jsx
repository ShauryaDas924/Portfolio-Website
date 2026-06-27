import { ShieldCheck } from 'lucide-react';

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
        <div>
          <p className="eyebrow">Case study</p>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <span className="status-pill">{product.status}</span>
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

          <div className="private-note">
            <h4>Source code note</h4>
            <p>{product.sourceNote ?? 'Private repository; architecture/demo available on request.'}</p>
          </div>
        </aside>
      </div>
    </article>
  );
}
