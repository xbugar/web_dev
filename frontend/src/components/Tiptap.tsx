import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, Strikethrough, Heading1, Heading2, Underline } from 'lucide-react'
import { Underline as UnderlineTiptap } from '@tiptap/extension-underline'
import { useScroll } from "framer-motion";
import { useState } from "react";
import { Markdown } from "tiptap-markdown";




const Tiptap = () => {
  const [editorContent, setEditorContent] = useState('')

  const editor = useEditor({
    extensions:  [StarterKit, UnderlineTiptap, Markdown],
    content: '',
    onUpdate: ({ editor }) => {
      setEditorContent(editor.storage.markdown.getMarkdown())
    }
  })


  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Toolbar */}
      <div className="flex justify-center gap-10 border-b p-2">
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
      </div>
      <EditorContent editor={editor} className="focus:outline-none border-0 p-0 rounded" />
    </div>
  )
}



export default Tiptap
