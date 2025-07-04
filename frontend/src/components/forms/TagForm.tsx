import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { CreateTag, TagType } from '@/types/tag';
import { Tag } from '@/components/cards/Tag.tsx';
import { AccentColor, accentColors, tagColor } from '../cards/cardColors';

type TagFormProps = {
  initialData?: CreateTag;
  onSubmit: (data: CreateTag) => void;
  isSubmitting?: boolean;
  submitText: string;
  allTags: TagType[];
};

export function TagForm({
  initialData,
  onSubmit,
  isSubmitting,
  submitText,
  allTags,
}: TagFormProps) {
  const [name, setName] = useState(initialData?.name || '');
  const [color, setColor] = useState(initialData?.color || 'red');

  const handleSubmit = () => {
    if (!name) return;
    onSubmit({ name, color });
  };

  return (
    <div className="grid gap-4">
      <div className="flex flex-col">
        <h3 className="font-serif text-lg font-semibold">Choose from all tags</h3>
        <Select
          onValueChange={value => {
            const selectedTag = allTags.find(tag => tag.id === value);
            if (selectedTag) {
              setName(selectedTag.name);
              setColor(selectedTag.color);
            }
          }}
        >
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Select existing tag" />
          </SelectTrigger>
          <SelectContent>
            {allTags.map(tag => (
              <SelectItem key={tag.id} value={tag.id}>
                <Tag name={tag.name} color={tag.color as AccentColor} />
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        <h3 className="font-serif text-lg font-semibold">Create new tag</h3>
        <div className="flex justify-between gap-2">
          <div className="flex w-full flex-col">
            <Label htmlFor="tag-name" className="text-right">
              Tag name
            </Label>
            <Input
              id="tag-name"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="flex w-full flex-col">
            <Label htmlFor="tag-color" className="text-right">
              Tag color
            </Label>
            <Select value={color} onValueChange={value => setColor(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                {accentColors.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    <div className={cn('h-5 w-5 rounded-xl', tagColor[value as AccentColor])} />
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <DialogFooter className="flex-row">
        <Button type="submit" variant="submit" onClick={handleSubmit} loading={isSubmitting}>
          {submitText}
        </Button>
        <DialogClose>Cancel</DialogClose>
      </DialogFooter>
    </div>
  );
}
