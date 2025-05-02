import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
  variant?: 'inputAlt';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type, variant, ...props }, ref) => {
    return (
      <div className="relative flex items-center gap-2">
        <input
          type={type}
          // data-slot="input"
          className={cn(
            'aria-invalid:border-destructive',
            'file:text-foreground text-md flex min-h-12 w-full rounded-none border-0 border-b-1 bg-transparent px-3 py-1 pr-10 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm [&:not(:placeholder-shown)]:bg-none',
            'focus-visible:border-b-2 focus-visible:bg-transparent',
            variant === 'inputAlt'
              ? 'placeholder:text-white-text-secondary border-white-text-secondary'
              : 'placeholder:text-black-text-secondary border-black-text-secondary dark:placeholder:text-white-text-secondary dark:border-white-text-secondary not-placeholder-shown:not-[aria-invalid="true"]:border-black focus-visible:border-black dark:not-placeholder-shown:not-[aria-invalid="true"]:border-white dark:focus-visible:border-white',
            className,
          )}
          ref={ref}
          {...props}
        />
        {suffix && <div className="absolute top-1/2 right-3 -translate-y-1/2">{suffix}</div>}
      </div>
    );
  },
);
Input.displayName = 'Input';

// function Input({ className, type, ...props }: React.ComponentProps<"input">) {
//   return (
//     <input
//       type={type}
//       data-slot="input"
//       className={cn(
//         "file:text-foreground placeholder:text-text-secondary-white selection:bg-none selection:text-primary-foreground border-0 border-b-2 border-white rounded-none bg-transparent [&:not(:placeholder-shown)]:bg-none flex h-9 w-full min-w-0 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         "focus-visible:border-ring focus-visible:border-b-0 focus-visible:bg-input focus-visible:ring-[3px]",
//         "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
//         className
//       )}
//       {...props}
//     />
//   )
// }

export { Input };
