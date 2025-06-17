import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';

import { Label } from '@/components/ui/label.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTheme } from '@/hooks/generic/useTheme';
import { Button } from '@/components/ui/button';
import { postLogoutUser } from '@/services/authService';
import { useAuthStore } from '@/lib/authStore';
import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useGetUser } from '@/hooks/user/useGetUser';
import { Input } from '@/components/ui/input.tsx';
import { useEditUser } from '@/hooks/user/useEditUser';

type UserSettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const UserSettingsDialog = ({ open, onOpenChange }: UserSettingsDialogProps) => {
  const [selectedTheme, setTheme] = useTheme();
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();
  const setAuth = useAuthStore(s => s.setAuth);
  const auth = useAuthStore(s => s.auth);

  const { data: user, isLoading: userLoading } = useGetUser();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  const edit = useEditUser();
  const handleSave = () => {
    edit.mutate({ firstName, lastName });
  };

  async function onSubmit() {
    setIsPending(true);
    try {
      await postLogoutUser();
      console.log('Logout successful');
      setAuth({ isAuth: false });
      navigate({ to: '/login' });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="flex flex-col items-center justify-center text-center">
          <DialogTitle>User settings</DialogTitle>
          <DialogDescription>
            {user?.email}
          </DialogDescription>
        </DialogHeader>
        <div className="mb-4 flex flex-col gap-4">
          <div className="flex flex-col">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              disabled={userLoading}
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              disabled={userLoading}
            />
          </div>
        </div>

        <Button variant="submit" onClick={handleSave} disabled={userLoading}>
          Save
        </Button>

        <div className="flex justify-between gap-5">
          {/* Theme */}
          <div className="flex w-full flex-col">
            <Label htmlFor="theme" className="text-right">
              Theme
            </Label>
            <Select
              value={selectedTheme ?? 'auto'}
              onValueChange={(value: 'light' | 'dark' | 'auto') => setTheme(value)}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key={'auto'} value={'auto'}>
                  Auto
                </SelectItem>
                <SelectItem key={'light'} value={'light'}>
                  Light
                </SelectItem>
                <SelectItem key={'dark'} value={'dark'}>
                  Dark
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Icon */}
          {/* <div className="flex w-full flex-col">
            <Label htmlFor="icon" className="text-right">
              Icon
            </Label>
            <Select value={iconName} onValueChange={iconName => setIcon(iconName)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select an icon" />
              </SelectTrigger>
              <SelectContent>
                {iconOptions.map(({ iconName, IconComponent }) => (
                  <SelectItem key={iconName} value={iconName}>
                    <IconComponent className="h-4 w-4 text-black dark:text-white" />
                    {iconName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
        </div>

        <Button variant="submit" onClick={onSubmit} loading={isPending || !auth.isAuth}>
          Log out
        </Button>
      </DialogContent>
    </Dialog>
  );
};
