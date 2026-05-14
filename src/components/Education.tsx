import { resumeData } from "../data/resumeData";
import "./Education.css";

export function Education() {
  const { education, certifications } = resumeData;

  return (
    <section id="formacao" className="education section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <h2>Formação Acadêmica</h2>
      </div>

      <div className="edu-cards">
        {education.map((edu, i) => (
          <div key={i} className="edu-card edu-card--degree">
            <div className="edu-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div className="edu-info">
              <span className="edu-type">{edu.type}</span>
              <h3 className="edu-title">{edu.title}</h3>
              <p className="edu-institution">
                {edu.institution} — {edu.location}
              </p>
              <div className="edu-meta">
                <span className="edu-period">{edu.period}</span>
                <span className="edu-status edu-status--done">{edu.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: "2.5rem" }}>
        <div className="section-icon section-icon--sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        </div>
        <h2>Certificações e Cursos</h2>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <div key={i} className="cert-card">
            <div className="cert-header">
              <div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-institution">{cert.institution}</p>
              </div>
              <span className="cert-period">{cert.period}</span>
            </div>
            {cert.description && <p className="cert-desc">{cert.description}</p>}
            {cert.courses && cert.courses.length > 0 && (
              <ul className="cert-courses">
                {cert.courses.map((course, ci) => (
                  <li key={ci} className="cert-course-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {course}
                  </li>
                ))}
              </ul>
            )}
            <span className="edu-status edu-status--done">{cert.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
