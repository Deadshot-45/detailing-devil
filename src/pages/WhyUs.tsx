import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  Gauge,
  Zap,
  CheckCircle2,
  XCircle,
  Sun,
  Layers,
  ThermometerSnowflake,
  FileCheck,
  Star,
  ArrowRight,
  ChevronRight,
  Shield,
  Settings,
  Flame,
} from "lucide-react";

// Differentiator Pillars
const corePillars = [
  {
    icon: ThermometerSnowflake,
    title: "Dust-Free Cleanroom Bays",
    tagline: "HEPA-Filtered & Climate-Stabilized",
    description:
      "Unlike conventional open-air garages, our studio maintains ISO-calibrated cleanrooms with positive air pressure and sub-micron particulate filtration, ensuring flawless dust-free PPF installation and coating bonding.",
    stats: "0% Dust Contamination",
  },
  {
    icon: Gauge,
    title: "Micron Paint Depth Mapping",
    tagline: "Digital Ultrasonic Gauge Diagnostics",
    description:
      "Before any rotary or dual-action machine touches your car, we log 80+ paint depth measurement points across panels to preserve clear coat integrity and calibrate safe correction margins.",
    stats: "80+ Panel Scan Points",
  },
  {
    icon: Sun,
    title: "Dual-Spectrum Inspection Tunnels",
    tagline: "98+ CRI Multi-Angle Lighting",
    description:
      "Equipped with 5000K daylight and 6500K inspection LED light arrays that replicate direct noon sunlight and high-angle spot glare, revealing swirl marks and micro-scratches hidden to ordinary lighting.",
    stats: "99.4% Defect Elimination",
  },
  {
    icon: Layers,
    title: "Edge-Wrapped Custom PPF Patterns",
    tagline: "Bulk Custom Sheet & Extended Patterns",
    description:
      "We extend manufacturer plotter cutouts by 0.5 inches to wrap every possible edge, emblem recess, and corner seam behind panels. No exposed seams, no dirt lines, and invisible protection.",
    stats: "Seamless Full Wrap",
  },
  {
    icon: Zap,
    title: "Infrared Shortwave Curing",
    tagline: "Molecular Quartz Cross-Linking",
    description:
      "Standard ceramic coatings take 7-14 days to air cure. We use industrial short-wave infrared bake lamps to achieve complete molecular cross-linking in hours for maximum chemical and scratch hardness.",
    stats: "Instant 9H Hardness",
  },
  {
    icon: Award,
    title: "Certified Master Detailers",
    tagline: "10,000+ Hours Exotic Supercar Mastery",
    description:
      "Every vehicle is handled exclusively by internationally accredited master detailers with proven track records on Ferrari, Lamborghini, Porsche, Bentley, and Rolls-Royce vehicles.",
    stats: "IDA Certified Team",
  },
];

// Comparison Matrix Data
const comparisonRows = [
  {
    feature: "Installation Environment",
    detailingDevil: "ISO Cleanroom with HEPA Filtration & Climate Control",
    standardShops: "Open garage bay with ambient road dust & wind",
    highlight: true,
  },
  {
    feature: "Paint Thickness Logging",
    detailingDevil: "Digital multi-point ultrasonic gauge mapping (microns)",
    standardShops: "Visual eyeballing without clear coat depth analysis",
    highlight: false,
  },
  {
    feature: "PPF Edge Wrapping",
    detailingDevil: "Extended custom templates wrapping behind all panel seams",
    standardShops: "Pre-cut templates with visible edges and dirt borders",
    highlight: true,
  },
  {
    feature: "Coating Curing Technology",
    detailingDevil: "Short-wave Infrared Bake Lamps for instant cross-linking",
    standardShops: "Natural air drying subject to humidity fluctuations",
    highlight: false,
  },
  {
    feature: "Ceramic Solid Content",
    detailingDevil: "Aerospace-grade 9H high-density SiO2 / SiC formulas",
    standardShops: "Diluted silicone/polymer sprays with 6-12 month lifespan",
    highlight: true,
  },
  {
    feature: "Warranty & Support",
    detailingDevil: "Up to 10-Year Transferable Warranty with Free Annual Checks",
    standardShops: "Verbal assurance or non-transferable partial warranties",
    highlight: false,
  },
  {
    feature: "Transport & Logistics",
    detailingDevil: "Enclosed covered flatbed pickup & delivery available",
    standardShops: "Customer drives through traffic unprotected",
    highlight: true,
  },
];

