import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const RichTextEditorJodit = ({ initialValue, getValue }) => {
  const editor = useRef(null);

  const editorConfig = React.useMemo(
    () => ({
      readonly: false,
      toolbarSticky: false,
      toolbarButtonSize: "small",
      toolbar: true,
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "ul",
        "ol",
        "|",
        "outdent",
        "indent",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "align",
        "undo",
        "redo",
      ],
      //   uploader: {
      //     url: "https://xdsoft.net/jodit/connector/index.php?action=fileUpload",
      //   },
    }),
    []
  );

  return (
    <JoditEditor
      ref={editor}
      value={initialValue}
      config={editorConfig}
      tabIndex={1}
      onChange={(newContent) => getValue(newContent)}
    />
  );
};

export default RichTextEditorJodit;
