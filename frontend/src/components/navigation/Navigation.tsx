// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"


import {
  Home,
  Book,
  Calendar,
  Timer,
  GalleryVerticalEnd,
  LucideIcon
} from "lucide-react"

import { NavigationButton } from "./NavigationButton";
import { NavigationMenu } from "radix-ui";

type PathItem = {
  Icon: LucideIcon
  to: string
  label: string
}

export function Navigation() {
  const paths: PathItem[] = [
    { Icon: GalleryVerticalEnd, to: "/flashcards", label: "Flashcards" },
    { Icon: Calendar, to: "/calendar", label: "Calendar" },
    { Icon: Home, to: "/home", label: "Home" },
    { Icon: Book, to: "/notebooks", label: "Notebooks" },
    { Icon: Timer, to: "/pomodoro", label: "Pomodoro" }
  ]

  return (
	<NavigationMenu.Root orientation="horizontal" className="fixed bottom-2 right-0 w-full px-4 pb-2">
		<NavigationMenu.List className="flex direction-row bg-white dark:bg-black p-2 rounded-md gap-1 justify-between shadow-ours">

      {paths.map(({ Icon, to, label }) => (
        <NavigationButton
          key={to}
          Icon={Icon}
          label={label}
          to={to}
        />
      ))}

		</NavigationMenu.List>
	</NavigationMenu.Root>
  )
}