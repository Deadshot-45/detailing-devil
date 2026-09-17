import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import {
  Gauge,
  Sparkles,
  Layers,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Search,
  Droplets,
  Flame,
  Clock,
  Check,
  FileText,
  Thermometer,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  checklist: string[];
  equipment: string[];
  deliverable: string;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "INTAKE & DIGITAL DIAGNOSTICS",
    tagline: "Ultrasonic Paint Depth Profiling",
    duration: "2 - 3 Hours",
    icon: Search,
    description:
      "Every vehicle undergoes a thorough condition audit upon arrival. We map clear coat thickness across all steel, aluminum, and carbon fiber panels using calibrated ultrasonic digital gauges to ensure safe polishing margins without clear coat burnout.",
    checklist: [
      "80+ point electronic micron paint depth scan",
      "Macro defect photography under dual-spectrum lighting",
      "Wheel, caliper, and brake rotor condition audit",
      "Client digital inspection report generated before work begins",
    ],
    equipment: ["Defelsko Positector 6000 Gauge", "High-CRI Inspection Torches", "Digital Audit Tablet"],
    deliverable: "Digital Paint Condition & Thickness Baseline Report",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxApidNe5CdfD9DvJ4eVIVKgNfvjPyuAqg-zJPdWw-qC8STG2jHQpmgwagggN8Xui2rX_e2JTmmHIwYUSzLiu4GVqHKqCy0LZZoZufLQ81Mm0bp1gus0MMrP0afGWJ7Spq43TjGSEwBHbevHhKQYCGLaM0EIxbHN3HBt_HCq3jy-1OiasI_G-nzmxJ3WJ7Ob7BEGhfqTw6EOsHJ5BLYroZK2RH3t52csGQWETtlgJvSQGb9AewG5t-MA",
  },
  {
    number: "02",
    title: "DECONTAMINATION & STRIP WASH",
    tagline: "Multi-Stage Chemical & Mechanical Purification",
    duration: "4 - 6 Hours",
    icon: Droplets,
    description:
      "Old waxes, iron brake fallout, road tar, and industrial fallout prevent coatings and PPF from bonding. We perform a multi-bucket contactless wash followed by chemical iron dissolution, clay bar decontamination, and sub-zero steam purification.",
    checklist: [
      "pH-neutral high-lubricity active snow foam bath",
      "pH-balanced acid-free iron reactor treatment for wheels & body",
      "Fine-grade synthetic clay bar mechanical decontamination",
      "Sub-zero high-pressure steam flush for door jambs and badges",
    ],
    equipment: ["Kranzle High-Pressure Systems", "Optimum Clay Systems", "Sub-Zero Steam Extractor"],
    deliverable: "Completely Decontaminated & Chemically Bare Clear Coat",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdoPVtacIR-mgSvBYaiQ0spm2ZCenu0b62R6zbCioXu3WHET5nflkb4f9FuS3mdsTKc8PnjWGR7eF4yX0f9PL6U2HumHHlHuZ8dfxs0_Mo45PacnTR9ZEvbnBhD4Tfwkzu17X9gZQTybfhWPsUjtoJXMSqcYp0ONu62xDLxty4inXBL5bya7NwCVNGeGEE0p6kjNlVdfYHeiJ4nTDU7FLCz1_F5geCUrAp14qHaxguRd4Btmb3TTL9WA",
  },
  {
    number: "03",
    title: "MULTI-STAGE PAINT CORRECTION",
    tagline: "Micron-Level Optical Clear Coat Leveling",
    duration: "12 - 24 Hours",
    icon: Sparkles,
    description:
      "Restoring true optical reflection by removing 95-99% of swirl marks, light scratches, oxidation, and bird etching. Using specialized micro-abrasives and Italian dual-action machines, we level the clear coat without leaving holograms or buffer trails.",
    checklist: [
      "Stage 1: Heavy cutting compound for deep scratch removal",
      "Stage 2: Medium refining polish to eliminate compounding haze",
      "Stage 3: Ultra-fine jewel finish polish for mirror reflection",
      "IPA (Isopropanol) wipe-down to verify true paint correction",
    ],
    equipment: ["Rupes BigFoot Dual Action Polishers", "Menzerna / Koch-Chemie Compounds", "CRI 98+ Tunnel Lights"],
    deliverable: "Flawless Showroom Mirror Finish with 99.4% Defect Removal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcAcQojd19m3tRH7q4uCm_dg3oU_wuNTCBiu4TcQ8TEVpOS-n1-AscDXYO5Nwu75hKZBDO2Z7Edr-nRB9SQJ8-mAiJHct8mfkdwhqnsFYXyKjOyAfNloF8rtRvzI9fch92Hx10gaWFuTxMBnDwDenjVJe02ZRyGfSuS7yDm6PLrt1osXkjqoWlbolti_AMAdFcCWRaXc3I6o9w47PFi2W1M9Z1FHUoNTkXN7O0gCPv5chb_YastYj3YA",
  },
  {
    number: "04",
    title: "CLEANROOM APPLICATION (PPF / CERAMIC)",
    tagline: "HEPA-Filtered Climate Bay Installation",
    duration: "8 - 16 Hours",
    icon: Layers,
    description:
      "The car enters our positive-pressure cleanroom. For PPF, custom computer-cut templates are extended by 0.5 inches to wrap every edge seamlessly. For Ceramic Coating, high-density 9H SiO2 and SiC quartz layers are hand-applied with precise cross-hatch leveling.",
    checklist: [
      "Edge-wrapped self-healing TPU PPF installation with 0 visible seams",
      "Dual-layer 9H quartz ceramic base coat + hydrophobic top coat",
      "Dedicated wheel caliper & exhaust tip ceramic coating (800°C rated)",
      "Interior leather, Alcantara, and carbon fiber ceramic protection",
    ],
    equipment: ["ISO Positive-Pressure Bay", "Graphtec FC9000 Plotters", "Aerospace 9H Quartz Matrix"],
    deliverable: "10-Year Self-Healing Protection or Extreme 9H Hydrophobic Shell",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhCQYVXllfsheXkqXwZnXSIfr_4OahhbHrbWnaEbCvZVRq5nawBGkkSVqwlJQkfkUXAewpnVkyuOf74ZPW-lTZ9hSBFFgKcB3pTD_WfNgRsWm1iKq0ZB9JWthStNxg-CCac8VFSBYeqj-kGR907zSnst6Y_VdvlJwhIhiPhdv4TCGuCKstZU2sjKtWDrcuRPFsjz6ZSFYl24AQYaLshmf9b6c4ytMu4w1kmIZ6K4uvBB8xzhTT53v8A",
  },
  {
    number: "05",
    title: "SHORT-WAVE INFRARED BAKE CURING",
    tagline: "Instant Quartz Cross-Linking & Hardening",
    duration: "4 - 6 Hours",
    icon: Zap,
    description:
      "Unlike ordinary detailers who let coatings air-dry for days in uncontrolled weather, we bake each panel under industrial short-wave infrared lamps at 65°C. This activates molecular cross-linking within hours, delivering maximum scratch resistance immediately.",
    checklist: [
      "Short-wave infrared thermal exposure at exact 65°C substrate target",
      "Panel-by-panel laser pyrometer temperature monitoring",
      "Immediate hardness locking against early rain or water spotting",
      "Hydrophobic contact angle testing at >110 degrees",
    ],
    equipment: ["Trisk Short-Wave IR Towers", "Digital Laser Pyrometers", "Controlled Bay Heaters"],
    deliverable: "100% Cured & Hardened Glass Matrix Ready for All Weather",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUAnH00sbCDFQMi2KUtM-UKVZ_c53WhxyKL4Mdo9KBijWPaV-jS9Vymtp8beowxaH5uZni07y5LgJstusvcWa5RvpWAyHgc4_QoVrMf-8HaQgrhZp4sTDEdNa7ojE-j_EYkrAeHRcdUqxwbx3tpqQo1q65WweMXutqojR0jfuuTO6nrdPE8yiefu7C5USfUPhAKONBkwHSSJwbw6tN_gzBM-WtO_W8IdeyWlpQbOH2eS5ls2P0P3muqw",
  },
  {
    number: "06",
    title: "FINAL AUDIT & WHITE-GLOVE HANDOVER",
    tagline: "100-Point Inspection & Digital Warranty",
    duration: "2 Hours",
    icon: ShieldCheck,
    description:
      "The Master Detailer conducts a 100-point inspection under high-intensity inspection beams. The digital warranty certificate is generated, the vehicle is detailed with specialized interior sanitization, and presented to the client under showroom spot lighting.",
    checklist: [
      "100-point final quality assurance sign-off by Studio Director",
      "10-Year digital warranty certificate issuance & QR activation",
      "Complimentary aftercare kit & maintenance schedule provided",
      "Enclosed covered flatbed delivery or private showroom handover",
    ],
    equipment: ["High-Intensity LED Spot Arrays", "Digital Warranty Portal", "Bespoke Aftercare Kit"],
    deliverable: "Official 10-Year Warranty Certificate & Pristine Vehicle Handover",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzAEAvutVGiiqXHIhXVJJW0BgrwSUt7fFOYEaMeOvnKMyX7K_gz0Ys1-q1jhk7SzdhcMbuaxLGyXRyQ3g0Pf0ADEav7QtjNW0BLr6siOaz3P7C4wi9FsCurodvy_zwQ33u5UQqGDuKgHLLH2zMczX-144XmSgTYJXBRpEpCw_SY3IzS8aTyosDj1ggHyMy5CnYNkVmUtS2gBvuTbwMnO0bQaPAGDu2u0151uNz7-m2C5lWEDekRncU4g",
  },
];

