import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Preview = ({ value, markdown }) => {
  return (
    <Box sx={{ padding: "10px 20px 60px 20px", bgcolor: "grey.300" }}>
      <h3
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "black",
          padding: "10px",
        }}
      >
        Preview
      </h3>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={value} />
    </Box>
  );
};

export default Preview;
