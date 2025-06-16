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
import { AccentColor, accentColors, iconColor } from '../cards/cardColors';
import { cn } from '@/lib/utils';
import { iconOptions } from '@/components/cards/iconOptions';
import { NotebookCard } from '../cards/NotebookCard';
import { DialogClose, DialogFooter } from '../ui/dialog';
import { NotebookFormProps } from '@/types/notebook';

export function NotebookForm({
  notebookCardProps,
  submitText,
  isSubmitting,
  onSubmit,
}: NotebookFormProps) {
  const [title, setTitle] = useState(notebookCardProps.title);
  const [description, setDescription] = useState(notebookCardProps.description);
  const [color, setColor] = useState(notebookCardProps.color);
  const [iconName, setIcon] = useState(notebookCardProps.iconName);

  const handleSubmit = () => {
    if (!title || !color || !iconName) return;

    onSubmit({
      title,
      description,
      color,
      iconName,
    });
  };

  return (
    <div className="grid gap-6">
      <div className="grid items-center gap-2">
        <Label htmlFor="create-notebook-card-preview" className="text-right">
          Preview
        </Label>

        <NotebookCard
          id="create-notebook-card-preview"
          title={title}
          description={description}
          iconName={iconName}
          color={color}
          noteCount={notebookCardProps.noteCount}
          lastUpdated={notebookCardProps.lastUpdated}
          tags={notebookCardProps.tags}
          isLinked={false}
        />
      </div>

      <div className="flex justify-between gap-5">
        <div className="flex w-full flex-col">
          <Label htmlFor="color" className="text-right">
            Color
          </Label>
          <Select value={color} onValueChange={value => setColor(value)}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent>
              {accentColors.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  <div className={cn('h-5 w-5 rounded-xl', iconColor[value as AccentColor])}></div>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-full flex-col">
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
        </div>
      </div>

      <div className="grid items-center">
        <Label htmlFor="title" className="text-right">
          Title*
        </Label>
        <Input
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="col-span-3"
        />
      </div>

      <div className="grid items-center">
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

      <DialogFooter className="flex-row">
        <Button
          type="submit"
          variant="submit"
          onClick={handleSubmit}
          disabled={!title || !color || !iconName}
          loading={isSubmitting}
        >
          {submitText}
        </Button>
        <DialogClose>Cancel</DialogClose>
      </DialogFooter>
    </div>
  );
}
