import * as React from 'react';

import { Input } from '@/components/ui/input.tsx';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <Input
        {...props}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        suffix={
          showPassword ? (
            <EyeIcon className="select-none w-5 h-5" onClick={() => setShowPassword(false)} />
          ) : (
            <EyeOffIcon className="select-none w-5 h-5" onClick={() => setShowPassword(true)} />
          )
        }
        className={className}
      />
    );
  },
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
