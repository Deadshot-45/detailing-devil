import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-[4px] px-2.5 py-1 text-xs font-semibold uppercase tracking-wider select-none transition-colors",
  {
    variants: {
      variant: {
        // Requested charcoal background with silver text
        default:
          "bg-[#201f1f] text-[#c7c6c6] border border-[#353534]",
        charcoal:
          "bg-[#201f1f] text-[#c7c6c6] border border-[#353534]",
        primary:
          "bg-[#690000]/40 text-[#ffb4a8] border border-[#d70000]/50",
        metallic:
          "bg-gradient-to-r from-[#d70000] to-[#93000a] text-white shadow-sm",
        silver:
          "bg-[#2a2a2a] text-[#ffffff] border border-[#c7c6c6]/40",
        outline:
          "border border-[#5e3f3a] text-[#e8bcb5] bg-transparent",
      },
      size: {
        default: "text-[11px] px-2.5 py-1",
        sm: "text-[10px] px-2 py-0.5",
        lg: "text-xs px-3 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
