import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../variants/buttonVariants';
import { ButtonLoading } from '../loading/ButtonLoading';

function Button({
  className,
  variant,
  // size,
  asChild = false,
  loading = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, className }))} disabled={loading} {...props}>
      {loading ? <ButtonLoading variant={variant ?? undefined} /> : props.children}
    </Comp>
  );
}

export { Button };
