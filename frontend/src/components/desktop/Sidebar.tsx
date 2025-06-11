
import { GalleryVerticalEnd, Calendar, Home, Book, Timer, User } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { NavigationButton } from '../navigation/NavigationButton.tsx'; // Reused
import { NavigationMenu } from 'radix-ui';
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { UserSettingsDialog } from "@/components/dialogs/UserSettingsDialog.tsx";



const paths = [
  { Icon: Home, to: '/home', label: 'Home' },
  { Icon: Book, to: '/notebooks', label: 'Notebooks' },
  { Icon: Calendar, to: '/calendar/today', label: 'Calendar' },
  { Icon: GalleryVerticalEnd, to: '/flashcards', label: 'Flashcards' },
  { Icon: Timer, to: '/pomodoro', label: 'Pomodoro' },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside
        className="
        hidden lg:flex flex-col justify-between h-[calc(100vh-1rem)] m-2 w-64
        backdrop-blur-md shadow-ours p-4 sticky top-0
        bg-cover bg-no-repeat rounded-md
        bg-[url('@/assets/gradient.webp')]
        dark:bg-[url('@/assets/gradient.webp')]
        "
      >
        <div className="space-y-6" >
          <Link to="/home">
            <h1 className="font-serif pb-12 text-3xl justify-self-center font-bold text-white dark:text-white">gradia.</h1>
          </Link>

          <NavigationMenu.Root
            orientation="vertical"
            className="bottom-0 z-50 w-full rounded-t-md justify-self-start"
          >
            <NavigationMenu.List className="BulletsOverride flex flex-col gap-2">
              {paths.map(({ Icon, to, label }) => (
                <NavigationButton key={to} Icon={Icon} label={label} to={to} />
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>

        <Button variant="navigation" className="flex justify-start gap-2 hover:bg-white hover:text-black" onClick={() => setOpen(true)}>
          <User /> <span>My gradia</span>
        </Button>

      </aside>
      <UserSettingsDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
