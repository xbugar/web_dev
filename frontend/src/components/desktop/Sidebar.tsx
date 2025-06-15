
import {
  GalleryVerticalEnd,
  Calendar,
  Home,
  Book,
  User,
  PanelLeftClose,
  PanelLeftOpen,
  Search
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { NavigationButton } from '../navigation/NavigationButton.tsx'; // Reused
import { NavigationMenu } from 'radix-ui';
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { UserSettingsDialog } from "@/components/dialogs/UserSettingsDialog.tsx";
import { PathItem } from '../navigation/PathItem';


const paths: PathItem[] = [
  { Icon: Home, to: '/home', label: 'Home', navKey: 'home' },
  { Icon: Book, to: '/notebooks', label: 'Notebooks', navKey: 'notebooks' },
  { Icon: Calendar, to: '/calendar', label: 'Calendar', navKey: 'calendar' },
  { Icon: GalleryVerticalEnd, to: '/flashcards', label: 'Flashcards', navKey: 'flashcards' },
  { Icon: Search, to: '/search', label: 'Search', navKey: 'search' },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <aside
        className={`
          hidden lg:flex flex-col justify-between h-[calc(100vh-1rem)] m-2
          ${collapsed ? 'w-18' : 'w-64'}
          transition-all duration-300
          backdrop-blur-md shadow-ours p-4 sticky top-0
          bg-cover bg-no-repeat rounded-md
          bg-[url('@/assets/gradient.webp')]
          dark:bg-[url('@/assets/gradient.webp')]
        `}
      >
        <div className="space-y-6" >
          <div className="relative">
            {collapsed ? (
              <div className="flex flex-col items-center pb-4 gap-4 ">
                <Link to="/home">
                  <span className="font-serif text-3xl font-bold text-white text-center">g.</span>
                </Link>
                <button
                  onClick={() => setCollapsed(false)}
                  className="text-white hover:text-gray-300 top-auto"
                  aria-label="Expand Sidebar"
                >
                  <PanelLeftOpen  />
                </button>
              </div>
            ) : (
              <div className="relative">
                <Link to="/home">
                  <h1 className="font-serif pb-12 text-3xl font-bold text-white text-center">gradia.</h1>
                </Link>
                <button
                  onClick={() => setCollapsed(true)}
                  className="absolute top-0 right-0 text-white hover:text-gray-300"
                  aria-label="Collapse Sidebar"
                >
                  <PanelLeftClose />
                </button>
              </div>
            )}
          </div>


          <NavigationMenu.Root
            orientation="vertical"
            className="bottom-0 z-50 w-full rounded-t-md justify-self-start"
          >
            <NavigationMenu.List className="BulletsOverride flex flex-col gap-2">
              {paths.map(({ Icon, to, label, navKey }) => (
                <NavigationButton key={to} Icon={Icon} label={collapsed ? '' : label} to={to} navKey={navKey} />
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>

        <Button variant="navigation"
                className="flex justify-start gap-2 hover:bg-white hover:text-black"
                onClick={() => setOpen(true)}>
          <User />
          {!collapsed && <span>My gradia</span>}
        </Button>

      </aside>
      <UserSettingsDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
