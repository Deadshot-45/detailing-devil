import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import {
  CheckCircle2,
  Check,
  Search,
  Sparkles,
  Shield,
  Key,
  Wand2,
} from "lucide-react";

const coreServices = [
  {
    id: "ceramic-coating",
    title: "CERAMIC COATING",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8K38jS2Srb-tszi2iwVsgn0uRjuKiD5jn8wgJI6ZRLECaqbtWR8SbCyQTUp-DnDd47bpJru9xrkm9dnN4B_26RwmVgyf3KwVefVY2yCT0tNGR6wIwfotlPKu6Qtl2Bb12yQLNnXen3fhevUe7kosJF8S5vp6UiCq-4xN9j-eLhd_YJqNloXJBa47PiK-AYlVkyAhgSUD1jPpMMUXZ53YuHMpP6ZHXYzb5CIX6WrpDeJQL3fWdbucMCw",
    description:
      "Advanced nano-ceramic technology providing unparalleled gloss, hydrophobicity, and long-term protection against environmental contaminants.",
    features: ["9H Hardness Protection", "Extreme Gloss & Depth"],
    cta: "EXPLORE COATINGS",
  },
  {
    id: "ppf",
    title: "PAINT PROTECTION FILM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI11QK3g2A70j9nlcXH6Oj_765aY-eRNE3i6MJffkvWLlSC0vf3Wk2DZck4SCVGVJk_3PJMXMtOXNWY6fo7F23az39INQGOBIuNUW1jA8DdACif4Xs-JJc8aDQ2fN97tO6l7XhciWhxsv2TFb5bJk1uh7DIMGnZMf7zcNP8PJv_-wTdgungYJjj37vxySgZzHhXp19qXOXSZC8iUR2bafMJRr9KZ8hErkGRvG6X6y1SMWprFAMIlQU_A",
    description:
      "Self-healing, optically clear film designed to absorb impacts from rock chips and road debris, preserving your original factory finish.",
    features: ["Self-Healing Properties", "Impact Resistance"],
    cta: "EXPLORE PPF",
  },
  {
    id: "paint-correction",
    title: "PAINT CORRECTION",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_LbvPCNbhz9ciVb-Q8LdqayBXnOxyafsWtQ4SfdA8c-UKZSutqtTjowySgWVtbaYXPKN3SJpaCE5wzbscmsNWVMmNtaO9R4UWYdodvwRzrVWKNtr8Kv2Q11eJi-Vcv56xHlOsiQbpOXD6ZtSp5X-WboOeuMnLe08H-F_D2efi3i0iVMZOSGsXswvXFGOCuDcvtvPfRuTmzYAf_gy9iXXH2H1DdwgMbISYWnnkV9OQeJtVTlgA3EaAMw",
    description:
      "Multi-stage machine polishing to permanently remove swirl marks, scratches, and oxidation, restoring a mirror-like finish.",
    features: ["Swirl & Scratch Removal", "Restores Clarity"],
    cta: "EXPLORE CORRECTION",
  },
];

const packages = [
  {
    name: "ESSENTIAL DETAIL",
    description: "The foundational refresh for maintained vehicles.",
    borderTopColor: "border-t-[#353534]",
    features: [
      "Hand Wash & Decontamination",
      "Interior Vacuum & Wipe Down",
      "Spray Sealant Application",
    ],
    isPopular: false,
    ctaClass:
      "border border-[#c7c6c6] text-[#e5e2e1] hover:bg-white/10 transition-colors",
  },
  {
    name: "SIGNATURE DETAIL",
    description: "Comprehensive restoration inside and out.",
    borderTopColor: "border-t-[#d70000]",
    features: [
      "Everything in Essential",
      "1-Step Gloss Enhancement Polish",
      "Deep Interior Extraction",
      "Entry-Level Ceramic Coating",
    ],
    isPopular: true,
    ctaClass:
      "bg-gradient-to-br from-[#d70000] to-[#930000] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_20px_rgba(215,0,0,0.3)] hover:scale-105 transition-transform duration-300",
  },
  {
    name: "DEVIL PROTECTION",
    description: "The ultimate shield for showroom perfection.",
    borderTopColor: "border-t-[#c8c6c5]",
    features: [
      "Multi-Stage Paint Correction",
      "Pro-Grade 5-Year Ceramic Coating",
      "Wheels-Off Coating",
      "Interior Leather/Fabric Protection",
    ],
    isPopular: false,
    ctaClass:
      "border border-[#c7c6c6] text-[#e5e2e1] hover:bg-white/10 transition-colors",
  },
];

