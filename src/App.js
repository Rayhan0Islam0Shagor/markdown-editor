import * as React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import RichTextEditorJodit from "./Components/RichTextEditorJodit";
import RichTextEditorQuill from "./Components/RichTextEditorQuill";

function App() {
  const [value, setValue] = React.useState("");
  const getValue = (value) => {
    setValue(value);
  };

  return (
    <Box
      sx={{
        padding: "2rem 0",
      }}
    >
      <Container>
        {/* I am using Jodit Editor
        <RichTextEditorJodit initialValue="" getValue={getValue} /> */}
        <Box
          sx={{
            padding: "2rem 0",
          }}
        >
          I am using Quill Editor
          <RichTextEditorQuill initialValue="" getValue={getValue} />
        </Box>
        <Box sx={{ p: 2, bgcolor: "grey.300" }}>
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
