import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import { axiosInstance } from "../utils/axios";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const quillRef = useRef(null);
  const textEditorRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!textEditorRef.current) {
      const options = {
        modules: {
          toolbar: [
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic"],
            ["link", "blockquote", "code-block", "image"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        },
        placeholder: "Title........",
        theme: "snow",
      };
      textEditorRef.current = new Quill(quillRef.current, options);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category || !thumbnail) {
      toast.error("Fill All Fields");
      return;
    }
    const editorContent = textEditorRef.current;
    const { ops } = editorContent.getContents();
    console.log(ops, "ksksk");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("thumbnail", thumbnail);
    formData.append("content", JSON.stringify(ops));

    try {
      const response = await axiosInstance.post("/createpost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { success, message } = response.data;
      if (success && message === "blog created") {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="mt-[5.1rem] w-full flex justify-center items-center h-[60dvh]">
        <form
          action=""
          className=" w-1/2  flex flex-col gap-3 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            autoFocus
            className="outline-none border-2 border-black p-1 placeholder:text-black "
            placeholder="  Title........."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            name=""
            id=""
            className="border-2 border-black"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value={"Technology"}>Technology</option>
            <option value={"General"}>General</option>
          </select>
          <div
            className=" border-2 border-black"
            id="editor"
            ref={quillRef}
          ></div>
          <input
            type="file"
            name=""
            id=""
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
          <button className="p-2 bg-[#1570EF] text-white rounded-sm">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBlog;
