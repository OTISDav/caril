import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./About.css";

const stats = [
  { num: "47", label: "Projets réalisés" },
  { num: "16", label: "Années d'expérience" },
  { num: "6", label: "Architectes" },
  { num: "3", label: "Prix d'architecture" },
];

const specialties = ["Logements", "Réhabilitation", "Urbanisme", "Santé"];

export default function About() {
  return (
    <section className="about">
      {/* Image côté gauche */}
      <div className="about-image">
        <div className="about-image-overlay" />
        <motion.div
          className="about-image-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="about-image-tag-year">Est. 2008</span>
          <span className="about-image-tag-city">Lomé, Togo</span>
        </motion.div>
      </div>

      {/* Watermark */}
      <div className="about-watermark">ARCHITECTURE</div>

      {/* Panel droit */}
      <motion.div
        className="about-panel"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <motion.span
          className="about-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          L'agence
        </motion.span>

        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          ABM<span className="about-title-accent">·</span>Consulting
        </motion.h2>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          ABM·Consulting est une agence d'architecture regroupant les compétences
          de conception architecturale et urbaine, de suivi, d'ordonnancement,
          de pilotage et de coordination des opérations de maîtrise d'œuvre.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          Située à Lomé au Togo, l'agence compte aujourd'hui six architectes
          spécialisés dans le logement, la réhabilitation, l'urbanisme et la santé.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((s) => (
            <div className="about-stat" key={s.label}>
              <span className="about-stat-num">{s.num}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="about-footer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.95 }}
        >
          <div className="about-specialties">
            {specialties.map((s, i) => (
              <span className="about-category" key={s}>
                {s}
                {i < specialties.length - 1 && (
                  <span className="about-category-sep">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="about-socials">
            <a
              href="#"
              className="about-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="about-social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}