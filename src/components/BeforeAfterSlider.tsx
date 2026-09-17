import React, { useState, useRef, useCallback } from "react";
import { Sparkles, AlertCircle } from "lucide-react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  vehicleTitle?: string;
  serviceTag?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE: HEAVY SWIRLS & OXIDATION",
  afterLabel = "AFTER: 3-STAGE OPTICAL CORRECTION",
  vehicleTitle = "Ferrari 488 Pista",
  serviceTag = "STAGE 3 PAINT CORRECTION",
  className = "",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={`relative rounded-xl overflow-hidden select-none ${className}`}>
      {/* Top Details Bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#131313]/90 border-b border-[#201f1f] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d70000] animate-pulse" />
          <span className="font-montserrat font-bold text-white tracking-wider uppercase">
            {vehicleTitle}
          </span>
          <span className="text-[#5e3f3a]">•</span>
          <span className="font-label-caps text-[#ffb4a8]">{serviceTag}</span>
        </div>
        <span className="text-[#8e8d8d] hidden sm:inline text-[11px] font-sans">
          Drag slider or use arrow keys to inspect
        </span>
      </div>

      {/* Interactive Slider Area */}
      <div
        ref={containerRef}
        tabIndex={0}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuenow={sliderPosition}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative h-[420px] sm:h-[500px] lg:h-[580px] w-full cursor-ew-resize overflow-hidden bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d70000]"
      >
        {/* AFTER Image (Base Layer) */}
        <div className="absolute inset-0 w-full h-full">
          <ImageWithSkeleton
            src={afterImage}
            alt={afterLabel}
            className="w-full h-full object-cover pointer-events-none"
            wrapperClassName="absolute inset-0"
          />
          {/* After Tag */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#131313]/85 backdrop-blur-md border border-[#d70000]/40 text-[#ffb4a8] font-label-caps text-[10px] tracking-widest shadow-lg">
            <Sparkles className="size-3 text-[#ffb4a8]" />
            {afterLabel}
          </div>
        </div>

        {/* BEFORE Image (Clipped with clipPath) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <ImageWithSkeleton
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
            wrapperClassName="absolute inset-0"
          />
          {/* Before Tag */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#131313]/85 backdrop-blur-md border border-[#5e3f3a] text-[#c7c6c6] font-label-caps text-[10px] tracking-widest shadow-lg">
            <AlertCircle className="size-3 text-[#ffb4ab]" />
            {beforeLabel}
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ffb4a8] via-[#d70000] to-[#ffb4a8] shadow-[0_0_12px_rgba(215,0,0,0.8)] z-30 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Center Circular Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-[#131313] border-2 border-[#d70000] shadow-[0_0_20px_rgba(215,0,0,0.6)] flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110">
            <div className="flex items-center gap-1 text-[#ffb4a8] text-[10px] font-mono tracking-tighter">
              <span>◀</span>
              <span>▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
