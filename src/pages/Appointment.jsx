import { motion } from "framer-motion";
import { useState } from "react";
import "./Appointment.css";

const PROJECT_TYPES = [
  "Logement",
  "Rénovation",
  "Architecture commerciale",
  "Urbanisme",
  "Santé",
  "Autre",
];

const CONTACT_INFO = [
  { icon: "◈", label: "Adresse", value: "Quartier Adeticope, Lomé, Togo" },
  { icon: "◎", label: "Téléphone", value: "+228 91 75 30 75" },
  { icon: "✦", label: "Email", value: "contact@Abmconsulting.com" },
  { icon: "◷", label: "Horaires", value: "Lun – Ven · 9h00 – 18h00" },
];

export default function Appointment() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [minTime, setMinTime] = useState("08:00");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      const selected = new Date(value);
      const now = new Date();
      if (selected.toDateString() === now.toDateString()) {
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        setMinTime(`${hours}:${minutes}`);
      } else {
        setMinTime("08:00");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      setSuccess("Votre rendez-vous a été envoyé avec succès !");
      setFormData({
        name: "",
        email: "",
        phone: "",
        project_type: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      className="appointment"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Watermark */}
      <div className="appointment-watermark">RDV</div>

      {/* En-tête */}
      <div className="appointment-header">
        <motion.span
          className="appointment-label"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Contact
        </motion.span>
        <motion.h1
          className="appointment-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Prendre <em>rendez-vous</em>
        </motion.h1>
      </div>

      {/* Layout 2 colonnes */}
      <div className="appointment-layout">

        {/* Colonne gauche — infos */}
        <motion.div
          className="appointment-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="appointment-intro">
            Chaque grand projet commence par une{" "}
            <em>conversation</em>. Rencontrons-nous pour
            discuter de votre vision.
          </p>

          <div className="appointment-contacts">
            {CONTACT_INFO.map((item) => (
              <div className="appointment-contact-line" key={item.label}>
                <div className="appointment-contact-icon">{item.icon}</div>
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="appointment-note">
            <p className="appointment-note-tag">Première consultation</p>
            <p className="appointment-note-text">
              Votre première consultation de 45 minutes est{" "}
              <strong>offerte</strong>. Nous discuterons de votre projet,
              de vos besoins et de notre méthodologie.
            </p>
          </div>
        </motion.div>

        {/* Colonne droite — formulaire */}
        <motion.div
          className="appointment-form-wrap"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="appointment-form-title">
            Demande de <em>rendez-vous</em>
          </h2>

          {success && (
            <div className="appointment-success">
              <span>✓</span> {success}
            </div>
          )}
          {error && (
            <div className="appointment-error">
              <span>✕</span> {error}
            </div>
          )}

          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-grid">

              <div className="form-group">
                <label>Nom complet</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jean@exemple.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+228 00 00 00 00"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Type de projet</label>
                <select
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionner...</option>
                  {PROJECT_TYPES.map((type, i) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Date souhaitée</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  required
                />
              </div>

              <div className="form-group">
                <label>Heure</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  min={minTime}
                  required
                />
              </div>

            </div>

            <div className="form-group form-group-full">
              <label>Décrivez votre projet</label>
              <textarea
                name="message"
                placeholder="En quelques mots, parlez-nous de votre projet, de vos envies, de votre budget approximatif..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-submit">
              <button type="submit" disabled={submitting}>
                {submitting ? (
                  <>
                    <span className="btn-spinner" />
                    Envoi en cours...
                  </>
                ) : (
                  <>Envoyer la demande →</>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}