import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({suffix, className, type, ...props}, ref) => {
        return (
            <div className="flex relative gap-2 items-center">
                <input
                    type={type}
                    // data-slot="input"
                    className={cn(
                        "file:text-foreground placeholder:text-text-secondary-white selection:bg-none selection:text-black dark:selection:text-white border-0 border-b-2 border-white rounded-none bg-transparent [&:not(:placeholder-shown)]:bg-none flex h-9 w-full min-w-0 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pr-10",
                        //note: focus-visible can be changed for some muted color
                        "focus-visible:border-ring focus-visible:border-b-0 focus-visible:bg-transparent focus-visible:ring-[3px]",
                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {suffix && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {suffix}
                    </div>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

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

export { Input }
