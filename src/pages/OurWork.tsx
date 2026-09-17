import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

const portfolioItems = [
  {
    id: "lambo-sto",
    title: "Lamborghini Huracán STO",
    tag: "CERAMIC COATING",
    desc: "Multi-stage correction & 9H Ceramic",
    aspect: "aspect-4/5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUAnH00sbCDFQMi2KUtM-UKVZ_c53WhxyKL4Mdo9KBijWPaV-jS9Vymtp8beowxaH5uZni07y5LgJstusvcWa5RvpWAyHgc4_QoVrMf-8HaQgrhZp4sTDEdNa7ojE-j_EYkrAeHRcdUqxwbx3tpqQo1q65WweMXutqojR0jfuuTO6nrdPE8yiefu7C5USfUPhAKONBkwHSSJwbw6tN_gzBM-WtO_W8IdeyWlpQbOH2eS5ls2P0P3muqw",
    category: "CERAMIC",
  },
  {
    id: "porsche-singer",
    title: "Porsche 911 Singer",
    tag: "FULL RESTORATION",
    desc: "Dry ice blasting & full paint revival",
    aspect: "aspect-video",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdoPVtacIR-mgSvBYaiQ0spm2ZCenu0b62R6zbCioXu3WHET5nflkb4f9FuS3mdsTKc8PnjWGR7eF4yX0f9PL6U2HumHHlHuZ8dfxs0_Mo45PacnTR9ZEvbnBhD4Tfwkzu17X9gZQTybfhWPsUjtoJXMSqcYp0ONu62xDLxty4inXBL5bya7NwCVNGeGEE0p6kjNlVdfYHeiJ4nTDU7FLCz1_F5geCUrAp14qHaxguRd4Btmb3TTL9WA",
    category: "RESTORATION",
  },
  {
    id: "bmw-m4",
    title: "BMW M4 Competition",
    tag: "HYDROPHOBIC",
    desc: "Ultimate hydrophobic protection",
    aspect: "aspect-3/4",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzAEAvutVGiiqXHIhXVJJW0BgrwSUt7fFOYEaMeOvnKMyX7K_gz0Ys1-q1jhk7SzdhcMbuaxLGyXRyQ3g0Pf0ADEav7QtjNW0BLr6siOaz3P7C4wi9FsCurodvy_zwQ33u5UQqGDuKgHLLH2zMczX-144XmSgTYJXBRpEpCw_SY3IzS8aTyosDj1ggHyMy5CnYNkVmUtS2gBvuTbwMnO0bQaPAGDu2u0151uNz7-m2C5lWEDekRncU4g",
    category: "CERAMIC",
  },
  {
    id: "amg-gt",
    title: "Mercedes AMG GT",
    tag: "STEALTH PPF",
    desc: "Full body matte conversion film",
    aspect: "aspect-square",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhCQYVXllfsheXkqXwZnXSIfr_4OahhbHrbWnaEbCvZVRq5nawBGkkSVqwlJQkfkUXAewpnVkyuOf74ZPW-lTZ9hSBFFgKcB3pTD_WfNgRsWm1iKq0ZB9JWthStNxg-CCac8VFSBYeqj-kGR907zSnst6Y_VdvlJwhIhiPhdv4TCGuCKstZU2sjKtWDrcuRPFsjz6ZSFYl24AQYaLshmf9b6c4ytMu4w1kmIZ6K4uvBB8xzhTT53v8A",
    category: "PPF",
  },
  {
    id: "ferrari-roma",
    title: "Ferrari Roma",
    tag: "INTERIOR DETAIL",
    desc: "Leather conditioning & sterilization",
    aspect: "aspect-4/3",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxApidNe5CdfD9DvJ4eVIVKgNfvjPyuAqg-zJPdWw-qC8STG2jHQpmgwagggN8Xui2rX_e2JTmmHIwYUSzLiu4GVqHKqCy0LZZoZufLQ81Mm0bp1gus0MMrP0afGWJ7Spq43TjGSEwBHbevHhKQYCGLaM0EIxbHN3HBt_HCq3jy-1OiasI_G-nzmxJ3WJ7Ob7BEGhfqTw6EOsHJ5BLYroZK2RH3t52csGQWETtlgJvSQGb9AewG5t-MA",
    category: "INTERIOR",
  },
];

const heroTitle = `THE DEVIL'S GARAGE`
const heroTitleTwo = `Where raw performance meets flawless execution. A curated showcase of automotive perfection, engineered through meticulous detailing, paint correction, and protection.`
const heroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuAdoPVtacIR-mgSvBYaiQ0spm2ZCenu0b62R6zbCioXu3WHET5nflkb4f9FuS3mdsTKc8PnjWGR7eF4yX0f9PL6U2HumHHlHuZ8dfxs0_Mo45PacnTR9ZEvbnBhD4Tfwkzu17X9gZQTybfhWPsUjtoJXMSqcYp0ONu62xDLxty4inXBL5bya7NwCVNGeGEE0p6kjNlVdfYHeiJ4nTDU7FLCz1_F5geCUrAp14qHaxguRd4Btmb3TTL9WA"

