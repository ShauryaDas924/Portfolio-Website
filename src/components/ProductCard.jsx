import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <article className={`product-card accent-${product.accent}`}>
      <div
        className={`product-preview${product.logo ? ' product-preview-logo' : ''}`}
        aria-label={product.logo ? undefined : `${product.name} screenshot placeholder`}
      >
        {product.logo ? (
          <>
            <img
              className="product-logo"
              src={product.logo}
              alt={product.logoAlt}
              onError={(event) => {
                event.currentTarget.hidden = true;
                event.currentTarget.parentElement?.classList.add('logo-failed');
              }}
            />
            <span className="product-logo-fallback">{product.previewLabel}</span>
          </>
        ) : (
          <span>{product.previewLabel}</span>
        )}
      </div>

      <div className="product-card-body">
        <div className="product-title-row">
          <h3>{product.name}</h3>
          <span className="status-pill">{product.status}</span>
        </div>
        <p>{product.shortDescription}</p>

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
