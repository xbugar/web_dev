import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, useLocation  } from "@tanstack/react-router"
import type { LucideIcon } from "lucide-react"
import { NavigationMenu } from "radix-ui";

type NavigationButtonProps = {
  to: string
  icon: LucideIcon
  label: string
  variant?: "default" | "ghost" | "outline" | "link"
}

export function NavigationButton({ to, icon: Icon, label, variant = "ghost" }: NavigationButtonProps) {
  const location = useLocation()
  
  // Check if the current route matches the target `to` route
  const isActive = location.pathname === to

  return (
    <NavigationMenu.Item key={to}>
      <NavigationMenu.Link asChild>
        <Button
          asChild
          size={"lg"}
          variant={variant}
          className={cn("flex items-center gap-2 justify-start", {
            "bg-black text-white": isActive,
          })}
        >
          
          <Link to={to} className="w-full">
            <Icon className="w-5 h-5 stroke-[2.5]" />
            {isActive && <span>{label}</span>}
          </Link>
        </Button>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}