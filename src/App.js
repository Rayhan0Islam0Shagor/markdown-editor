import * as React from "react";
import Container from "@mui/material/Container";
import "./App.css";
import JoditEditor from "jodit-react";
import { Box } from "@mui/material";

function App() {
  const editor = React.useRef(null);
  const [content, setContent] = React.useState("");

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
      uploader: {
        url: "https://xdsoft.net/jodit/connector/index.php?action=fileUpload",
      },
    }),
    []
  );

  return (
    <Box
      sx={{
        padding: "2rem 0",
      }}
    >
      <Container>
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
          config={editorConfig}
        />

        <Box sx={{ p: 2, bgcolor: "grey.300" }}>
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Box>
      </Container>
    </Box>
  );
}

export default App;

// buttons: [
//   "bold",
//   "italic",
//   "underline",
//   "strikethrough",
//   "|",
//   "ul",
//   "ol",
//   "|",
//   "outdent",
//   "indent",
//   "|",
//   "font",
//   "fontsize",
//   "brush",
//   "paragraph",
//   "|",
//   "image",
//   "file",
//   "video",
//   "table",
//   "link",
//   "|",
//   "align",
//   "undo",
//   "redo",
//   "hr",
//   "eraser",
//   "copyformat",
//   "symbol",
//   "fullsize",
//   "print",
//   "cut",
//   "selectall",
// ],
// }}
