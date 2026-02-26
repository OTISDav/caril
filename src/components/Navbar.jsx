import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu mobile si on resize en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Accueil", to: "/" },
    { name: "Mes Projets", to: "/Portfolio" },
    { name: "Rendez-vous", to: "/rendez-vous" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">

          {/* Logo */}
          <NavLink to="/" className="navbar-logo">
            ABM<span className="logo-accent">·</span>Consulting
          </NavLink>

          {/* Desktop links */}
          <div className="nav-links desktop">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {link.name}
                <span className="underline" />
              </NavLink>
            ))}
          </div>

          {/* CTA Desktop */}
          <NavLink to="/rendez-vous" className="nav-cta desktop">
            Prendre RDV
          </NavLink>

          {/* Hamburger */}
          <button
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Overlay sombre derrière le menu mobile */}
      <div
        className={`mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Menu mobile slide */}
      <div className={`mobile-slide-menu ${mobileOpen ? "open" : ""}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Fermer"
        >
          ✕
        </button>

        <div className="mobile-logo">ARCHI<span>·</span>REFLEX</div>

        <div className="mobile-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="mobile-footer">
          <span>contact@archi-reflex.fr</span>
          <span>Paris, France</span>
        </div>
      </div>
    </>
  );
}