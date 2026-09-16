import { lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import NavBar from "./components/layout/NavBar";
import { AppSidebar } from "./components/layout/AppSidebar";
import Footer from "./components/layout/Footer";
import React from "react";
import CanvasLoader from "./components/CanvasLoader";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const OurWork = lazy(() => import("./pages/OurWork"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const Process = lazy(() => import("./pages/Process"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Contact = lazy(() => import("./pages/Contact"));

const Suspense: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <React.Suspense fallback={<CanvasLoader />}>{children}</React.Suspense>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

const pageVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Suspense>
                <Home />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Suspense>
                <Services />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/our-work"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Suspense>
                <OurWork />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/why-us"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Suspense>
                <WhyUs />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/process"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Suspense>
                <Process />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/reviews"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Suspense>
                <Reviews />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Suspense>
                <Contact />
              </Suspense>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] text-[#E0E0E0] font-sans antialiased flex flex-col selection:bg-primary-container selection:text-white">
        {/* Top Status Strip */}
        <div className="bg-[#121212] border-b border-[#222] py-1.5 px-4 text-xs flex justify-between items-center text-[#888]">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Studio Open Today • 10:00 AM – 8:00 PM</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <span>Indore's Premier Studio</span>
            <span className="text-[#444]">|</span>
            <a
              href="tel:+919876543210"
              className="text-[#C7C6C6] hover:text-primary-container transition-colors"
            >
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <NavBar onMenuClick={() => setSidebarOpen(true)} />

        {/* Animated Mobile Sidebar */}
        <AppSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content with Page Transitions */}
        <main className="flex-1 w-dvw overflow-x-hidden">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
