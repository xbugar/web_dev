import '@toast-ui/editor/dist/toastui-editor.css'; // base styles
import { Editor } from '@toast-ui/react-editor';
import React, { useRef } from 'react';
import { InsertRedTextButton } from './colorplugin';

const MarkdownEditor = () => {
  const editorRef = useRef();

  const handleSave = () => {
    const markdown = editorRef.current.getInstance().getMarkdown();
    console.log('Markdown output:', markdown);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <Editor
        ref={editorRef}
        initialValue="Hello, Markdown!"
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
      <InsertRedTextButton editorRef={editorRef} />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default MarkdownEditor;