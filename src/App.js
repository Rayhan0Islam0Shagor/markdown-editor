import * as React from "react";
import Container from "@mui/material/Container";
import "./App.css";
import JoditEditor from "jodit-react";
import { Box } from "@mui/material";

function App() {
  const editor = React.useRef(null);
  const [content, setContent] = React.useState("");
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ content", content);

  return (
    <Container>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />

      <Box dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}

export default App;