const studioStandards = [
  {
    icon: Thermometer,
    title: "22°C Climate Stabilization",
    desc: "Maintains optimal film viscosity and adhesive bond tension during PPF installation.",
  },
  {
    icon: Gauge,
    title: "Sub-Micron Tolerance",
    desc: "Paint depth is measured to 0.1 micron precision before and after every polishing stage.",
  },
  {
    icon: Sparkles,
    title: "98+ CRI Daylight Lighting",
    desc: "Inspection tunnels simulate direct 12:00 PM overhead sun to reveal all hidden holograms.",
  },
  {
    icon: FileText,
    title: "Digital Audit Trail",
    desc: "Complete photographic record and thickness log saved to your vehicle's service passport.",
  },
];

export const Process: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#e5e2e1] antialiased flex flex-col selection:bg-primary-container selection:text-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full overflow-hidden text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-container/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-[11px] font-montserrat font-bold uppercase tracking-widest text-[#ffb4a8] mb-6"
          >
            <span className="size-2 rounded-full bg-primary-container animate-pulse" />
            <span>THE 6-STAGE DEVIL PROTOCOL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase italic tracking-tight text-white leading-tight mb-6"
          >
            ENGINEERED FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c7c6c6] to-[#ffb4a8]">
              ZERO-DEFECT PRECISION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base sm:text-lg md:text-xl text-[#c7c6c6] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Every supercar entering our Indore studio follows a meticulous 6-phase engineering workflow. 
            From ultrasonic depth scanning to infrared quartz curing, no shortcuts are taken.
          </motion.p>
        </div>
      </section>

      {/* Interactive Phase Navigator & Step Spotlight */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        {/* Step Quick Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? "bg-primary-container text-white border-white/30 shadow-lg shadow-primary-container/30 scale-102"
                    : "bg-[#141414] text-[#c7c6c6] border-white/10 hover:border-white/20 hover:bg-[#1a1a1a]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-montserrat font-black text-xs ${
                      isSelected ? "text-white" : "text-[#ffb4a8]"
                    }`}
                  >
                    STAGE {step.number}
                  </span>
                  <Icon className="size-4 opacity-80" />
                </div>
                <div className="font-montserrat font-bold text-xs uppercase line-clamp-1">
                  {step.title.split(" ")[0]}
                </div>
                <div
                  className={`text-[10px] mt-1 ${
                    isSelected ? "text-white/80" : "text-[#8e8d8d]"
                  }`}
                >
                  {step.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <AnimatePresence mode="wait">
          {(() => {
            const current = processSteps[selectedStep];
            const Icon = current.icon;
            return (
              <motion.div
                key={current.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="p-8 sm:p-12 rounded-3xl bg-[#131313] border border-white/10 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-primary-container/20 text-[#ffb4a8] border border-primary-container/40 rounded-md text-xs font-montserrat font-black tracking-widest">
                        PHASE {current.number} OF 06
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#8e8d8d] font-inter">
                        <Clock className="size-3.5 text-[#ffb4a8]" />
                        <span>Est. Duration: {current.duration}</span>
                      </span>
                    </div>

                    <div>
                      <h2 className="font-montserrat text-2xl sm:text-4xl font-extrabold text-white uppercase italic tracking-tight mb-2">
                        {current.title}
                      </h2>
                      <p className="font-montserrat font-bold text-sm text-[#ffb4a8] uppercase tracking-wider">
                        {current.tagline}
                      </p>
                    </div>

                    <p className="font-inter text-sm sm:text-base text-[#c7c6c6] leading-relaxed">
                      {current.description}
                    </p>

                    {/* Inspection Checklist */}
                    <div>
                      <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-white mb-3">
                        Execution Checklist:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {current.checklist.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start space-x-2 text-xs text-[#c7c6c6] bg-[#1a1a1a] p-3 rounded-lg border border-white/5"
                          >
                            <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Equipment & Deliverables */}
                    <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="font-montserrat font-bold text-[#8e8d8d] uppercase tracking-wider block mb-1">
                          Tooling Used:
                        </span>
                        <p className="text-white font-medium">
                          {current.equipment.join(" • ")}
                        </p>
                      </div>
                      <div>
                        <span className="font-montserrat font-bold text-[#8e8d8d] uppercase tracking-wider block mb-1">
                          Phase Deliverable:
                        </span>
                        <p className="text-[#ffb4a8] font-medium">
                          {current.deliverable}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: High Quality Image & Spotlight */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                      <ImageWithSkeleton
                        src={current.image}
                        alt={current.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        wrapperClassName="absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <div className="flex items-center space-x-2 text-xs font-montserrat font-bold">
                          <Icon className="size-4 text-[#ffb4a8]" />
                          <span>{current.tagline}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#8e8d8d]">
                          ISO BAY INSPECTION
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </section>

      {/* 6 Step Full Vertical Timeline Breakdown */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-montserrat font-bold text-[#ffb4a8] uppercase tracking-widest mb-3">
            <Flame className="size-4" />
            <span>STEP-BY-STEP BREAKDOWN</span>
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase italic text-white tracking-tight">
            THE COMPLETE <span className="text-[#ffb4a8]">DEVIL TIMELINE</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#c7c6c6] mt-4">
            Total studio turnaround averages 36 to 48 hours of dedicated mastercraft.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-16">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-3.5 top-1 size-7 rounded-full bg-[#1c1c1c] border-2 border-primary-container flex items-center justify-center text-[#ffb4a8] text-xs font-black shadow-[0_0_12px_rgba(215,0,0,0.5)]">
                  {step.number}
                </div>

                <div className="p-8 rounded-2xl bg-[#141414] border border-white/10 hover:border-primary-container/40 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="size-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center text-[#ffb4a8] shrink-0">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-montserrat font-bold tracking-widest text-[#ffb4a8] uppercase block">
                          STAGE {step.number} • {step.tagline}
                        </span>
                        <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-white uppercase italic">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#8e8d8d] font-mono self-start">
                      <Clock className="size-3 text-[#ffb4a8]" />
                      <span>{step.duration}</span>
                    </span>
                  </div>

                  <p className="font-inter text-sm text-[#8e8d8d] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.checklist.slice(0, 2).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 text-xs text-[#c7c6c6]"
                      >
                        <Check className="size-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Studio Environmental Standards Banner */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#131313] border border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-montserrat font-bold text-[#ffb4a8] uppercase tracking-widest block mb-2">
              FACILITY BENCHMARKS
            </span>
            <h3 className="font-montserrat text-2xl sm:text-4xl font-extrabold uppercase italic text-white tracking-tight">
              THE 4 CLINICAL <span className="text-[#ffb4a8]">STANDARDS</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioStandards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#181818] border border-white/5 text-left"
                >
                  <div className="size-10 rounded-lg bg-[#222] flex items-center justify-center text-[#ffb4a8] mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="font-montserrat font-bold text-sm text-white mb-2">
                    {std.title}
                  </h4>
                  <p className="font-inter text-xs text-[#8e8d8d] leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="p-10 sm:p-16 rounded-3xl bg-linear-to-br from-[#1a1a1a] via-[#141414] to-[#0d0d0d] border border-primary-container/40 relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />

          <span className="px-3.5 py-1.5 rounded-full bg-primary-container/20 text-[#ffb4a8] border border-primary-container/40 text-[10px] font-montserrat font-bold uppercase tracking-widest mb-6">
            NIPANIYA, INDORE STUDIO
          </span>

          <h2 className="font-montserrat text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase italic text-white tracking-tight max-w-3xl mb-6">
            READY FOR THE <span className="text-[#ffb4a8]">DEVIL TRANSFORMATION?</span>
          </h2>

          <p className="font-inter text-sm sm:text-base text-[#c7c6c6] max-w-2xl mb-10 leading-relaxed">
            Reserve your vehicle's slot in our cleanroom bay. Complimentary digital paint diagnostics included with every package.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-primary-container hover:bg-[#b50000] text-white font-montserrat font-bold text-xs uppercase tracking-widest rounded shadow-xl shadow-primary-container/30 transition-all"
              >
                <span>RESERVE STUDIO BAY</span>
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/our-work"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-widest rounded backdrop-blur-md transition-all"
              >
                <span>SEE COMPLETED WORK</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
