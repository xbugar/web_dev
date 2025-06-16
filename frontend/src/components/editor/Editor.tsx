import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, Strikethrough, Underline, List, ListOrdered } from 'lucide-react';
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import { Underline as UnderlineTiptap } from '@tiptap/extension-underline';
import { useCallback, useEffect, useState } from 'react';
import { Markdown } from 'tiptap-markdown';
import { useEditNoteContent } from '@/hooks/note/useEditNoteCotent';
import { useNoteContent } from '@/hooks/note/useNoteContent';
import HardBreak from '@tiptap/extension-hard-break';
import { CornerDownLeft } from "lucide-react";
import { ContainerLoading } from '../loading/ContainerLoading';


type EditorProps = {
  noteId: string;
  notebookId: string;
};

const Editor = ({ noteId, notebookId }: EditorProps) => {
  const [, setEditorContent] = useState('');

  const { data: noteData, isLoading } = useNoteContent(notebookId, noteId);
  const editNoteContent = useEditNoteContent({ id: notebookId });

  const editor = useEditor({
    extensions: [StarterKit, UnderlineTiptap, BulletList, ListItem, OrderedList, Markdown, HardBreak],

    content: ' ',
    onUpdate: ({ editor }) => {
      setEditorContent(editor.storage.markdown.getMarkdown());
    },
  });

  useEffect(() => {
    if (editor && noteData) {
      editor.commands.setContent(noteData.content);
    }
  }, [editor, noteData]);


  const handleSave = useCallback(() => {
    if (!editor) return;

    editNoteContent.mutate({
      noteId: noteId,
      content: editor.storage.markdown.getMarkdown(),
    });
  }, [editor, noteId, editNoteContent]);
  // ...existing code...

  useEffect(() => {
    const interval = setInterval(() => {
      handleSave();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [editor, noteId, handleSave]);

  if (!editor) {
    return null;
  }

  if (isLoading) {
    return <ContainerLoading />;
  }

  return (
    <>
      <div className="mb-20">
        <EditorContent editor={editor} className="flex-1 rounded border-0 p-0 focus:outline-none" />
      </div>

        {/* Toolbar */}
        <div className="fixed bottom-0 left-0 right-0 flex w-full justify-center gap-4 border-t p-2 bg-white dark:bg-black">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`rounded p-2 ${editor.isActive('bold') ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
          >
            <Bold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`rounded p-2 ${editor.isActive('italic') ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
          >
            <Italic />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`rounded p-2 ${editor.isActive('strike') ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
          >
            <Strikethrough />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`rounded p-2 ${editor.isActive('underline') ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
          >
            <Underline />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`rounded p-2 ${editor.isActive('bulletList') ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
          >
            <List />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`rounded p-2 ${editor.isActive('orderedList') ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
          >
            <ListOrdered />
          </button>

          <button onClick={() => editor.chain().focus().setHardBreak().run()}>
            <CornerDownLeft />
          </button>




        </div>

    </>
  );
};

export default Editor;
