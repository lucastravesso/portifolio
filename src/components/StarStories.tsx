import { resumeData } from "../data/resumeData";
import "./StarStories.css";

const steps = [
  {
    key: "situation" as const,
    label: "Situação",
    letter: "S",
    color: "#6366f1",
    bg: "#eef2ff",
    border: "#c7d2fe",
  },
  {
    key: "task" as const,
    label: "Tarefa",
    letter: "T",
    color: "#0284c7",
    bg: "#e0f2fe",
    border: "#bae6fd",
  },
  {
    key: "action" as const,
    label: "Ação",
    letter: "A",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    key: "result" as const,
    label: "Resultado",
    letter: "R",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
];

export function StarStories() {
  const { stars } = resumeData;

  return (
    <section id="star" className="star-stories section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <h2>Projetos em Destaque</h2>
      </div>

      <div className="star-cards">
        {stars.map((story, i) => (
          <div key={i} className="star-card">
            {/* Título + techs */}
            <div className="star-card-top">
              <span className="star-card-number">0{i + 1}</span>
              <div className="star-card-top-info">
                <h3 className="star-card-title">{story.title}</h3>
                <div className="star-card-techs">
                  {story.tech.map((t) => (
                    <span key={t} className="star-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4 passos sempre visíveis em grid */}
            <div className="star-steps-grid">
              {steps.map((step) => (
                <div
                  key={step.key}
                  className="star-step"
                  style={{ borderTopColor: step.color }}
                >
                  <div className="star-step-label">
                    <span className="star-step-letter" style={{ background: step.color }}>
                      {step.letter}
                    </span>
                    <span className="star-step-name" style={{ color: step.color }}>
                      {step.label}
                    </span>
                  </div>
                  <p className="star-step-text">{story[step.key]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
