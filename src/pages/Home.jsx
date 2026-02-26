import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
// import ProjectsPreview from "../components/home/ProjectsPreview";

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-secondary text-primary"
    >
      <Hero />
      <About />
      <Services />
    </motion.div>
  );
}
