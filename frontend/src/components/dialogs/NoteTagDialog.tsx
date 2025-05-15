import { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateTag, TagType } from "@/types/TagType.ts";
import { useNoteMetaData } from "@/hooks/useNoteMetaData.ts";
// import { useCreateTag } from "@/hooks/useCreateTag.ts";
import { TagColor, availableColors, tagMap  } from "@/components/cards/Tag.tsx";
import { cn } from "@/lib/utils.ts";
import { useCreateTagNote } from "@/hooks/useCreateTagNote.ts";
import { Tag } from "@/components/cards/Tag.tsx"
import { Note } from "@/types/Note.ts";

interface NoteTagDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  noteId: string;
}

export function NoteTagDialog({ open, onOpenChange, noteId }: NoteTagDialogProps) {
  // const noteMetaData = useNoteMetaData(noteId);

  // console.log(noteData?.tags);
  const [tags, setTags] = useState<TagType[]>([]);
  const [name, setName] = useState('');
  const [color, setColor] = useState('red');

  const createTag = useCreateTagNote();
  const noteMetaData = useNoteMetaData(noteId);

  // useEffect(() => {
  //   if (noteMetaData.data) {
  //     const noteData: Note = noteMetaData.data as Note;
  //     setTags(noteData?.tags ?? []);
  //   }
  // }, [noteMetaData.data]);

  const handleCreateAndAssignTag = async (data: CreateTag) => {
    try {
      if (tags.length === 0) {
        const noteData : Note = noteMetaData.data as Note;
        setTags(noteData?.tags ?? []);
      }
      console.log(data);
      const tag : TagType = await createTag.mutateAsync({noteId, data});
      setTags((prev) => [...prev, tag]);
      setName("");
    } catch (err) {
      console.error("Error while creating a tag:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Tag management</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Current tags</h3>
            {tags.length > 0 ? (
              <div className="relative mr-4">
                <div className="hide-scrollbar relative flex gap-2 overflow-x-auto pl-4">
                  {tags.map((tag, index) => (
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

          <div className="pt-2 border-t">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Create a new tag</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateAndAssignTag({name, color});
              }}
              className="flex gap-2"
            >
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <Select value={color} onValueChange={setColor}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  {availableColors.map(({label, value}) => (
                    <SelectItem key={value} value={value}>
                      <div className={cn(`w-3 h-3 rounded-xl`, tagMap[value as TagColor])}>
                      </div>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="submit">Create</Button>
            </form>
          </div>
        </div>
        {/*<DialogFooter>*/}
        {/*  <DialogClose>Cancel</DialogClose>*/}
        {/*  <Button type="submit" variant="submit" onClick={handleCreateAndAssignTag({name, color})}>*/}
        {/*  </Button>*/}
        {/*</DialogFooter>*/}
      </DialogContent>
    </Dialog>
  );
}