export const OurWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [sliderPercent, setSliderPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    setSliderPercent((x / rect.width) * 100);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    },
    [isDragging, updateSlider],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      updateSlider(e.touches[0].clientX);
    },
    [isDragging, updateSlider],
  );

  const filteredItems =
    activeFilter === "ALL"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category === activeFilter || item.tag.includes(activeFilter),
        );

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] antialiased flex flex-col selection:bg-[#ffb4a8]/30 selection:text-[#ffb4a8] overflow-x-hidden">
      <main className="grow pb-24">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-screen px-6 sm:px-12 md:px-20 pt-32 pb-20 md:pt-0 md:pb-0 gap-8 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="font-montserrat text-5xl sm:text-7xl md:text-[96px] text-white uppercase italic font-extrabold mb-6 tracking-tight leading-[1.05]">
              THE DEVIL&apos;S <br />
              <span className="text-[#ffb4a8]">GARAGE</span>
            </h1>
            <p className="font-inter text-base sm:text-lg md:text-xl text-[#c7c6c6] max-w-xl leading-relaxed">
              {heroTitleTwo}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <ImageWithSkeleton
              src={heroImg}
              alt={heroTitle}
              className="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* Before/After Slider Section */}
        <section className="px-6 sm:px-12 md:px-20 max-w-360 mx-auto mb-20 md:mb-28">
          <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl text-white uppercase italic font-extrabold tracking-tight">
                SEE THE <span className="text-outline">DIFFERENCE</span>
              </h2>
              <p className="font-inter text-sm text-[#c7c6c6] mt-2">
                Drag the slider to reveal the impact of our Stage 3 Paint
                Correction.
              </p>
            </div>
          </div>

          <div
            ref={sliderRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full h-95 sm:h-120 md:h-[60vh] overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]/70 backdrop-blur-xl shadow-2xl cursor-ew-resize select-none"
          >
            {/* After Image (Background) */}
            <ImageWithSkeleton
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcAcQojd19m3tRH7q4uCm_dg3oU_wuNTCBiu4TcQ8TEVpOS-n1-AscDXYO5Nwu75hKZBDO2Z7Edr-nRB9SQJ8-mAiJHct8mfkdwhqnsFYXyKjOyAfNloF8rtRvzI9fch92Hx10gaWFuTxMBnDwDenjVJe02ZRyGfSuS7yDm6PLrt1osXkjqoWlbolti_AMAdFcCWRaXc3I6o9w47PFi2W1M9Z1FHUoNTkXN7O0gCPv5chb_YastYj3YA"
              alt="After paint correction"
              className="absolute inset-0 w-full h-full object-cover object-center"
              wrapperClassName="absolute inset-0"
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPercent}% 0 0)`,
              }}
            >
              <ImageWithSkeleton
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnUf_fm3ZbSYjgwaV25vs7NB4smO5plSU1W-W0hqRRKwOFi5p3RMvbMQcyLCsxAlcpmAYP_WWQ8F35ybaHIHBRH5mkrw2i2oDhwqUUnQIERGm02MnBkV-hML7P-wDJdqKUEe2QwisQYMJRRATKVjMQyoxXwSSHF9smyEo27eneO08rXzhgXzSH5Bpu4wDCBGD8bFHedmJUtWJ-I1BdYlOOKK13THueawxEQmBTLCdGD70rZblbT9UTNg"
                alt="Before paint correction"
                className="absolute inset-0 w-full h-full object-cover object-center"
                wrapperClassName="absolute inset-0"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#ffb4a8] z-20 pointer-events-none -translate-x-1/2"
              style={{ left: `${sliderPercent}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#353534] border-2 border-[#ffb4a8] rounded-full flex items-center justify-center text-[#ffb4a8] font-bold text-sm shadow-xl">
                ↔
              </div>
            </div>
          </div>
        </section>

        {/* Masonry Gallery Section */}
        <section className="px-6 sm:px-12 md:px-20 max-w-360 mx-auto">
          <div className="flex gap-4 flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="font-montserrat text-2xl md:text-4xl text-white uppercase italic font-extrabold tracking-tight">
              LATEST <span className="text-[#ffb4a8]">PROJECTS</span>
            </h2>
            <div className="flex gap-3">
              {["ALL", "PPF", "CERAMIC"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded text-xs font-montserrat font-bold tracking-wider uppercase transition-all duration-200 ${
                    activeFilter === filter
                      ? "border border-white/20 text-white bg-surface-container-high shadow-md"
                      : "border border-transparent text-[#c7c6c6] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-6 rounded-xl border border-white/10 bg-[#1c1b1b] overflow-hidden shadow-xl group transition-transform duration-500 hover:shadow-2xl"
              >
                <div className="overflow-hidden relative">
                  <ImageWithSkeleton
                    alt={item.title}
                    src={item.image}
                    className={`w-full h-auto object-cover rounded-t-xl ${item.aspect} transition-transform duration-700 ease-out group-hover:scale-105`}
                    loading="lazy"
                  />
                </div>
                <div className="p-6 bg-[#1a1a1a]">
                  <span className="inline-block px-2.5 py-1 bg-[#353534] text-[#c7c6c6] rounded text-[10px] font-montserrat font-bold tracking-widest mb-3 uppercase">
                    {item.tag}
                  </span>
                  <h3 className="font-montserrat text-2xl font-semibold text-white leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-[#c7c6c6]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 border border-white/20 text-white rounded-lg font-montserrat font-bold text-xs tracking-widest uppercase hover:bg-surface-container hover:border-[#ffb4a8] transition-all duration-300"
            >
              LOAD MORE PROJECTS
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurWork;