const processSteps = [
  {
    num: "01. INSPECT",
    desc: "Thorough evaluation of paint depth and condition under specialized lighting.",
    icon: Search,
  },
  {
    num: "02. PREPARE",
    desc: "Deep chemical and mechanical decontamination to strip previous waxes and embedded iron.",
    icon: Sparkles,
  },
  {
    num: "03. DETAIL",
    desc: "Precision machine polishing to permanently level the clear coat and remove defects.",
    icon: Wand2,
  },
  {
    num: "04. PROTECT",
    desc: "Application of chosen ceramic coating or PPF in a climate-controlled environment.",
    icon: Shield,
  },
  {
    num: "05. DELIVER",
    desc: "Final inspection, curing verification, and handover with maintenance instructions.",
    icon: Key,
  },
];

export const Services: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] antialiased overflow-x-hidden selection:bg-primary-container selection:text-white flex flex-col">
      {/* Hero Header Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-28 px-6 sm:px-12 md:px-20 max-w-360 mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0 min-h-0 md:min-h-screen w-full">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#131313] via-[#131313]/85 to-transparent pointer-events-none" />

        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded bg-surface-container-high text-[#c7c6c6] font-montserrat font-bold text-xs tracking-widest uppercase mb-6 border border-[#c7c6c6]/20">
            PREMIUM CARE
          </span>
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white mb-6 uppercase tracking-tight leading-[1.1]">
            ENGINEERED FOR PERFECTION
          </h1>
          <p className="font-inter text-base sm:text-lg text-[#c7c6c6] md:mb-10 max-w-xl leading-relaxed">
            Meticulous detailing services designed to restore, protect, and
            elevate your vehicle to an unmatched level of gloss and durability.
          </p>
        </div>
        <div className="w-full flex justify-end">
          <ImageWithSkeleton
            src={coreServices[1].image}
            alt={coreServices[1].title}
            className="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover"
            loading="lazy"
          />
        </div>
      </header>

      {/* Main Services Section */}
      <section className="px-6 sm:px-12 md:px-20 py-20 max-w-360 mx-auto w-full">
        <h2 className="font-montserrat text-3xl sm:text-4xl text-white font-extrabold mb-16 border-l-4 border-[#ffb4a8] pl-6 uppercase tracking-wide">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#1a1a1a]/70 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] group flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden relative">
                  <ImageWithSkeleton
                    alt={service.title}
                    src={service.image}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm text-[#c7c6c6] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="size-5 text-[#ffb4a8] shrink-0" />
                        <span className="font-inter text-sm text-white">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  to="/contact"
                  className="block w-full text-center py-3.5 rounded-lg border border-[#c7c6c6] font-montserrat font-bold text-xs tracking-widest uppercase text-white hover:bg-white/10 transition-colors"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-[#1c1b1b] py-24 px-6 sm:px-12 md:px-20 border-y border-white/5 w-full">
        <div className="max-w-360 mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-montserrat text-3xl sm:text-4xl text-white font-extrabold mb-4 uppercase tracking-tight">
              DETAILING PACKAGES
            </h2>
            <p className="font-inter text-base text-[#c7c6c6]">
              Curated levels of refinement to suit your vehicle's specific
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-[#1a1a1a]/80 backdrop-blur-xl rounded-xl p-8 sm:p-10 border-t-4 ${pkg.borderTopColor} border-x border-b border-white/10 flex flex-col justify-between shadow-2xl relative ${
                  pkg.isPopular
                    ? "md:-translate-y-3 border-t-primary-container"
                    : ""
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary-container text-white font-montserrat font-bold text-[10px] tracking-widest px-4 py-1 rounded uppercase shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-2 uppercase">
                    {pkg.name}
                  </h3>
                  <p className="font-inter text-sm text-[#c7c6c6] mb-8 min-h-10">
                    {pkg.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="size-4 text-[#ffb4a8] shrink-0 mt-0.5" />
                        <span className="font-inter text-sm text-[#e5e2e1]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-lg font-montserrat font-bold text-xs tracking-widest uppercase ${pkg.ctaClass}`}
                >
                  GET QUOTE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Stage Process Timeline Section */}
      <section className="py-24 px-6 sm:px-12 md:px-20 max-w-360 mx-auto overflow-hidden w-full">
        <h2 className="font-montserrat text-3xl sm:text-4xl text-white font-extrabold mb-16 text-center italic uppercase tracking-tight">
          THE PROCESS
        </h2>

        <div
          ref={timelineRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="relative w-full overflow-x-auto select-none pb-12 cursor-grab active:cursor-grabbing scrollbar-none"
        >
          <div className="flex min-w-max gap-8 px-4 relative">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-6 left-0 w-full h-px bg-white/10 -z-10" />

            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="w-64 flex flex-col items-center text-center group"
                >
                  <div className="size-12 rounded-full bg-surface-container-high border border-white/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary-container transition-colors duration-300">
                    <Icon className="size-5 text-white" />
                  </div>
                  <h4 className="font-montserrat font-bold text-sm text-white mb-2 tracking-wider uppercase">
                    {step.num}
                  </h4>
                  <p className="font-inter text-xs text-[#c7c6c6] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
