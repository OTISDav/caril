import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
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
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.project_type,
          date: formData.date,
          time: formData.time,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("EMAILJS SUCCESS:", result);

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
      console.error("EMAILJS ERROR:", err);

      setError(
        err?.text ||
        "Une erreur est survenue. Veuillez réessayer."
      );
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
      <div className="appointment-watermark">RDV</div>

      <div className="appointment-header">
        <motion.span className="appointment-label">
          Contact
        </motion.span>

        <motion.h1 className="appointment-title">
          Prendre <em>rendez-vous</em>
        </motion.h1>
      </div>

      <div className="appointment-layout">

        {/* LEFT */}
        <motion.div className="appointment-info">
          <p className="appointment-intro">
            Chaque grand projet commence par une{" "}
            <em>conversation</em>.
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
            <p className="appointment-note-tag">
              Première consultation
            </p>
            <p className="appointment-note-text">
              Consultation de 45 minutes <strong>offerte</strong>.
            </p>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div className="appointment-form-wrap">

          <h2 className="appointment-form-title">
            Demande de <em>rendez-vous</em>
          </h2>

          {success && (
            <div className="appointment-success">✓ {success}</div>
          )}

          {error && (
            <div className="appointment-error">✕ {error}</div>
          )}

          <form className="appointment-form" onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>Nom complet</label>
                <input
                  type="text"
                  name="name"
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
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Heure</label>
                <input
                  type="time"
                  name="time"
                  min={minTime}
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group form-group-full">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-submit">
              <button type="submit" disabled={submitting}>
                {submitting ? "Envoi..." : "Envoyer la demande →"}
              </button>
            </div>

          </form>

        </motion.div>
      </div>
    </motion.div>
  );
}