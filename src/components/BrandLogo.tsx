import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/detailing-devils-logo.svg";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  compact = false,
  className,
}) => (
  <Link
    to="/"
    aria-label="Go to Detailing Devil home page"
    className={cn(
      "inline-flex items-center gap-3 bg-transparent hover:opacity-90 transition-opacity",
      className,
    )}
  >
    <img
      src={logoUrl}
      alt="Detailing Devil"
      className={cn(
        "block w-auto shrink-0 object-contain",
        compact ? "h-8" : "h-10",
      )}
    />
  </Link>
);

export default BrandLogo;
