import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';

import { Label } from '@/components/ui/label.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useTheme } from '@/hooks/useTheme';

type UserSettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const UserSettingsDialog = ({ open, onOpenChange }: UserSettingsDialogProps) => {
  const [selectedTheme, setTheme] = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User settings</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

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
                  {'auto'}
                </SelectItem>
                <SelectItem key={'light'} value={'light'}>
                  {'light'}
                </SelectItem>
                <SelectItem key={'dark'} value={'dark'}>
                  {'dark'}
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
      </DialogContent>
    </Dialog>
  );
};
