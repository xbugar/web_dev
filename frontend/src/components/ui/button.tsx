import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm text-sm bg-red-600 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        /* shadcn */
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        
        /* custom */
        navigation:
          "[&_svg]:h-6 [&_svg]:w-6 bg-transparent text-black dark:text-white p-2 text-base font-semibold",
        header:
          "[&_svg]:h-6 [&_svg]:w-6 bg-white dark:bg-black text-black dark:text-white p-2",
        login:
          "bg-white text-black p-2 justify-center text-center w-full"
      },
      // size: {
      //   default: "h-9 px-4 py-2 has-[>svg]:px-3",
      //   sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      //   lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      //   icon: "size-9",
      // },
    },
    defaultVariants: {
      variant: "default",
      // size: "default",
    },
  }
)

function Button({
  className,
  variant,
  // size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
