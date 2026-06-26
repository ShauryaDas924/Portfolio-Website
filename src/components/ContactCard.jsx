import { ExternalLink, Mail, MapPin } from 'lucide-react';

function ContactIcon({ label }) {
  if (label === 'Email') return <Mail size={18} aria-hidden="true" />;
  if (label === 'Location') return <MapPin size={18} aria-hidden="true" />;
  return <ExternalLink size={18} aria-hidden="true" />;
}

export default function ContactCard({ item }) {
  const content = (
    <>
      <span className="contact-icon">
        <ContactIcon label={item.label} />
      </span>
      <span>
        <span className="contact-label">{item.label}</span>
        <strong>{item.value}</strong>
      </span>
    </>
  );

  if (!item.href) {
    return <div className="contact-card">{content}</div>;
  }

  return (
    <a className="contact-card" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {content}
    </a>
  );
}
