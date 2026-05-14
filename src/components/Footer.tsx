import { resumeData } from "../data/resumeData";
import "./Footer.css";

export function Footer() {
  const { personal } = resumeData;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">{personal.name}</p>
        <p className="footer-title">{personal.title}</p>
        <div className="footer-links">
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <span>·</span>
          <a href={`tel:${personal.phone}`}>{personal.phone}</a>
          <span>·</span>
          <a href={`tel:${personal.phone2}`}>{personal.phone2}</a>
        </div>
        <p className="footer-copy">© {year} — Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
