import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from '@tanstack/react-router';
import type { LucideIcon } from 'lucide-react';
import { NavigationMenu } from 'radix-ui';

type NavigationButtonProps = {
  to: string;
  Icon: LucideIcon;
  label: string;
};

export function NavigationButton({ to, Icon, label }: NavigationButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavigationMenu.Item key={to}>
      <NavigationMenu.Link asChild>
        <Button
          asChild
          variant={'navigation'}
          className={cn('flex items-center gap-2 justify-start', {
            'bg-black dark:bg-white text-white dark:text-black': isActive,
          })}
        >
          <Link to={to}>
            <Icon />
            {isActive && <span>{label}</span>}
          </Link>
        </Button>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
