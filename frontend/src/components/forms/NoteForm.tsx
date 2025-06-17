import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { DialogClose, DialogFooter } from '../ui/dialog';
import { NoteCard } from '../cards/NoteCard';
import { NoteFormProps } from '@/types/note';

export function NoteForm({ noteCardProps, submitText, isSubmitting, onSubmit }: NoteFormProps) {
  const [title, setTitle] = useState(noteCardProps.title);

  const handleSubmit = () => {
    if (!title) return;

    onSubmit({
      title,
    });
  };

  return (
    <div className="grid gap-6">
      <div className="grid items-center gap-2">
        <Label htmlFor="create-note-card-preview" className="text-right">
          Preview
        </Label>

        <NoteCard
          id="create-note-card-preview"
          title={title}
          tags={noteCardProps.tags}
          notebook={noteCardProps.notebook}
          content={noteCardProps.content}
          lastUpdated={noteCardProps.lastUpdated}
          isLinked={false}
        />
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

      <DialogFooter className="flex-row">
        <Button
          type="submit"
          variant="submit"
          onClick={handleSubmit}
          disabled={!title}
          loading={isSubmitting}
        >
          {submitText}
        </Button>
        <DialogClose>Cancel</DialogClose>
      </DialogFooter>
    </div>
  );
}
