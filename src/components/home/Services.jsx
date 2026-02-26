import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Assistance Technique à Maîtrise d'Ouvrage",
    desc: "Accompagnement du maître d'ouvrage à chaque étape décisionnelle pour garantir la cohérence du projet.",
    icon: "◈",
  },
  {
    title: "Architecture",
    desc: "Conception de bâtiments résidentiels, commerciaux et institutionnels alliant esthétique et fonctionnalité.",
    icon: "◻",
  },
  {
    title: "Ingénierie",
    desc: "Études techniques, coordination des corps de métier et suivi rigoureux du chantier jusqu'à la livraison.",
    icon: "◎",
  },
  {
    title: "Urbanisme & Innovation Territoriale",
    desc: "Planification urbaine durable et conception d'espaces publics à l'échelle du quartier et de la ville.",
    icon: "✦",
  },
];

export default function Services() {
  return (
    <section className="services">

      {/* En-tête */}
      <div className="services-header">
        <motion.span
          className="services-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ce que nous faisons
        </motion.span>

        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Nos <em>services</em>
        </motion.h2>
      </div>

      {/* Grille */}
      <div className="services-grid">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            {/* Numéro + icône */}
            <div className="service-top">
              <span className="service-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="service-icon">{service.icon}</span>
            </div>

            {/* Séparateur */}
            <div className="service-divider" />

            {/* Texte */}
            <h3 className="service-name">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>

            {/* Hover arrow */}
            <span className="service-arrow">→</span>
          </motion.div>
        ))}
      </div>

      {/* Watermark */}
      <div className="services-watermark">SERVICES</div>

    </section>
  );
}