import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { CreateTag } from "@/types/TagType.ts";
import { useNoteMetaData } from "@/hooks/useNoteMetaData.ts";
import { TagColor } from "@/components/cards/Tag.tsx";
import { useCreateTagNote } from "@/hooks/useCreateTagNote.ts";
import { Tag } from "@/components/cards/Tag.tsx"
import { Note } from "@/types/Note.ts";
import { TagForm } from "@/components/forms/TagForm.tsx";

interface NoteTagDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  noteId: string;
  notebookId: string;
}

export function NoteTagDialog({ open, onOpenChange, noteId, notebookId }: NoteTagDialogProps) {
  const createTag = useCreateTagNote(notebookId);
  const noteMetaData = useNoteMetaData(noteId);
  const noteData : Note = noteMetaData.data as Note;

  const handleCreateAndAssignTag = (data: CreateTag) => {
    if (data.name === '') {
      return;
    }

    try {
      console.log(data);
      createTag.mutate({noteId, data});
    } catch (err) {
      console.error("Error while creating a tag:", err);
    }
  };

  return(
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit tags</DialogTitle>
          <DialogDescription></DialogDescription>
          {noteData && noteData.tags && noteData.tags.length > 0 ? (
            <div className="relative mr-4">
              <div className="hide-scrollbar relative flex gap-2 overflow-x-auto pl-4">
                {noteData.tags.map((tag, index) => (
                  <Tag name={tag.name} color={tag.color as TagColor} key={index}></Tag>
                ))}
                <div className="ml-5"></div>
              </div>

              {/* shadow on the left side */}
              {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-3 bg-gradient-to-r from-white-secondary dark:from-black-secondary to-transparent"></div> */}
              <div className="from-white-secondary dark:from-black-secondary pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l to-transparent"></div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">No tags</p>
          )}
        </DialogHeader>
        <TagForm
          onSubmit={handleCreateAndAssignTag}
          isSubmitting={createTag.isPending}
          submitText={'Create'}
        />
      </DialogContent>
    </Dialog>
  );
}
