import * as React from "react";
import Container from "@mui/material/Container";
import "./App.css";
import JoditEditor from "jodit-react";
import { Box } from "@mui/material";
import RichTextEditorJodit from "./Components/RichTextEditorJodit";

function App() {
  const [value, setValue] = React.useState("");
  const getValue = (value) => {
    setValue(value);
  };

  // const editor = React.useRef(null);
  // const [content, setContent] = React.useState("");

  // const editorConfig = React.useMemo(
  //   () => ({
  //     readonly: false,
  //     toolbarSticky: false,
  //     toolbarButtonSize: "small",
  //     toolbar: true,
  //     buttons: [
  //       "bold",
  //       "italic",
  //       "underline",
  //       "strikethrough",
  //       "|",
  //       "ul",
  //       "ol",
  //       "|",
  //       "outdent",
  //       "indent",
  //       "|",
  //       "font",
  //       "fontsize",
  //       "brush",
  //       "paragraph",
  //       "|",
  //       "align",
  //       "undo",
  //       "redo",
  //     ],
  //     uploader: {
  //       url: "https://xdsoft.net/jodit/connector/index.php?action=fileUpload",
  //     },
  //   }),
  //   []
  // );

  return (
    <Box
      sx={{
        padding: "2rem 0",
      }}
    >
      <Container>
        <RichTextEditorJodit initialValue="" getValue={getValue} />

        <Box sx={{ p: 2, bgcolor: "grey.300" }}>
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{ __html: value }} />
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