// Technical Equipment Showcase
const studioGear = [
  {
    name: "Rupes BigFoot Nano & Mark III",
    category: "Paint Correction Systems",
    desc: "Italian precision dual-action polishers eliminating holograms without rotary burn.",
  },
  {
    name: "Trisk Infrared Shortwave Lamps",
    category: "Thermal Curing Units",
    desc: "Bakes coatings from the substrate outward, preventing trapped moisture or bubbles.",
  },
  {
    name: "Graphtec FC9000-160 Plotters",
    category: "Precision PPF Cutting",
    desc: "Computer precision cutting with expanded edge offsets to eliminate on-paint razor scoring.",
  },
  {
    name: "Defelsko Positector 6000",
    category: "Ultrasonic Paint Profiling",
    desc: "Accurate micro-gauge analysis across steel, aluminum, carbon fiber, and fiberglass.",
  },
];

// Client Testimonials
const clientReviews = [
  {
    quote:
      "Detailing Devil protected my Huracán STO with full body satin PPF. The attention to tucking edges into the carbon aero components was beyond anything I have seen in India. Pure mastercraft.",
    author: "Aditya V.",
    vehicle: "Lamborghini Huracán STO",
    location: "Indore",
    rating: 5,
  },
  {
    quote:
      "My 911 GT3 RS had factory swirl marks from transit. Their 3-stage correction restored mirror depth, and the 9H quartz coating makes water fly off like mercury. The climate cleanroom is impressive.",
    author: "Rajeshwar S.",
    vehicle: "Porsche 911 GT3 RS",
    location: "Bhopal",
    rating: 5,
  },
  {
    quote:
      "The digital paint depth report and enclosed transport made me completely trust them with my Mercedes-AMG G63. 2 years later, the paint looks showroom new after weekly washes.",
    author: "Vikramaditya M.",
    vehicle: "Mercedes-AMG G63",
    location: "Indore",
    rating: 5,
  },
];

