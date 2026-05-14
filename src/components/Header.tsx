import { resumeData } from "../data/resumeData";
import "./Header.css";

const stackBadges = ["Java", "AWS", "React", "Angular", "Node.js", "Python", "Clean Architecture", "Azure DevOps"];

function calcAge(birthdate: string): number {
  const [day, month, year] = birthdate.split("/").map(Number);
  const today = new Date();
  let age = today.getFullYear() - year;
  if (
    today.getMonth() + 1 < month ||
    (today.getMonth() + 1 === month && today.getDate() < day)
  ) age--;
  return age;
}

export function Header() {
  const { personal } = resumeData;
  const age = calcAge(personal.birthdate);
  const handlePrint = () => window.print();

  return (
    <header className="header">
      <div className="header-bg" />
      <div className="header-content">
        <div className="avatar">
          <img src="/foto.jpg" alt="Lucas Escobar" className="avatar-photo" />
        </div>
        <div className="header-info">
          <h1 className="header-name">{personal.name}</h1>
          <p className="header-title">{personal.title}</p>

          {/* Stack badges — visíveis imediatamente para recrutadores */}
          <div className="stack-badges">
            {stackBadges.map((tech) => (
              <span key={tech} className="stack-badge">{tech}</span>
            ))}
          </div>

          <div className="header-contacts">
            <a href={`mailto:${personal.email}`} className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {personal.email}
            </a>
            <a href={`tel:${personal.phone}`} className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              {personal.phone}
            </a>
            <a href={`tel:${personal.phone2}`} className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              {personal.phone2}
            </a>
            <span className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {personal.location}
            </span>
            <span className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {age} anos · {personal.birthdate}
            </span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-chip contact-chip--linkedin"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <a href="#sobre">Sobre</a>
        <a href="#experiencia">Experiência</a>
        <a href="#star">STAR</a>
        <a href="#formacao">Formação</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#idiomas">Idiomas</a>
        <button className="print-btn" onClick={handlePrint} aria-label="Imprimir currículo em PDF">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          Salvar PDF
        </button>
      </nav>
    </header>
  );
}
