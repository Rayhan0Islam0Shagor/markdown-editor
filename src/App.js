import * as React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TurndownService from "turndown";
import MarkDownEditor from "./Components/RMEditor";

function App() {
  const [value, setValue] = React.useState({
    text: "",
    html: "",
  });

  const turndownService = new TurndownService();
  const markdown = turndownService.turndown(value.html);

  const downloadAsMdFile = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    const filename = `${new Date().toLocaleString()}.md`;
    element.download = filename;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Box
      sx={{
        padding: "2rem 0",
      }}
    >
      <Container>
        <Box
          sx={{
            padding: "2rem 0",
            position: "relative",
          }}
        >
          <MarkDownEditor setValue={setValue} />
          <Button
            sx={{
              position: "absolute",
              right: "5px",
              bottom: "38px",
              zIndex: "999",
              borderRadius: "0",
            }}
            variant="contained"
            size="small"
            onClick={downloadAsMdFile}
            disabled={markdown.trim() === ""}
          >
            Save
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
