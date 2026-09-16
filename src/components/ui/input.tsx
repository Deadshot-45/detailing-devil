import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, error, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined)

    const inputElement = (
      <input
        type={type}
        id={inputId}
        className={cn(
          "input-dark flex h-11 w-full px-4 py-2 text-sm text-[#e5e2e1] placeholder:text-[#6b6a6a]",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-[#ffb4ab] focus:border-[#ffb4ab] focus:ring-[#ffb4ab]",
          className
        )}
        ref={ref}
        {...props}
      />
    )

    if (label) {
      return (
        <div className="flex flex-col gap-2 w-full text-left">
          <label
            htmlFor={inputId}
            className="font-label-caps text-[#c7c6c6] select-none"
          >
            {label}
          </label>
          {inputElement}
          {error && (
            <span className="text-xs text-[#ffb4ab] font-medium">{error}</span>
          )}
        </div>
      )
    }

    return inputElement
  }
)
Input.displayName = "Input"

export { Input }
