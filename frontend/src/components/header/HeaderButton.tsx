import { Button } from "@/components/ui/button2"
import { Link  } from "@tanstack/react-router"
import type { LucideIcon } from "lucide-react"

type HeaderButtonProps = {
  to: string
  Icon: LucideIcon
}

export function HeaderButton({ to, Icon }: HeaderButtonProps) {
  return (
    <Button asChild variant={"header"} >
      <Link to={to}>
        <Icon />
      </Link>
    </Button>
  )
}