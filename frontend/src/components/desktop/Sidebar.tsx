import {
  GalleryVerticalEnd,
  Calendar,
  Home,
  Book,
  Search,
  User,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { NavigationButton } from '../navigation/NavigationButton.tsx'; // Reused
import { NavigationMenu } from 'radix-ui';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { UserSettingsDialog } from '@/components/dialogs/user/UserSettingsDialog.tsx';
import { PathItem } from '../navigation/PathItem';

const paths: PathItem[] = [
  { Icon: Home, to: '/home', label: 'Home', navKey: 'home' },
  { Icon: Book, to: '/notebooks', label: 'Notebooks', navKey: 'notebooks' },
  { Icon: GalleryVerticalEnd, to: '/flashdecks', label: 'Flashdecks', navKey: 'flashdecks' },
  { Icon: Calendar, to: '/calendar', label: 'Calendar', navKey: 'calendar' },
  { Icon: Search, to: '/search', label: 'Search', navKey: 'search' },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <aside
        className={`m-2 hidden h-[calc(100vh-1rem)] flex-col justify-between lg:flex ${collapsed ? 'w-18' : 'w-64'} shadow-ours sticky top-0 rounded-md bg-[url('@/assets/gradient.webp')] bg-cover bg-no-repeat p-4 backdrop-blur-md transition-all duration-300 dark:bg-[url('@/assets/gradient.webp')]`}
      >
        <div className="space-y-6">
          <div className="relative">
            {collapsed ? (
              <div className="flex flex-col items-center gap-4 pb-4">
                <Link to="/home">
                  <span className="text-center font-serif text-3xl font-bold text-white">g.</span>
                </Link>
                <button
                  onClick={() => setCollapsed(false)}
                  className="top-auto text-white hover:text-gray-300"
                  aria-label="Expand Sidebar"
                >
                  <PanelLeftOpen />
                </button>
              </div>
            ) : (
              <div className="relative">
                <Link to="/home">
                  <h1 className="pb-12 text-center font-serif text-3xl font-bold text-white">
                    gradia.
                  </h1>
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
            className="bottom-0 z-50 w-full justify-self-start rounded-t-md"
          >
            <NavigationMenu.List className="BulletsOverride flex flex-col gap-2">
              {paths.map(({ Icon, to, label, navKey }) => (
                <NavigationButton
                  key={to}
                  Icon={Icon}
                  label={collapsed ? '' : label}
                  to={to}
                  navKey={navKey}
                />
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>

        <Button
          variant="navigation"
          className="flex justify-start gap-2 hover:bg-white hover:text-black"
          onClick={() => setOpen(true)}
        >
          <User />
          {!collapsed && <span>My gradia</span>}
        </Button>
      </aside>
      <UserSettingsDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
