import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mockProjects } from "../../data/mockProjects";

const FILTERS = ["Tous", "Résidentiel", "Commercial", "Rénovation", "Urbanisme"];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? mockProjects
      : mockProjects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filtres */}
      <div className="portfolio-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`portfolio-filter-btn ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
        <span className="portfolio-count">
          {filtered.length} projet{filtered.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Grille masonry */}
      <div className="portfolio-grid">
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            className="portfolio-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.12 }}
            layout
          >
            <Link to={`/portfolio/${project.id}`}>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
              <div className="portfolio-overlay">
                <span className="portfolio-overlay-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="portfolio-overlay-cat">{project.category}</span>
                <h3 className="portfolio-overlay-title">{project.title}</h3>
                <p className="portfolio-overlay-location">
                  {project.location} · {project.year}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}