import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import CanvasLoader from "@/components/CanvasLoader";

const ThreeDCanvas = lazy(() => import("@/components/ThreeCarCanvas"));

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Hero Section with Interactive Three.js Car Model */}
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<CanvasLoader />}>
          <ThreeDCanvas />
        </Suspense>
      </div>
      <section className="relative h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181818] border border-surface-container-high text-xs uppercase tracking-widest text-[#C7C6C6] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-container" />
            <span>NIPANIYA • INDORE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black italic tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-none"
          >
            PRECISION. <br />
            PROTECTION. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-secondary to-primary-container">
              PERFECTION.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-[#8E8E8E] text-sm sm:text-base md:text-lg mb-10 font-normal leading-relaxed"
          >
            Central India's foremost ultra-luxury auto studio. Self-healing TPU
            PPF, 9H Ceramic Quartz coating, and master paint correction.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col bg-none sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-primary-container hover:bg-[#b50000] text-white font-heading font-bold text-xs sm:text-sm tracking-widest uppercase rounded shadow-[0_0_30px_rgba(215,0,0,0.4)] transition-all"
              >
                <span>Explore Packages</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/our-work"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#141414]/80 hover:bg-[#202020] border border-[#2B2B2B] text-white font-heading font-bold text-xs sm:text-sm tracking-widest uppercase rounded backdrop-blur-md transition-all"
              >
                <span>The Devil's Garage</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none opacity-60"
        >
          <span className="text-[10px] tracking-widest uppercase text-[#888]">
            Scroll to Explore
          </span>
          <span className="material-symbols-outlined text-white text-lg">
            keyboard_arrow_down
          </span>
        </motion.div>
      </section>

      {/* Feature Highlights Bento Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1F1F1F]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "shield_with_heart",
              title: "Self-Healing TPU Film",
              desc: "10-year warranty against yellowing, swirls, rock chips, and chemical stains.",
            },
            {
              icon: "auto_fix_high",
              title: "Multi-Stage Paint Correction",
              desc: "Restoring 99% factory clarity under specialized dual-frequency LED inspection lights.",
            },
            {
              icon: "diamond",
              title: "9H Quartz Ceramic Matrix",
              desc: "Extreme hydrophobic lotus effect with deep optical glass gloss enhancement.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "#D70000" }}
              className="p-8 rounded-xl bg-[#111111] border border-[#222222] transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 border border-primary-container/30 flex items-center justify-center text-primary-container mb-6">
                <span className="material-symbols-outlined text-2xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-[#888] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
