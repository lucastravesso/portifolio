import { resumeData } from "../data/resumeData";
import "./Languages.css";

export function Languages() {
  const { languages } = resumeData;

  return (
    <section id="idiomas" className="languages section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
        </div>
        <h2>Idiomas</h2>
      </div>
      <div className="lang-grid">
        {languages.map((lang, i) => (
          <div key={i} className="lang-card">
            <div className="lang-info">
              <span className="lang-name">{lang.name}</span>
              <span className="lang-level">{lang.level}</span>
            </div>
            <div className="lang-bar-bg">
              <div
                className="lang-bar-fill"
                style={{ width: `${lang.percent}%` }}
              />
            </div>
            <span className="lang-percent">{lang.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
