import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CreateTag } from '@/types/tagType';
import { useNoteMetaData } from '@/hooks/note/useNoteMetaData';
import { useCreateTagNote } from '@/hooks/note/useCreateTagNote';
import { Tag } from '@/components/cards/Tag.tsx';
import { Note, NoteDialogProps } from '@/types/note';
import { TagForm } from '@/components/forms/TagForm.tsx';
import { useState } from 'react';
import { useAllTags } from '@/hooks/tag/useAllTags';
import { AccentColor } from '@/components/cards/cardColors';
import { useDeleteTagFromNote } from '@/hooks/note/useDeleteTagFromNote';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { toast } from 'sonner';

export function NoteTagDialog({ noteCardProps, open, onOpenChange }: NoteDialogProps) {
  const createTag = useCreateTagNote(noteCardProps.notebook.id);
  const deleteTag = useDeleteTagFromNote({ notebookId: noteCardProps.notebook.id });
  const noteMetaData = useNoteMetaData(noteCardProps.id);
  const allTags = useAllTags();
  const noteData: Note = noteMetaData.data as Note;

  const [openDeleteTag, setOpenDeleteTag] = useState(false);
  const [deleteTagId, setDeleteTagId] = useState<string>('');

  const handleCreateAndAssignTag = (data: CreateTag) => {
    if (data.name === '') {
      return;
    }

    createTag.mutate(
      { noteId: noteCardProps.id, data },
      {
        onError: err => {
          toast.error('Failed to create tag. Please try again.');
          console.error('Error while creating a tag:', err);
        },
      },
    );
  };

  const handleDelete = () => {
    deleteTag.mutate({ noteId: noteCardProps.id, tagId: deleteTagId });
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

      <DeleteConfirmationDialog
        open={openDeleteTag}
        onOpenChange={setOpenDeleteTag}
        onDelete={handleDelete}
        isPending={deleteTag.isPending}
      />
    </>
  );
}
