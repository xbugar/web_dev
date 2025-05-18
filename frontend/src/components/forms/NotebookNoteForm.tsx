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
import { iconOptions } from '@/components/cards/IconOptions.tsx';
import { NotebookCard } from '../cards/NotebookCard';
import { DialogClose, DialogFooter } from '../ui/dialog';
import { NoteCard } from '../cards/NoteCard';

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
  const [color, setColor] = useState(initialData?.color || 'red');
  const [iconName, setIcon] = useState(initialData?.iconName || 'BookOpen');

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
    <div className="grid gap-6">
      <div className="grid items-center gap-2">
        {/* Notebook Preview */}
        {type === 'notebook' && (
          <>
            <Label htmlFor="create-notebook-card-preview" className="text-right">
              Preview
            </Label>

            <NotebookCard
              id="create-notebook-card-preview"
              key={''}
              title={title}
              description={description}
              iconName={iconName}
              color={color}
              noteCount={0}
              lastUpdated={new Date().toString()}
              isLinked={false}
            />
          </>
        )}
        {/* Note Preview */}
        {type === 'note' && (
          <>
            <Label htmlFor="create-note-card-preview" className="text-right">
              Preview
            </Label>

            <NoteCard
              parentId={'ADD LATER TODO'}
              titleOfParent={'ADD LATER TODO'}
              content={'ADD LATER TODO'}
              noteId="create-note-card-preview"
              key={''}
              title={title}
              color={color} // ADD COLOR LATER TODO
              lastUpdated={new Date().toString()}
              isLinked={false}
            />
          </>
        )}
      </div>

      {type === 'notebook' && (
        <div className="flex justify-between gap-5">
          {/* Notebook Color */}
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
                    <div
                      className={cn('h-5 w-5 rounded-xl', iconColor[value as AccentColor])}
                    ></div>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Notebook Icon */}
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
      )}

      {/* Title */}
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

      {type === 'notebook' && (
        <>
          {/* Notebook Description */}
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
        </>
      )}

      <DialogFooter className="flex-row-reverse">
        <DialogClose>Cancel</DialogClose>
        <Button
          type="submit"
          variant="submit"
          onClick={handleSubmit}
          disabled={!title}
          loading={isSubmitting}
        >
          {submitText}
        </Button>
      </DialogFooter>
    </div>
  );
}
