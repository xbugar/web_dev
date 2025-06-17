import * as React from 'react';

import { Input } from '@/components/ui/input.tsx';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'inputAlt';
}

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
            <EyeIcon className="h-5 w-5 select-none" onClick={() => setShowPassword(false)} />
          ) : (
            <EyeOffIcon className="h-5 w-5 select-none" onClick={() => setShowPassword(true)} />
          )
        }
        className={className}
      />
    );
  },
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
