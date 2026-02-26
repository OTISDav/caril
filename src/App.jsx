import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Appointment from "./pages/Appointment";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<Home />} />
        <Route path="/portfolio"    element={<Portfolio />} />
        <Route path="/rendez-vous"  element={<Appointment />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1a1a1a",
            color: "#F5F0E8",
            border: "1px solid rgba(201,169,110,0.3)",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
          },
        }}
      />
      <MainLayout>
        <AnimatedRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}