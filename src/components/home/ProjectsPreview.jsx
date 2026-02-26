import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mockProjects } from "../../data/mockProjects";
import "./ProjectsPreview.css";

// On prend les 3 premiers projets
const projects = mockProjects.slice(0, 3);

export default function ProjectsPreview() {
  return (
    <section className="projects-preview">

      {/* En-tête */}
      <div className="projects-preview-header">
        <div>
          <motion.span
            className="projects-preview-label"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Réalisations
          </motion.span>

          <motion.h2
            className="projects-preview-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Projets <em>récents</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/portfolio" className="projects-preview-cta">
            Tous les projets
            <span className="projects-preview-cta-arrow">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Grille */}
      <div className="projects-preview-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className={`project-preview-card ${i === 0 ? "featured" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            <Link to={`/portfolio/${project.id}`} className="project-preview-link">

              {/* Image */}
              <div className="project-preview-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-preview-img"
                  loading="lazy"
                />
                <div className="project-preview-overlay">
                  <span className="project-preview-overlay-icon">→</span>
                </div>
              </div>

              {/* Info */}
              <div className="project-preview-info">
                <div className="project-preview-meta">
                  <span className="project-preview-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="project-preview-category">
                    {project.category}
                  </span>
                </div>
                <h3 className="project-preview-name">{project.title}</h3>
                <p className="project-preview-location">
                  {project.location} · {project.year}
                </p>
              </div>

            </Link>
          </motion.div>
        ))}
      </div>

    </section>
  );
}