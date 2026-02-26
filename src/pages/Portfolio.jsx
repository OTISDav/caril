import { motion } from "framer-motion";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Watermark */}
      <div className="portfolio-watermark">PORTFOLIO</div>

      {/* En-tête */}
      <div className="portfolio-header">
        <div className="portfolio-header-left">
          <motion.span
            className="portfolio-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Réalisations
          </motion.span>

          <motion.h1
            className="portfolio-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Nos <em>projets</em>
          </motion.h1>
        </div>
      </div>

      {/* Grille */}
      <motion.div
        className="portfolio-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <PortfolioGrid />
      </motion.div>
    </motion.div>
  );
}