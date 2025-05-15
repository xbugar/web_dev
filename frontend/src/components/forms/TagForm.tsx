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
import { CreateTag } from "@/types/TagType.ts";
import { tagMap, availableColors, TagColor } from "@/components/cards/Tag.tsx";

type TagFormProps = {
  initialData?: CreateTag;
  onSubmit: (data: CreateTag ) => void;
  isSubmitting?: boolean;
  submitText: string;
};

export function TagForm({ initialData, onSubmit, isSubmitting, submitText }: TagFormProps) {
  const [name, setName] = useState(initialData?.name || '');
  const [color, setColor] = useState(initialData?.color || 'red');

  const handleSubmit = () => {
    if (!name) return;
    onSubmit({ name, color });
  };

  return (
    <div className="grid gap-6">
      <div className="grid items-center gap-2">
        <Label htmlFor="tag-name" className="text-right">
          Tag name
        </Label>
        <Input
          id="tag-name"
          placeholder="Enter tag name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="col-span-3"
        />
      </div>

      <div className="grid items-center gap-2">
        <Label htmlFor="tag-color" className="text-right">
          Tag color
        </Label>
        <Select value={color} onValueChange={value => setColor(value)}>
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Select a color" />
          </SelectTrigger>
          <SelectContent>
            {availableColors.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                <div className={cn('h-5 w-5 rounded-xl', tagMap[value as TagColor])} />
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <DialogFooter className="flex-row-reverse">
        <DialogClose>Cancel</DialogClose>
        <Button type="submit" variant="submit" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : submitText}
        </Button>
      </DialogFooter>
    </div>
  );
}
