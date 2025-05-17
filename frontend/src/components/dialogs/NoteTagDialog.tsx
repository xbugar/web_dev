import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CreateTag } from '@/types/TagType.ts';
import { useNoteMetaData } from '@/hooks/useNoteMetaData.ts';
import { useCreateTagNote } from '@/hooks/useCreateTagNote.ts';
import { Tag } from '@/components/cards/Tag.tsx';
import { Note } from '@/types/Note.ts';
import { TagForm } from '@/components/forms/TagForm.tsx';
import { NoteTagDeleteDialog } from '@/components/dialogs/NoteTagDeleteDialog.tsx';
import { useState } from 'react';
import { useAllTags } from '@/hooks/useAllTags.ts';
import { AccentColor } from '../cards/cardColors';

interface NoteTagDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  noteId: string;
  notebookId: string;
}

export function NoteTagDialog({ open, onOpenChange, noteId, notebookId }: NoteTagDialogProps) {
  const createTag = useCreateTagNote(notebookId);
  const noteMetaData = useNoteMetaData(noteId);
  const allTags = useAllTags();
  const noteData: Note = noteMetaData.data as Note;

  const [openDeleteTag, setOpenDeleteTag] = useState(false);
  const [deleteTagId, setDeleteTagId] = useState<string>('');

  const handleCreateAndAssignTag = (data: CreateTag) => {
    if (data.name === '') {
      return;
    }

    try {
      createTag.mutate({ noteId, data });
    } catch (err) {
      console.error('Error while creating a tag:', err);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit tags</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>
            {noteData && noteData.tags && noteData.tags.length > 0 ? (
              <div className="hide-scrollbar mb-4 max-h-24 overflow-y-auto">
                <div className="flex flex-wrap justify-center gap-2">
                  {noteData.tags.map((tag, index) => (
                    <div key={index} className="relative">
                      <div
                        onClick={() => {
                          setOpenDeleteTag(true);
                          setDeleteTagId(tag.id);
                        }}
                      >
                        <Tag
                          name={tag.name}
                          color={tag.color as AccentColor}
                          key={index}
                          x={true}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* shadow on the left side */}
                {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-3 bg-gradient-to-r from-white-secondary dark:from-black-secondary to-transparent"></div> */}
                <div className="from-white-secondary dark:from-black-secondary pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l to-transparent"></div>
              </div>
            ) : (
              <p className="text-muted-foreground mb-4 text-sm italic">No tags</p>
            )}
          </div>

          <TagForm
            onSubmit={handleCreateAndAssignTag}
            isSubmitting={createTag.isPending}
            submitText={'Add'}
            allTags={allTags.data ?? []}
          />
        </DialogContent>
      </Dialog>

      <NoteTagDeleteDialog
        open={openDeleteTag}
        onOpenChange={setOpenDeleteTag}
        noteId={noteId}
        notebookId={notebookId}
        tagId={deleteTagId}
      />
    </>
  );
}
