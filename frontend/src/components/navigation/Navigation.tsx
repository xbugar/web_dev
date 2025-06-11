import { Home, Book, Calendar, Timer, GalleryVerticalEnd, LucideIcon } from 'lucide-react';

import { NavigationButton } from './NavigationButton';
import { NavigationMenu } from 'radix-ui';

type PathItem = {
  Icon: LucideIcon;
  to: string;
  label: string;
};

export function Navigation() {
  const paths: PathItem[] = [
    { Icon: GalleryVerticalEnd, to: '/flashcards', label: 'Flashcards' },
    { Icon: Calendar, to: '/calendar/today', label: 'Calendar' },
    { Icon: Home, to: '/home', label: 'Home' },
    { Icon: Book, to: '/notebooks', label: 'Notebooks' },
    { Icon: Timer, to: '/search', label: 'Search' },
  ];

  return (
    <NavigationMenu.Root
      orientation="horizontal"
      className="fixed right-0 bottom-0 z-50 w-full rounded-t-md px-2 py-2 backdrop-blur-md"
    >
      <NavigationMenu.List className="BulletsOverride direction-row shadow-ours flex justify-between gap-1 rounded-md bg-white p-2 dark:bg-black">
        {paths.map(({ Icon, to, label }) => (
          <NavigationButton key={to} Icon={Icon} label={label} to={to} />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
