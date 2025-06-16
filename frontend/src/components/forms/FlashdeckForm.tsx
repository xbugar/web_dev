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
import { FlashdeckCard } from '../cards/FlashdeckCard';
import { DialogClose, DialogFooter } from '../ui/dialog';
import { FlashdeckFormProps } from '@/types/flashdeck';

export function FlashdeckForm({
  flashdeckCardProps,
  submitText,
  isSubmitting,
  onSubmit,
}: FlashdeckFormProps) {
  const [title, setTitle] = useState(flashdeckCardProps.title);
  const [description, setDescription] = useState(flashdeckCardProps.description);
  const [color, setColor] = useState(flashdeckCardProps.color);

  const handleSubmit = () => {
    if (!title || !color) return;

    onSubmit({
      title,
      description,
      color,
    });
  };

  return (
    <div className="grid gap-6">
      <div className="grid items-center gap-2">
        <Label htmlFor="create-flashdeck-card-preview" className="text-right">
          Preview
        </Label>

        <FlashdeckCard
          id="create-flashdeck-card-preview"
          title={title}
          description={description}
          color={color}
          tags={flashdeckCardProps.tags}
          flashCardsCount={flashdeckCardProps.flashCardsCount}
          lastUpdated={flashdeckCardProps.lastUpdated}
          isLinked={false}
        />
      </div>

      <div className="grid items-center">
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
          disabled={!title || !color}
          loading={isSubmitting}
        >
          {submitText}
        </Button>
        <DialogClose>Cancel</DialogClose>
      </DialogFooter>
    </div>
  );
}