export const WhyUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"cleanroom" | "science" | "guarantee">("cleanroom");

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#e5e2e1] antialiased flex flex-col selection:bg-primary-container selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-container/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-surface-tint/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-[11px] font-montserrat font-bold uppercase tracking-widest text-[#ffb4a8] mb-6"
          >
            <span className="size-2 rounded-full bg-primary-container animate-pulse" />
            <span>CENTRAL INDIA'S BENCHMARK AUTOMOTIVE STUDIO</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase italic tracking-tight text-white leading-tight mb-6"
          >
            THE STANDARD OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c7c6c6] to-[#ffb4a8]">
              UNCOMPROMISED PERFECTION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base sm:text-lg md:text-xl text-[#c7c6c6] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            We engineered Detailing Devil to eliminate the guesswork of car care. 
            Through medical-grade cleanrooms, digital paint depth diagnostics, and aerospace 
            nano-quartz chemistry, we deliver results that exceed factory finish tolerances.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#141414]/90 border border-white/10 backdrop-blur-xl shadow-2xl text-left"
          >
            <div className="border-r border-white/10 pr-4 last:border-r-0">
              <div className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white">500+</div>
              <div className="font-inter text-xs text-[#8e8d8d] uppercase tracking-wider mt-1">Supercars Protected</div>
            </div>
            <div className="border-r border-white/10 pr-4 last:border-r-0">
              <div className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#ffb4a8]">10-YEAR</div>
              <div className="font-inter text-xs text-[#8e8d8d] uppercase tracking-wider mt-1">Warranty Backing</div>
            </div>
            <div className="border-r border-white/10 pr-4 last:border-r-0">
              <div className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white">99.4%</div>
              <div className="font-inter text-xs text-[#8e8d8d] uppercase tracking-wider mt-1">Defect Removal</div>
            </div>
            <div>
              <div className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#ffb4a8]">ISO BAY</div>
              <div className="font-inter text-xs text-[#8e8d8d] uppercase tracking-wider mt-1">Cleanroom Facility</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core 6 Differentiator Pillars */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-montserrat font-bold text-[#ffb4a8] uppercase tracking-widest mb-3">
            <Flame className="size-4" />
            <span>OUR 6 OBSESSIONS</span>
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase italic text-white tracking-tight">
            BUILT DIFFERENT. <span className="text-[#ffb4a8]">PROVEN IN EVERY DETAIL.</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#c7c6c6] mt-4">
            Every step of our process is designed around clear-coat preservation and long-term surface resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, borderColor: "rgba(215,0,0,0.5)" }}
                className="p-8 rounded-2xl bg-[#141414] border border-white/10 hover:border-primary-container/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary-container/10 rounded-full blur-xl group-hover:bg-primary-container/20 transition-all duration-500" />

                <div>
                  <div className="size-14 rounded-xl bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-[#ffb4a8] mb-6 group-hover:scale-110 group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
                    <Icon className="size-7" />
                  </div>
                  <span className="text-[10px] font-montserrat font-bold tracking-widest text-[#ffb4a8] uppercase block mb-1">
                    {pillar.tagline}
                  </span>
                  <h3 className="font-montserrat text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-inter text-sm text-[#8e8d8d] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-montserrat font-bold text-xs text-white">
                    {pillar.stats}
                  </span>
                  <span className="size-2 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Deep-Dive Tabs */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#131313] border border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/3">
              <span className="text-xs font-montserrat font-bold text-[#ffb4a8] uppercase tracking-widest block mb-2">
                INSIDE THE STUDIO
              </span>
              <h3 className="font-montserrat text-3xl sm:text-4xl font-extrabold uppercase italic text-white leading-tight mb-6">
                THE SCIENCE BEHIND THE GLOSS
              </h3>
              <p className="font-inter text-sm text-[#c7c6c6] leading-relaxed mb-8">
                Explore the strict technical standards that separate Detailing Devil from ordinary automotive workshops.
              </p>

              {/* Tab Selector Buttons */}
              <div className="flex flex-col space-y-2">
                {[
                  { id: "cleanroom", label: "Cleanroom Environment", icon: Shield },
                  { id: "science", label: "Paint Chemistry & Curing", icon: Zap },
                  { id: "guarantee", label: "Warranty & Support", icon: FileCheck },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center justify-between p-4 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider transition-all text-left ${
                        activeTab === tab.id
                          ? "bg-primary-container text-white shadow-lg shadow-primary-container/30 border-l-4 border-white"
                          : "bg-[#1c1c1c] text-[#c7c6c6] hover:bg-[#252525] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="size-4" />
                        <span>{tab.label}</span>
                      </div>
                      <ChevronRight className="size-4 opacity-70" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content Display */}
            <div className="lg:w-2/3 bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 sm:p-8">
              {activeTab === "cleanroom" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h4 className="font-montserrat text-xl font-bold text-white">
                      Hospital-Grade Cleanroom Standards
                    </h4>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded text-[10px] font-montserrat font-bold tracking-widest uppercase">
                      ACTIVE AIR FILTERED
                    </span>
                  </div>
                  <p className="font-inter text-sm text-[#c7c6c6] leading-relaxed">
                    Most swirl marks and PPF bubbles originate during installation from airborne debris. Our cleanrooms feature:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#161616] border border-white/5">
                      <div className="font-montserrat font-bold text-sm text-white mb-1">
                        Negative &amp; Positive Pressure Zones
                      </div>
                      <p className="text-xs text-[#8e8d8d]">
                        Washing and decontamination occur in isolated drainage zones, separating wet contaminants from dry installation cleanrooms.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#161616] border border-white/5">
                      <div className="font-montserrat font-bold text-sm text-white mb-1">
                        Constant Humidity &amp; Temp Control
                      </div>
                      <p className="text-xs text-[#8e8d8d]">
                        Stabilized at 22°C and 45% relative humidity to ensure optimal film stretch and chemical bond reaction rates.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "science" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h4 className="font-montserrat text-xl font-bold text-white">
                      High-Solids SiO2 &amp; SiC Molecular Matrix
                    </h4>
                    <span className="px-3 py-1 bg-primary-container/15 text-[#ffb4a8] border border-primary-container/30 rounded text-[10px] font-montserrat font-bold tracking-widest uppercase">
                      9H HARDNESS
                    </span>
                  </div>
                  <p className="font-inter text-sm text-[#c7c6c6] leading-relaxed">
                    We exclusively formulate with inorganic silicon carbide (SiC) and pure silicon dioxide (SiO2) networks that chemically fuse with OEM clear coat:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#161616] border border-white/5">
                      <div className="font-montserrat font-bold text-sm text-white mb-1">
                        110°+ Water Contact Angle
                      </div>
                      <p className="text-xs text-[#8e8d8d]">
                        Hyper-hydrophobic surface tension forces road mud, bird droppings, and industrial fallout to bead and roll away effortlessly.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#161616] border border-white/5">
                      <div className="font-montserrat font-bold text-sm text-white mb-1">
                        UV &amp; Thermal Resistance (800°C)
                      </div>
                      <p className="text-xs text-[#8e8d8d]">
                        Protects against intense Central Indian ultraviolet radiation and high brake rotor heat on track days.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "guarantee" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h4 className="font-montserrat text-xl font-bold text-white">
                      10-Year Genuine Transferable Warranty
                    </h4>
                    <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded text-[10px] font-montserrat font-bold tracking-widest uppercase">
                      OFFICIAL CERTIFICATE
                    </span>
                  </div>
                  <p className="font-inter text-sm text-[#c7c6c6] leading-relaxed">
                    Every installation is registered on our digital warranty portal, backed by national brand coverage:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#161616] border border-white/5">
                      <div className="font-montserrat font-bold text-sm text-white mb-1">
                        Anti-Yellowing &amp; Delamination Protection
                      </div>
                      <p className="text-xs text-[#8e8d8d]">
                        Full replacement coverage if film bubbles, yellows, or lifts along any wrapped panel seam.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#161616] border border-white/5">
                      <div className="font-montserrat font-bold text-sm text-white mb-1">
                        Complimentary 6-Month Audits
                      </div>
                      <p className="text-xs text-[#8e8d8d]">
                        Free semi-annual coating top-ups and hydrophobic reactivation washes for the lifetime of your warranty.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Matrix */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-montserrat font-bold text-[#ffb4a8] uppercase tracking-widest block mb-2">
            TRANSPARENCY IN EVERY LAYER
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase italic text-white tracking-tight">
            DETAILING DEVIL <span className="text-[#ffb4a8]">VS STANDARD SHOPS</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#c7c6c6] mt-4">
            See why enthusiast car collectors and supercar owners choose our engineering-first methodology.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#121212] shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-[#181818]">
                <th className="p-5 sm:p-6 font-montserrat font-bold text-xs uppercase tracking-widest text-[#c7c6c6]">
                  Criteria &amp; Workmanship
                </th>
                <th className="p-5 sm:p-6 font-montserrat font-black text-xs uppercase tracking-widest text-[#ffb4a8] bg-primary-container/10 border-l border-r border-primary-container/30">
                  <div className="flex items-center space-x-2">
                    <span className="size-2 rounded-full bg-primary-container" />
                    <span>Detailing Devil Standard</span>
                  </div>
                </th>
                <th className="p-5 sm:p-6 font-montserrat font-bold text-xs uppercase tracking-widest text-[#8e8d8d]">
                  Standard Detailing Garage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-inter text-sm">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-white/[0.02] transition-colors ${
                    row.highlight ? "bg-white/[0.01]" : ""
                  }`}
                >
                  <td className="p-5 sm:p-6 font-montserrat font-bold text-sm text-white">
                    {row.feature}
                  </td>
                  <td className="p-5 sm:p-6 text-white font-medium bg-primary-container/5 border-l border-r border-primary-container/20">
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.detailingDevil}</span>
                    </div>
                  </td>
                  <td className="p-5 sm:p-6 text-[#8e8d8d]">
                    <div className="flex items-start space-x-2.5">
                      <XCircle className="size-5 text-rose-500/80 shrink-0 mt-0.5" />
                      <span>{row.standardShops}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Equipment & Tooling Grid */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-montserrat font-bold text-[#ffb4a8] uppercase tracking-widest block mb-2">
              WORLD-CLASS INFRASTRUCTURE
            </span>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-extrabold uppercase italic text-white tracking-tight">
              PRECISION <span className="text-[#ffb4a8]">EQUIPMENT</span>
            </h2>
          </div>
          <p className="font-inter text-xs sm:text-sm text-[#8e8d8d] max-w-md mt-4 md:mt-0">
            We invest in European and Japanese aerospace tooling to ensure exact paint correction consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioGear.map((gear, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="size-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center text-[#ffb4a8] mb-4">
                <Settings className="size-5" />
              </div>
              <span className="text-[10px] font-montserrat font-bold text-[#8e8d8d] tracking-widest uppercase block mb-1">
                {gear.category}
              </span>
              <h4 className="font-montserrat font-bold text-base text-white mb-2">
                {gear.name}
              </h4>
              <p className="text-xs text-[#8e8d8d] leading-relaxed">
                {gear.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VIP Client Testimonials */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-montserrat font-bold text-[#ffb4a8] uppercase tracking-widest block mb-2">
            AUTHENTIC TESTIMONIALS
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase italic text-white tracking-tight">
            TRUSTED BY <span className="text-[#ffb4a8]">EXOTIC OWNERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientReviews.map((rev, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-[#131313] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-6">
                  {[...Array(rev.rating)].map((_, r) => (
                    <Star key={r} className="size-4 fill-amber-400" />
                  ))}
                </div>
                <p className="font-inter text-sm text-[#c7c6c6] italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="font-montserrat font-bold text-sm text-white">
                  {rev.author}
                </div>
                <div className="font-inter text-xs text-[#ffb4a8]">
                  {rev.vehicle} • {rev.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Booking CTA Banner */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="p-10 sm:p-16 rounded-3xl bg-linear-to-br from-[#1a1a1a] via-[#141414] to-[#0d0d0d] border border-primary-container/40 relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />

          <span className="px-3.5 py-1.5 rounded-full bg-primary-container/20 text-[#ffb4a8] border border-primary-container/40 text-[10px] font-montserrat font-bold uppercase tracking-widest mb-6">
            NIPANIYA, INDORE STUDIO
          </span>

          <h2 className="font-montserrat text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase italic text-white tracking-tight max-w-3xl mb-6">
            ELEVATE YOUR CAR TO <span className="text-[#ffb4a8]">DEVIL STANDARDS</span>
          </h2>

          <p className="font-inter text-sm text-[#c7c6c6] max-w-2xl mb-10 leading-relaxed">
            Schedule a complimentary digital paint depth audit and consultation with our master detailers at our Indore studio.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-primary-container hover:bg-[#b50000] text-white font-montserrat font-bold text-xs uppercase tracking-widest rounded shadow-xl shadow-primary-container/30 transition-all"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/services"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-widest rounded backdrop-blur-md transition-all"
              >
                <span>VIEW SERVICES &amp; PACKAGES</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
