import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, Strikethrough, Heading1, Heading2, Underline, List, ListOrdered } from 'lucide-react'
import { Underline as UnderlineTiptap } from '@tiptap/extension-underline'
import { useEffect, useState } from "react";
import { Markdown } from "tiptap-markdown";
import { useEditNoteContent } from "@/hooks/useEditNoteCotent.ts";
import { useNoteContent } from "@/hooks/useNoteContent.ts";


type EditorProps = {
  noteId: string
  notebookId: string
}

const Editor = ({ noteId, notebookId }: EditorProps) => {
  const [, setEditorContent] = useState('')

  const { data: noteData, isLoading } = useNoteContent(notebookId, noteId)
  console.log(noteData)
  const editNoteContent = useEditNoteContent({ id: notebookId })

  const editor = useEditor({
    extensions:  [StarterKit, UnderlineTiptap, Markdown],
    content: " ",
    onUpdate: ({ editor }) => {
      setEditorContent(editor.storage.markdown.getMarkdown())
    }
  })

  useEffect(() => {
    if (editor && noteData) {
      editor.commands.setContent(noteData.content)
    }
  }, [editor, noteData])

  const handleSave = () => {
    if (!editor) return

    editNoteContent.mutate({
      noteId: noteId,
      content: editor.storage.markdown.getMarkdown(),
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleSave();
    }, 2000); //every 2 sec

    return () => {
      clearInterval(interval);
    };
  }, [editor, noteId]);

  if (!editor) {
    return null
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex-col mb-20">
        <EditorContent editor={editor} className="flex-1 focus:outline-none border-0 p-0 rounded" />

      {/* Toolbar */}
      <div className="fixed bottom-0 w-full bg-white dark:bg-black flex justify-center gap-4 border-t p-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${editor.isActive('bold') ? 'bg-black dark:bg-white text-white dark:text-black' : ''}`}
        >
          <Bold/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${editor.isActive('italic') ? 'bg-black dark:bg-white text-white dark:text-black' : ''}`}
        >
          <Italic/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded ${editor.isActive('strike') ? 'bg-black dark:bg-white text-white dark:text-black' : ''}`}
        >
          <Strikethrough/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded ${editor.isActive('underline') ? 'bg-black dark:bg-white text-white dark:text-black' : ''}`}
        >
          <Underline />
        </button>
        {/*<button*/}
        {/*  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}*/}
        {/*  className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-black dark:bg-white text-white dark:text-black' : ''}`}*/}
        {/*>*/}
        {/*  <Heading1/>*/}
        {/*</button>*/}
        {/*<button*/}
        {/*  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}*/}
        {/*  className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-black dark:bg-white text-white dark:text-black' : ''}`}*/}
        {/*>*/}
        {/*  <Heading2/>*/}
        {/*</button>*/}

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-black dark:bg-white text-white dark:text-black' : ''}`}
        >
          <List />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-black dark:bg-white text-white dark:text-black' : ''}`}
        >
          <ListOrdered />
        </button>
      </div >
    </div>
  )
}



export default Editor
