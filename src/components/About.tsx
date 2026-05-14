import { resumeData } from "../data/resumeData";
import "./About.css";

export function About() {
  const { personal, skills, highlights } = resumeData;

  return (
    <section id="sobre" className="about section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <h2>Sobre mim</h2>
        <span className="availability-badge">
          <span className="availability-dot" />
          {personal.availability}
        </span>
      </div>

      {/* Números de impacto */}
      <div className="highlights-row">
        {highlights.map((h, i) => (
          <div key={i} className="highlight-card">
            <span className="highlight-value">{h.value}</span>
            <span className="highlight-label">{h.label}</span>
          </div>
        ))}
      </div>

      <div className="about-grid">
        <div className="about-summary">
          <p>{personal.summary}</p>
        </div>
        <div className="about-skills">
          <h3>Competências</h3>
          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i} className="skill-item">
                <span className="skill-dot" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
