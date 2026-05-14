import { resumeData } from "../data/resumeData";
import "./StarPrint.css";

const steps = [
  { key: "situation" as const, label: "Situação" },
  { key: "task" as const,      label: "Tarefa"   },
  { key: "action" as const,    label: "Ação"     },
  { key: "result" as const,    label: "Resultado"},
];

export function StarPrint() {
  const { stars } = resumeData;

  return (
    <section className="star-print">
      <div className="star-print-header">
        <h2>Projetos em Destaque</h2>
      </div>
      {stars.map((story, i) => (
        <div key={i} className="star-print-card">
          <div className="star-print-title-row">
            <span className="star-print-num">0{i + 1}</span>
            <div>
              <h3 className="star-print-title">{story.title}</h3>
              <div className="star-print-techs">
                {story.tech.map((t) => (
                  <span key={t} className="star-print-tech">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="star-print-steps">
            {steps.map((step) => (
              <div key={step.key} className="star-print-step">
                <span className="star-print-step-label">{step.label}</span>
                <p className="star-print-step-text">{story[step.key]}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
