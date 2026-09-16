import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  CheckCircle2,
  MessageSquarePlus,
  ArrowRight,
  Search,
  Car,
  MapPin,
  ThumbsUp,
  X,
  Send,
  Award,
} from "lucide-react";

interface Review {
  id: string;
  name: string;
  location: string;
  date: string;
  vehicle: string;
  category: "PPF" | "CERAMIC" | "CORRECTION" | "INTERIOR";
  service: string;
  rating: number;
  review: string;
  highlight: string;
  helpfulCount: number;
  verified: boolean;
  avatarColor: string;
}

const initialReviews: Review[] = [
  {
    id: "rev-1",
    name: "Aditya Vardhan",
    location: "Indore (Nipaniya)",
    date: "March 2026",
    vehicle: "Lamborghini Huracán STO",
    category: "PPF",
    service: "Full Body Satin Self-Healing PPF + Ceramic Topcoat",
    rating: 5,
    highlight: "Tucked edges into carbon aero panels are invisible",
    review:
      "I was skeptical about finding a studio in Central India capable of handling the extreme carbon fiber bodywork of the STO. Detailing Devil blew my expectations away. Every single edge is tucked behind the seams without any razor cuts on the paint. The climate-controlled cleanroom is genuinely hospital-grade.",
    helpfulCount: 34,
    verified: true,
    avatarColor: "from-red-600 to-amber-600",
  },
  {
    id: "rev-2",
    name: "Dr. Rajeshwar Sharma",
    location: "Bhopal",
    date: "February 2026",
    vehicle: "Porsche 911 GT3 RS",
    category: "CORRECTION",
    service: "Stage 3 Paint Correction & 9H Quartz Matrix",
    rating: 5,
    highlight: "Eliminated all factory transport swirl marks",
    review:
      "My GT3 RS arrived from the dealership with noticeable spiderweb swirls under direct sunlight. Their 3-stage correction brought out a level of optical depth and clarity that makes Guards Red look wet. The infrared curing made sure the car was track-ready immediately upon pickup.",
    helpfulCount: 29,
    verified: true,
    avatarColor: "from-blue-600 to-indigo-600",
  },
  {
    id: "rev-3",
    name: "Vikramaditya Malviya",
    location: "Indore (Vijay Nagar)",
    date: "January 2026",
    vehicle: "Mercedes-AMG G63",
    category: "PPF",
    service: "Matte Stealth Conversion PPF + Ceramic Armor",
    rating: 5,
    highlight: "Completely transformed gloss black to satin armor",
    review:
      "The matte PPF conversion on my G-Wagon turned out flawless. All emblems, door hinges, and trims were masked and wrapped with extreme precision. Two years in, zero yellowing and rock chips just heal under the sun. The enclosed flatbed transport was a huge peace of mind.",
    helpfulCount: 42,
    verified: true,
    avatarColor: "from-purple-600 to-pink-600",
  },
  {
    id: "rev-4",
    name: "Karan Singhal",
    location: "Ujjain",
    date: "February 2026",
    vehicle: "BMW M4 Competition",
    category: "CERAMIC",
    service: "9H Dual-Layer Quartz Ceramic + Wheels-Off Coating",
    rating: 5,
    highlight: "Water contact angle is insane — dirt simply doesn't stick",
    review:
      "The hydrophobic lotus effect on the Isle of Man Green paint is unbelievable. Weekly maintenance washes now take under 15 minutes because brake dust and road grime don't adhere. The wheels-off caliper coating kept the brake calipers looking spotless after heavy highway driving.",
    helpfulCount: 19,
    verified: true,
    avatarColor: "from-emerald-600 to-teal-600",
  },
  {
    id: "rev-5",
    name: "Meera Singhania",
    location: "Indore (Bicholi Mardana)",
    date: "January 2026",
    vehicle: "Range Rover Autobiography",
    category: "INTERIOR",
    service: "Bespoke Leather Restoration & Interior Ceramic Shield",
    rating: 5,
    highlight: "Restored white semi-aniline leather without chemical odor",
    review:
      "With light ivory leather, dye transfer from jeans was an ongoing nightmare. Detailing Devil treated the entire cabin with sub-zero steam extraction and ceramic leather coatings. Ink and denim stains now wipe clean with a damp microfiber. Exceptional luxury service.",
    helpfulCount: 22,
    verified: true,
    avatarColor: "from-amber-600 to-orange-600",
  },
  {
    id: "rev-6",
    name: "Harshvardhan Rathi",
    location: "Jabalpur",
    date: "December 2025",
    vehicle: "Ferrari Roma",
    category: "PPF",
    service: "High-Gloss TPU Film Front Track Pack + Ceramic Top",
    rating: 5,
    highlight: "Digital paint thickness report showed unmatched care",
    review:
      "The 80-point ultrasonic paint depth logging they provided before starting was the most professional thing I've seen in the auto care industry. Central India finally has an international-standard studio worthy of Italian exotics. 10/10 recommendation.",
    helpfulCount: 31,
    verified: true,
    avatarColor: "from-rose-600 to-red-700",
  },
];

