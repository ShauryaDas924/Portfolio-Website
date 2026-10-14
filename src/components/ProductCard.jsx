import { ArrowRight } from 'lucide-react';
import ProjectTreasureScene from './pixel/ProjectTreasureScene.jsx';

export default function ProductCard({ product }) {
  const PreviewElement = product.productUrl ? 'a' : 'div';

  return (
    <article className="product-card" data-project={product.id}>
      <PreviewElement
        className={`product-preview${product.productUrl ? ' product-preview-link' : ''}`}
        {...(product.productUrl
          ? {
              href: product.productUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              'aria-label': `Open ${product.name} product`,
            }
          : {})}
      >
        <ProjectTreasureScene projectId={product.id} />
        {product.productUrl ? (
          <span className="product-preview-badge" aria-hidden="true">
            Visit product ↗
          </span>
        ) : (
          <span className="product-preview-badge product-preview-badge--private" aria-hidden="true">
            Private build
          </span>
        )}
      </PreviewElement>

      <div className="product-card-body">
        <div className="product-title-row">
          <div>
            <h3>{product.name}</h3>
            {product.subtitle ? <p className="product-subtitle">{product.subtitle}</p> : null}
          </div>
          <span className="status-pill">{product.status}</span>
        </div>
        <p>{product.shortDescription}</p>
        {product.metric ? <p className="product-metric">{product.metric}</p> : null}

        <div className="chip-row" aria-label={`${product.name} tech stack`}>
          {product.techStack.slice(0, 5).map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <p className="source-note">
          {product.sourceNote ?? 'Source code private; architecture and demo available on request.'}
        </p>

        <a className="text-link" href={`#case-${product.id}`}>
          View case study
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
