import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import "quill/dist/quill.snow.css";

function Blog() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axiosInstance.get(`/post/${id}`);
        const { post } = response.data;
        const delta = JSON.parse(post.content);
        const convertor = new QuillDeltaToHtmlConverter(delta, {});
        const html = convertor.convert();
        console.log(html);
        const sanitizeContent = DOMPurify.sanitize(html);
        console.log(sanitizeContent);
        setData(post);
        setHtmlContent(sanitizeContent);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    getPost();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full mt-[6.5rem]">
        <div className="ql-editor">{parse(htmlContent)}</div>
      </div>
    </>
  );
}

export default Blog;