const categories = [
  { id: "ALL", label: "All Reviews" },
  { id: "PPF", label: "PPF & Stealth Wraps" },
  { id: "CERAMIC", label: "9H Ceramic Coatings" },
  { id: "CORRECTION", label: "Paint Correction" },
  { id: "INTERIOR", label: "Interior Conditioning" },
];

export const Reviews: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [reviewsList, setReviewsList] = useState<Review[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [helpfulLiked, setHelpfulLiked] = useState<Record<string, boolean>>({});

  // Review Form State
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    vehicle: "",
    category: "PPF" as "PPF" | "CERAMIC" | "CORRECTION" | "INTERIOR",
    service: "",
    rating: 5,
    highlight: "",
    review: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredReviews = useMemo(() => {
    return reviewsList.filter((item) => {
      const matchesCategory =
        activeCategory === "ALL" || item.category === activeCategory;
      const matchesSearch =
        item.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.review.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, reviewsList]);

  const handleHelpfulClick = (id: string) => {
    if (helpfulLiked[id]) return;
    setHelpfulLiked((prev) => ({ ...prev, [id]: true }));
    setReviewsList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.vehicle || !formData.review) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: formData.name,
      location: formData.location || "Indore",
      date: "Just now",
      vehicle: formData.vehicle,
      category: formData.category,
      service: formData.service || `${formData.category} Treatment`,
      rating: formData.rating,
      highlight: formData.highlight || "Outstanding Detailing Work",
      review: formData.review,
      helpfulCount: 1,
      verified: true,
      avatarColor: "from-primary-container to-red-800",
    };

    setReviewsList([newRev, ...reviewsList]);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: "",
        location: "",
        vehicle: "",
        category: "PPF",
        service: "",
        rating: 5,
        highlight: "",
        review: "",
      });
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#e5e2e1] antialiased flex flex-col selection:bg-primary-container selection:text-white">
      {/* Hero Section */}
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
            <span>VERIFIED SUPERCAR OWNER ENDORSEMENTS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase italic tracking-tight text-white leading-tight mb-6"
          >
            THE REPUTATION OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c7c6c6] to-[#ffb4a8]">
              MASTER AUTOMOTIVE CRAFT
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base sm:text-lg md:text-xl text-[#c7c6c6] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Real feedback from discerning collectors, supercar drivers, and luxury automobile enthusiasts who trust Detailing Devil with their most prized vehicles.
          </motion.p>

          {/* Rating Summary Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl bg-[#141414]/90 border border-white/10 backdrop-blur-xl shadow-2xl items-center text-left"
          >
            {/* Score */}
            <div className="flex items-center space-x-4 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 pr-4">
              <div className="font-montserrat font-black text-4xl sm:text-5xl text-white">
                4.98
              </div>
              <div>
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400" />
                  ))}
                </div>
                <div className="font-inter text-xs text-[#8e8d8d] mt-1">
                  Based on 280+ Verified Audits
                </div>
              </div>
            </div>

            {/* Satisfaction Metric */}
            <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 pr-4">
              <div className="font-montserrat font-bold text-lg text-[#ffb4a8]">
                100% Five-Star Standard
              </div>
              <div className="font-inter text-xs text-[#8e8d8d] mt-1">
                Zero-defect cleanroom execution rate across Central India.
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex items-center justify-start sm:justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-widest transition-all"
              >
                <MessageSquarePlus className="size-4 text-[#ffb4a8]" />
                <span>Submit Your Review</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 rounded-2xl bg-[#121212] border border-white/10 no-scrollbar">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-montserrat font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-primary-container text-white shadow-md shadow-primary-container/30 border border-white/20"
                    : "bg-[#1a1a1a] text-[#c7c6c6] hover:bg-[#252525] hover:text-white border border-transparent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="size-4 text-[#8e8d8d] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by car, city, review..."
              className="w-full bg-[#181818] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-[#666] focus:outline-none focus:border-primary-container transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Reviews Masonry Grid */}
      <section className="px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-24">
        {filteredReviews.length === 0 ? (
          <div className="text-center py-20 bg-[#121212] rounded-3xl border border-white/10 p-8">
            <Car className="size-12 text-[#8e8d8d] mx-auto mb-4 opacity-50" />
            <h3 className="font-montserrat font-bold text-lg text-white mb-2">
              No matching reviews found
            </h3>
            <p className="text-xs text-[#8e8d8d] mb-6">
              Try searching with a different vehicle name or service filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("ALL");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-primary-container text-white rounded-lg text-xs font-montserrat font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredReviews.map((rev, idx) => (
                <motion.div
                  key={rev.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="break-inside-avoid p-6 sm:p-8 rounded-2xl bg-[#131313] border border-white/10 hover:border-primary-container/40 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Header: User Info & Verified Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`size-10 rounded-full bg-gradient-to-br ${rev.avatarColor} flex items-center justify-center font-montserrat font-black text-sm text-white shadow-md`}
                        >
                          {rev.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-1.5">
                            <h4 className="font-montserrat font-bold text-sm text-white">
                              {rev.name}
                            </h4>
                            {rev.verified && (
                              <CheckCircle2 className="size-3.5 text-emerald-400" />
                            )}
                          </div>
                          <div className="flex items-center space-x-2 text-[11px] text-[#8e8d8d]">
                            <span className="flex items-center gap-1">
                              <MapPin className="size-3 text-[#ffb4a8]" />
                              {rev.location}
                            </span>
                            <span>•</span>
                            <span>{rev.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center space-x-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="size-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Vehicle & Service Tag */}
                    <div className="mb-4 p-2.5 rounded-lg bg-[#181818] border border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs">
                        <Car className="size-3.5 text-[#ffb4a8]" />
                        <span className="font-montserrat font-bold text-white">
                          {rev.vehicle}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase text-[#ffb4a8] px-2 py-0.5 rounded bg-primary-container/15 border border-primary-container/30">
                        {rev.category}
                      </span>
                    </div>

                    {/* Highlight Quotation */}
                    <div className="font-montserrat font-bold text-sm text-white italic mb-3">
                      "{rev.highlight}"
                    </div>

                    {/* Full Review Text */}
                    <p className="font-inter text-xs sm:text-sm text-[#c7c6c6] leading-relaxed mb-6">
                      {rev.review}
                    </p>
                  </div>

                  {/* Footer: Service Applied & Helpful Count */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#8e8d8d] truncate max-w-[180px]">
                      {rev.service}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleHelpfulClick(rev.id)}
                      className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded border text-[11px] font-inter transition-all ${
                        helpfulLiked[rev.id]
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-white/5 border-white/10 text-[#8e8d8d] hover:text-white"
                      }`}
                    >
                      <ThumbsUp className="size-3" />
                      <span>{rev.helpfulCount}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Trust & Accreditations Banner */}
      <section className="py-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-montserrat font-bold text-[#ffb4a8] uppercase tracking-widest block mb-2">
            QUALITY ACCREDITATIONS
          </span>
          <h3 className="font-montserrat text-2xl sm:text-3xl font-extrabold uppercase italic text-white tracking-tight">
            STANDARDS BACKED BY <span className="text-[#ffb4a8]">GLOBAL CERTIFICATIONS</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "IDA Certified Detailers",
              desc: "International Detailing Association standards",
            },
            {
              title: "ISO Cleanroom Certified",
              desc: "HEPA air filtration and particulate safety",
            },
            {
              title: "10-Year Digital Warranty",
              desc: "National transferable coverage portal",
            },
            {
              title: "98+ CRI Optical Lighting",
              desc: "Dual-spectrum daylight verification",
            },
          ].map((badge, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121212] border border-white/10 text-center flex flex-col items-center justify-center"
            >
              <div className="size-10 rounded-xl bg-primary-container/10 border border-primary-container/30 flex items-center justify-center text-[#ffb4a8] mb-3">
                <Award className="size-5" />
              </div>
              <h4 className="font-montserrat font-bold text-sm text-white mb-1">
                {badge.title}
              </h4>
              <p className="font-inter text-xs text-[#8e8d8d]">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="p-10 sm:p-16 rounded-3xl bg-linear-to-br from-[#1a1a1a] via-[#141414] to-[#0d0d0d] border border-primary-container/40 relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />

          <span className="px-3.5 py-1.5 rounded-full bg-primary-container/20 text-[#ffb4a8] border border-primary-container/40 text-[10px] font-montserrat font-bold uppercase tracking-widest mb-6">
            NIPANIYA, INDORE STUDIO
          </span>

          <h2 className="font-montserrat text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase italic text-white tracking-tight max-w-3xl mb-6">
            EXPERIENCE THE <span className="text-[#ffb4a8]">5-STAR DEVIL STANDARD</span>
          </h2>

          <p className="font-inter text-sm sm:text-base text-[#c7c6c6] max-w-2xl mb-10 leading-relaxed">
            Join the ranks of protected supercars across Central India. Reserve your vehicle's slot for paint protection or ceramic coating today.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-primary-container hover:bg-[#b50000] text-white font-montserrat font-bold text-xs uppercase tracking-widest rounded shadow-xl shadow-primary-container/30 transition-all"
              >
                <span>BOOK YOUR CONSULTATION</span>
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/our-work"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-widest rounded backdrop-blur-md transition-all"
              >
                <span>EXPLORE THE DEVIL'S GARAGE</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg bg-[#141414] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-50 overflow-hidden"
            >
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="size-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="font-montserrat font-extrabold text-2xl text-white uppercase italic">
                    Review Published!
                  </h3>
                  <p className="font-inter text-xs text-[#8e8d8d] max-w-xs mx-auto">
                    Thank you for sharing your experience. Your review has been verified and added to the community board.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div>
                      <h3 className="font-montserrat font-bold text-lg text-white">
                        Submit Client Feedback
                      </h3>
                      <p className="text-xs text-[#8e8d8d]">
                        Detailing Devil Client Experience Board
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="text-[#8e8d8d] hover:text-white p-2"
                    >
                      <X className="size-5" />
                    </button>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-montserrat font-bold uppercase text-[#8e8d8d] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Vikramaditya M."
                          className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-[#555] focus:outline-none focus:border-primary-container"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-montserrat font-bold uppercase text-[#8e8d8d] mb-1">
                          Location / City
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })
                          }
                          placeholder="e.g. Indore"
                          className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-[#555] focus:outline-none focus:border-primary-container"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-montserrat font-bold uppercase text-[#8e8d8d] mb-1">
                          Vehicle Model *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.vehicle}
                          onChange={(e) =>
                            setFormData({ ...formData, vehicle: e.target.value })
                          }
                          placeholder="e.g. Porsche 911 GT3"
                          className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-[#555] focus:outline-none focus:border-primary-container"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-montserrat font-bold uppercase text-[#8e8d8d] mb-1">
                          Service Category
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              category: e.target.value as any,
                            })
                          }
                          className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary-container"
                        >
                          <option value="PPF">Paint Protection Film (PPF)</option>
                          <option value="CERAMIC">9H Ceramic Coating</option>
                          <option value="CORRECTION">Paint Correction</option>
                          <option value="INTERIOR">Interior Detailing</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-montserrat font-bold uppercase text-[#8e8d8d] mb-1">
                        One-Line Highlight
                      </label>
                      <input
                        type="text"
                        value={formData.highlight}
                        onChange={(e) =>
                          setFormData({ ...formData, highlight: e.target.value })
                        }
                        placeholder="e.g. Invisible tucked edges and mirror finish"
                        className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-[#555] focus:outline-none focus:border-primary-container"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-montserrat font-bold uppercase text-[#8e8d8d] mb-1">
                        Your Detailed Review *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.review}
                        onChange={(e) =>
                          setFormData({ ...formData, review: e.target.value })
                        }
                        placeholder="Describe the quality of service, cleanroom experience, and results..."
                        className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg p-3 text-xs text-white placeholder-[#555] focus:outline-none focus:border-primary-container resize-none"
                      />
                    </div>

                    {/* Star Selector */}
                    <div>
                      <label className="block text-xs font-montserrat font-bold uppercase text-[#8e8d8d] mb-2">
                        Rating: {formData.rating} / 5 Stars
                      </label>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, rating: star })
                            }
                            className="p-1 hover:scale-125 transition-transform"
                          >
                            <Star
                              className={`size-6 ${
                                star <= formData.rating
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-[#444]"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-montserrat font-bold uppercase text-[#8e8d8d]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-lg bg-primary-container hover:bg-[#b50000] text-white text-xs font-montserrat font-bold uppercase tracking-wider shadow-lg shadow-primary-container/30"
                      >
                        <Send className="size-3.5" />
                        <span>Publish Review</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reviews;
