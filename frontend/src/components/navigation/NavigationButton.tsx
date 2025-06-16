import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from '@tanstack/react-router';
import { LucideIcon } from 'lucide-react';
import { NavigationMenu } from 'radix-ui';

type NavigationButtonProps = {
  to: string;
  Icon: LucideIcon;
  label: string;
  navKey: string;
};

function getNavKeyFromPath(pathname: string): string | null {
  if (pathname.startsWith('/notebooks')) return 'notebooks';
  if (pathname.startsWith('/calendar') || pathname.startsWith('/events')) return 'calendar';
  if (pathname.startsWith('/flashcards')) return 'flashcards';
  if (pathname.startsWith('/search')) return 'search';
  if (pathname === '/home') return 'home';
  return null;
}


export function NavigationButton({ to, Icon, label, navKey }: NavigationButtonProps) {
  const location = useLocation();
  const currentNavKey = getNavKeyFromPath(location.pathname);
  const isActive = currentNavKey === navKey;

  return (
    <NavigationMenu.Item key={to}>
      <NavigationMenu.Link asChild>
        <Button
          asChild
          variant={'navigation'}
          className={cn('flex items-center justify-start gap-2', {
            'bg-black text-white dark:bg-white dark:text-black lg:bg-white lg:text-black': isActive,
          })}
        >
          <Link to={to}>
            <Icon />
            <span
                className={cn(isActive ? 'inline' : 'hidden', 'lg:inline')}>
              {label}
            </span>
          </Link>
        </Button>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
