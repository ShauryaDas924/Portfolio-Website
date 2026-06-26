import { Download } from 'lucide-react';

export default function ResumeCard({ resume }) {
  return (
    <article className="resume-card">
      <h3>{resume.title}</h3>
      <p>{resume.description}</p>
      <a className="button button-secondary" href={resume.href} download={resume.downloadName}>
        <Download size={18} aria-hidden="true" />
        Download PDF
      </a>
    </article>
  );
}
