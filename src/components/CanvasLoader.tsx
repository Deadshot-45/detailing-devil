import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CanvasLoaderProps {
  className?: string;
  text?: string;
  size?: "sm" | "md" | "lg";
}

export const CanvasLoader = ({
  className,
  text = "LOADING 3D SCENE",
  size = "md",
}: CanvasLoaderProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const coreSize = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <div
      className={cn(
        "w-full h-screen min-h-50 flex flex-col items-center justify-center pointer-events-none select-none",
        className
      )}
      aria-label="Loading interactive content"
    >
      <div className="relative flex items-center justify-center">
        {/* Ambient Red Glow */}
        <div className="absolute w-28 h-28 rounded-full bg-primary-container/20 blur-2xl animate-pulse" />

        {/* Outer Subtle Orbit Ring */}
        <div
          className={cn(
            "rounded-full border border-white/10",
            sizeClasses[size]
          )}
        />

        {/* Primary High-Speed Outer Arc */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className={cn(
            "absolute rounded-full border-2 border-transparent border-t-primary-container border-r-primary-container/60 shadow-[0_0_15px_rgba(215,0,0,0.5)]",
            sizeClasses[size]
          )}
        />

        {/* Counter-Rotating Inner Subtle Arc */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className={cn(
            "absolute rounded-full border border-transparent border-b-surface-tint border-l-white/40",
            size === "lg" ? "w-16 h-16" : size === "md" ? "w-10 h-10" : "w-6 h-6"
          )}
        />

        {/* Center Glowing Core */}
        <motion.div
          animate={{
            scale: [0.85, 1.2, 0.85],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className={cn(
            "absolute rounded-full bg-primary-container shadow-[0_0_12px_rgba(215,0,0,0.9)]",
            coreSize[size]
          )}
        />
      </div>

      {text && (
        <div className="mt-5 flex items-center space-x-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A0A0A0]">
            {text}
          </span>
        </div>
      )}
    </div>
  );
};

export default CanvasLoader;
