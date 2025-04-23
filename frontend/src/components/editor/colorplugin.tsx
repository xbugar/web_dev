

export const InsertRedTextButton = ({ editorRef }) => {
  const insertColorText = () => {
    const editor = editorRef.current.getInstance();
    const selectedText = editor.getSelection();
    const markdown = editor.getMarkdown();
    const newMarkdown = markdown.replace(
      markdown.substring(selectedText[0], selectedText[1]),
      `<span style="color:red;">${markdown.substring(selectedText[0], selectedText[1])}</span>`
    );
    editor.setMarkdown(newMarkdown);
  };

  return (
    <button
      onClick={insertColorText}
      className="ml-2 px-2 py-1 border rounded bg-red-100 text-red-700"
    >
      Red Text
    </button>
  );
};