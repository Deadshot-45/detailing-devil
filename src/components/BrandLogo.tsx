import React from "react";
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
  <span className={cn("inline-flex items-center gap-3", className)}>
    <img
      src={logoUrl}
      alt="Detailing Devil"
      className={cn(
        "h-auto w-auto max-w-full",
        compact ? "max-h-8" : "max-h-10",
      )}
    />
  </span>
);

export default BrandLogo;
