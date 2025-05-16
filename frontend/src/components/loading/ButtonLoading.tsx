import { cn } from '@/lib/utils';

import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../variants/buttonVariants';

type ButtonVariant = Exclude<VariantProps<typeof buttonVariants>['variant'], undefined | null>;

const variantToBgClass: Record<NonNullable<ButtonVariant>, string> = {
  submit: 'bg-white dark:bg-black',
  submitSecondary: 'bg-black dark:bg-white',
  submitAlternative: 'bg-black',
  link: 'bg-red-600',
  default: 'bg-red-600',
  header: 'bg-red-600',
  section: 'bg-red-600',
  destructive: 'bg-red-600',
  outline: 'bg-red-600',
  secondary: 'bg-red-600',
  ghost: 'bg-red-600',
  navigation: 'bg-red-600',
};

export function ButtonLoading({ variant }: { variant?: ButtonVariant }) {
  const colorClass = cn(variantToBgClass[variant ?? 'submit']);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative inline-flex">
          <div className={cn('h-4 w-4', colorClass)} />
          <div className={cn('absolute top-0 left-0 h-4 w-4 animate-ping', colorClass)} />
          <div className={cn('absolute top-0 left-0 h-4 w-4 animate-pulse', colorClass)} />
        </div>
      </div>
    </div>
  );
}
