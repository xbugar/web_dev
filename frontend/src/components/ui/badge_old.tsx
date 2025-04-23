import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-2xl border px-3 py-0.5 text-xs font-sans w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-2.5 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        blue:
          "border-transparent bg-blue-900 text-blue-400 [a&]:hover:bg-blue-900/90",
        purple:
          "border-transparent bg-purple-900 text-purple-400 [a&]:hover:bg-purple-900/90",
        yellow:
          "border-transparent bg-yellow-900 text-yellow-400 [a&]:hover:bg-yellow-900/90",
        green:
          "border-transparent bg-green-900 text-green-400 [a&]:hover:bg-green-900/90",
        red:
          "border-transparent bg-red-900 text-red-400 [a&]:hover:bg-red-900/90",
        pink:
          "border-transparent bg-pink-900 text-pink-400 [a&]:hover:bg-pink-900/90"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
