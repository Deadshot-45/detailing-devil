import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "service-card group flex flex-col justify-between text-[#e5e2e1]",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string
  badgeText?: string
}

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, src, alt, badgeText, ...props }, ref) => (
    <div ref={ref} className="card-media-wrapper w-full h-56 bg-[#0e0e0e] overflow-hidden relative">
      {src && (
        <img
          src={src}
          alt={alt || "Service preview"}
          className={cn(
            "card-media w-full h-full object-cover object-center",
            className
          )}
          {...props}
        />
      )}
      {/* Subtle bottom shadow vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-black/20 pointer-events-none" />
      {badgeText && (
        <div className="absolute top-4 left-4 z-10">
          <span className="badge-charcoal bg-[#131313]/90 backdrop-blur-md border-[#353534] text-[#c7c6c6] text-[10px] font-bold px-2.5 py-1">
            {badgeText}
          </span>
        </div>
      )}
    </div>
  )
)
CardImage.displayName = "CardImage"

// Internal 24px padding for content (p-6 = 24px)
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 flex flex-col gap-4 flex-1 text-left", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-headline-md text-xl md:text-2xl font-bold tracking-tight text-[#e5e2e1] group-hover:text-white transition-colors",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-body-md text-sm text-[#c7c6c6] leading-relaxed", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-6 pb-6 pt-0 flex items-center justify-between mt-auto", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

/**
 * ServiceChecklist: Checklist using Primary Red checkmarks for a "premium feature" feel
 */
interface ServiceChecklistProps extends React.HTMLAttributes<HTMLUListElement> {
  items: string[]
}

const ServiceChecklist = React.forwardRef<HTMLUListElement, ServiceChecklistProps>(
  ({ items, className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-col gap-2.5 my-2", className)} {...props}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2.5 text-sm text-[#e5e2e1]">
          <div className="size-4 rounded-full bg-[#690000]/40 border border-[#d70000]/60 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(215,0,0,0.3)]">
            <Check className="size-3 text-[#ffb4a8] stroke-[3]" />
          </div>
          <span className="font-body-md text-xs md:text-sm text-[#c7c6c6]">{item}</span>
        </li>
      ))}
    </ul>
  )
)
ServiceChecklist.displayName = "ServiceChecklist"

export {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  ServiceChecklist,
}
