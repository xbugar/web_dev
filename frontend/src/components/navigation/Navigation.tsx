import { Home, Book, Calendar, Search, GalleryVerticalEnd } from 'lucide-react';

import { NavigationButton } from './NavigationButton';
import { NavigationMenu } from 'radix-ui';
import { PathItem } from './PathItem';

export function Navigation() {
  const paths: PathItem[] = [
    { Icon: Search, to: '/search', label: 'Search', navKey: 'search' },
    { Icon: Calendar, to: '/calendar/today', label: 'Calendar', navKey: 'calendar' },
    { Icon: Home, to: '/home', label: 'Home', navKey: 'home' },
    { Icon: Book, to: '/notebooks', label: 'Notebooks', navKey: 'notebooks' },
    { Icon: GalleryVerticalEnd, to: '/flashcards', label: 'Flashcards', navKey: 'flashcards' },
  ];

  return (
    <NavigationMenu.Root
      orientation="horizontal"
      className="fixed right-0 bottom-0 z-50 w-full rounded-t-md px-2 py-2 backdrop-blur-md"
    >
      <NavigationMenu.List className="BulletsOverride direction-row shadow-ours flex justify-between gap-1 rounded-md bg-white p-2 dark:bg-black">
        {paths.map(({ Icon, to, label, navKey }) => (
          <NavigationButton key={to} Icon={Icon} label={label} to={to} navKey={navKey} />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
