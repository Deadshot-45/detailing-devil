import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  compact = false,
  className,
}) => (
  <span className={cn("inline-flex items-center gap-3", className)}>
    <img
      src="/detailing-devils-logo.svg"
      alt="Detailing Devil"
      className={compact ? "size-9" : "size-10"}
    />
    {!compact && (
      <span className="font-montserrat font-extrabold text-base tracking-wider text-white">
        DETAILING <span className="text-[#ffb4a8]">DEVIL</span>
      </span>
    )}
  </span>
);

export default BrandLogo;
