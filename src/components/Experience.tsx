import { resumeData } from "../data/resumeData";
import "./Experience.css";

export function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experiencia" className="experience section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
          </svg>
        </div>
        <h2>Experiência Profissional</h2>
      </div>
      <div className="timeline">
        {experience.map((job, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot" />
              {i < experience.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-card">
              <div className="job-header">
                <div>
                  <h3 className="job-role">{job.role}</h3>
                  <p className="job-company">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    {job.company} — {job.location}
                  </p>
                </div>
                <span className="job-period">{job.period}</span>
              </div>
              <ul className="job-highlights">
                {job.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
