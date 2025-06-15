import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, Strikethrough, Underline, List, ListOrdered, CornerDownLeft } from 'lucide-react';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import { Underline as UnderlineTiptap } from '@tiptap/extension-underline';
import { useCallback, useEffect, useState } from 'react';
import { Markdown } from 'tiptap-markdown';
import { useEditNoteContent } from '@/hooks/useEditNoteCotent.ts';
import { useNoteContent } from '@/hooks/useNoteContent.ts';
import HardBreak from '@tiptap/extension-hard-break';

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
      noteId,
      content: editor.storage.markdown.getMarkdown(),
    });
  }, [editor, noteId, editNoteContent]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSave();
    }, 2000);
    return () => clearInterval(interval);
  }, [handleSave]);

  if (!editor) return null;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex">
      {/* Toolbar */}
      <div
        className="flex w-full justify-center gap-4 border-t p-2 bg-white dark:bg-black fixed bottom-0 left-0 right-0 z-10
          lg:fixed
          lg:top-1/2
          lg:right-4
          lg:translate-y-[-50%]
          lg:left-auto
          lg:bottom-auto
          lg:flex-col
          lg:justify-start
          lg:items-center
          lg:gap-3
          lg:w-16
          lg:rounded-md
          lg:shadow-md
          lg:border
          lg:border-gray-200
          dark:lg:border-gray-800">

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
        <button onClick={() => editor.chain().focus().setHardBreak().run()} className="rounded p-2">
          <CornerDownLeft />
        </button>
      </div>

      {/* Editor Content */}
      <div className="mt-4 mb-20 lg:mb-0 flex-1 overflow-auto lg:overflow-y-auto lg:h-[calc(100vh-4rem)]"
           style={{
             scrollbarWidth: 'none',
             msOverflowStyle: 'none'
           }}>
        <EditorContent editor={editor} className="lg:flex-col lg:max-w-[calc(100vw-24rem)] w-full h-full rounded border-0 focus:outline-none"/>
      </div>
    </div>
  );
};

export default Editor;
