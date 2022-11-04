import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill/lib";

const modules = {
  toolbar: [
    ["bold", "italic", "link", "strike", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }, "blockquote"],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ align: [] }],
  ],
};

const RichTextEditorQuill = ({ getValue }) => {
  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      onChange={(value) => getValue(value)}
    />
  );
};

export default RichTextEditorQuill;
