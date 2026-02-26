import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl w-full"
          onClick={e => e.stopPropagation()}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[80vh] object-contain mb-6"
          />

          <div className="text-white">
            <h2 className="text-3xl font-light tracking-wide mb-2">
              {project.title}
            </h2>
            <p className="opacity-70">
              {project.description || "Projet architectural"}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
