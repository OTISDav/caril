import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">

      {/* Video background */}
      <motion.video
        className="hero-video"
        src="/videos/1.mp4"
        poster="/images/archiphoto.jpg"
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Overlay dégradé */}
      <div className="hero-overlay" />

      {/* Ligne verticale déco gauche */}
      <motion.div
        className="hero-side-line"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
      />

      {/* Contenu principal */}
      <div className="hero-content">

        {/* Tag */}
        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Cabinet d'Architecture · Lomé, Togo
        </motion.p>

        {/* Titre */}
        <div className="hero-title-wrap">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            L'espace
          </motion.h1>
          <motion.h1
            className="hero-title italic"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
          >
            pensé
          </motion.h1>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            pour vous.
          </motion.h1>
        </div>

        {/* Sous-titre */}
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Concevoir des espaces durables, élégants et intemporels
        </motion.p>

        {/* Actions */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Link to="/Portfolio" className="hero-btn-primary">
            Voir nos projets
          </Link>
          <Link to="/rendez-vous" className="hero-btn-ghost">
            Prendre rendez-vous
            <span className="hero-btn-arrow">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Indicateur scroll */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="hero-scroll-line" />
        <span>Défiler</span>
      </motion.div>

      {/* Numéro déco droite */}
      <motion.div
        className="hero-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <span className="hero-counter-num">47</span>
        <span className="hero-counter-label">projets réalisés</span>
      </motion.div>

    </section>
  );
}