import { resumeData } from "../data/resumeData";
import "./Technologies.css";

const categoryLabels: Record<string, string> = {
  backend: "Back-end",
  frontend: "Front-end",
  cloud: "Cloud",
  database: "Banco de Dados",
  methodology: "Metodologia",
  security: "Segurança",
};

const categoryColors: Record<string, string> = {
  backend: "#f0fdf4 #16a34a",
  frontend: "#eff6ff #1a56db",
  cloud: "#fff7ed #ea580c",
  database: "#fdf4ff #9333ea",
  methodology: "#f0f9ff #0284c7",
  security: "#fff1f2 #e11d48",
};

export function Technologies() {
  const { technologies } = resumeData;

  const grouped = technologies.reduce<Record<string, typeof technologies>>(
    (acc, tech) => {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push(tech);
      return acc;
    },
    {}
  );

  return (
    <section id="habilidades" className="technologies section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <h2>Habilidades Técnicas</h2>
      </div>
      <div className="tech-groups">
        {Object.entries(grouped).map(([cat, techs]) => {
          const [bg, color] = (categoryColors[cat] || "#f1f5f9 #475569").split(" ");
          return (
            <div key={cat} className="tech-group">
              <span className="tech-category-label" style={{ background: bg, color }}>
                {categoryLabels[cat] || cat}
              </span>
              <div className="tech-tags">
                {techs.map((t, i) => (
                  <span key={i} className="tech-tag" style={{ borderColor: color, color }}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
