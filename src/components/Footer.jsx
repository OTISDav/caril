import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Bande supérieure */}
      <div className="footer-brand-bar">
        <span className="footer-logo">
          ABM<span className="footer-logo-accent">·</span>Consulting
        </span>
        <p className="footer-tagline">L'espace pensé pour vous.</p>
      </div>

      {/* Contenu principal */}
      <div className="footer-inner">
        {/* Adresse */}
        <div className="footer-block">
          <p className="footer-block-label">Adresse</p>
          <p>Quartier Adeticope,</p>
          <p>Lomé, Togo</p>
        </div>

        {/* Contact */}
        <div className="footer-block">
          <p className="footer-block-label">Contact</p>
          <p></p>
          <p>+228 91 75 30 75</p>
          <p>
            <a href="mailto:contact@archi-reflex.com">
              contact@abmconsulting.com
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-block">
          <p className="footer-block-label">Navigation</p>
          <a href="/">Accueil</a>
          <a href="/projets">Mes Projets</a>
          <a href="/rendez-vous">Rendez-vous</a>
        </div>

        {/* Horaires */}
        <div className="footer-block">
          <p className="footer-block-label">Horaires</p>
          <p>Lundi – Vendredi</p>
          <p>9h00 – 18h00</p>
        </div>
      </div>

      {/* Bas de page */}
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="#">Mentions légales</a>
          <span className="footer-sep">–</span>
          <a href="#">Confidentialité</a>
          <span className="footer-sep">–</span>
          <a href="#">Cookies</a>
        </div>

        <div className="footer-credit">
          Fait avec <span className="footer-heart">♥</span> par{" "}
          <span className="footer-author">OTISDav</span>
        </div>

        <p className="footer-copy">© 2026 ABM·Consulting</p>
      </div>
    </footer>
  );
}