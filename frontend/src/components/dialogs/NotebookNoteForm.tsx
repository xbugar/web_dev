import { Input } from '@/components/ui/input.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { AccentColor, availableColors, iconColor } from '@/components/cards/cardColors.tsx';
import { cn } from '@/lib/utils';
import { iconOptions } from '@/components/cards/IconOptions.tsx';

type NotebookFormProps = {
  type: 'notebook' | 'note';
  initialData?: {
    title: string;
    description?: string;
    color?: string;
    iconName?: string;
  };
  onSubmit: (data: {
    title: string;
    description?: string;
    color?: string;
    iconName?: string;
  }) => void;
  isSubmitting?: boolean;
  submitText: string;
};

export function NotebookNoteForm({
  type,
  initialData,
  onSubmit,
  isSubmitting,
  submitText,
}: NotebookFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [color, setColor] = useState(initialData?.color || '');
  const [iconName, setIcon] = useState(initialData?.iconName || 'Default');

  const handleSubmit = () => {
    if (!title) return;

    if (type === 'notebook') {
      onSubmit({
        title,
        description,
        color,
        iconName,
      });
    }

    if (type === 'note') {
      onSubmit({
        title,
      });
    }
  };

  return (
    <div className="grid gap-4 py-4">
      {/* Title */}
      <div className="grid items-center gap-4">
        <Label htmlFor="title" className="text-right">
          Title
        </Label>
        <Input
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="col-span-3"
        />
      </div>

      {type === 'notebook' && (
        <>
          {/* Description */}
          <div className="grid items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={e => setDescription(e.target.value ?? '')}
              className="col-span-3"
            />
          </div>

          <div className="flex justify-left items-center gap-4">
            {/* Color */}
            <div className="grid items-center gap-4">
              <Label htmlFor="color" className="text-right">
                Color
              </Label>
              <Select value={color} onValueChange={value => setColor(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  {availableColors.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      <div
                        className={cn('w-1 h-4 rounded-xl', iconColor[value as AccentColor])}
                      ></div>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Icon */}
            <div className="grid items-center gap-4">
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
                      <div className={cn('p-1 rounded-md', iconColor[color as AccentColor])}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      {iconName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </>
      )}

      <Button type="submit" variant="customSubmit" onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : submitText}
      </Button>
    </div>
  );
}
