import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import { axiosInstance } from "../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function EditBlog() {
    const {id} = useParams()
    const [postdata,setPostData] = useState(null)
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const quillRef = useRef(null);
  const textEditorRef = useRef(null);
  const {loading,error,data,apiCall} = useAxios()
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

  useEffect(()=>{
    apiCall(`/post/${id}`)
  },[])

  useEffect(()=>{
    if (data?.success) {
        const { title, category, thumbnail, content } = data.post;
        setTitle(title);
        setCategory(category);
        setThumbnail(thumbnail);
        
  
       
        if (content) {
          const deltaContent = JSON.parse(content); 
          textEditorRef.current.setContents(deltaContent);
        }
        return;
      }
if(error){
    toast.error(error)
}
  },[data,error])
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!title || !category || !thumbnail) {
    //   toast.error("Fill All Fields");
    //   return;
    // }
    const editorContent = textEditorRef.current;
    const { ops } = editorContent.getContents();
    console.log(ops, "ksksk");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("thumbnail", thumbnail);
    formData.append("content", JSON.stringify(ops));
    formData.append('postId',id)

    try {
      const response = await axiosInstance.put("/editpost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { success, message } = response.data;
      if (success && message === "blog created") {
        toast.success("blog created");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="mt-[5.1rem] w-full flex justify-center items-center ">
        <form
          action=""
          className=" w-1/2  flex flex-col gap-3 justify-center  "
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
            className=" border-2 border-black h-[15rem] overflow-y-scroll"
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

export default EditBlog;
