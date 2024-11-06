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
  const [allData,setAllData] = useState(null)
  const [mainContent, setMainContet] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axiosInstance.get(`/post/${id}`);
        const { post } = response.data;
        console.log(post);
        
        setAllData(post)
        const delta = JSON.parse(post.content);
        const convertor = new QuillDeltaToHtmlConverter(delta, {});
        const html = convertor.convert();
        const sanitizeContent = DOMPurify.sanitize(html);
        setMainContet(post);
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
      <div className="w-full mt-[6.5rem] flex flex-col justify-center items-center gap-[3rem]">
      { allData && <><div className="w-full flex justify-center" ><img src={allData?.thumbnail} alt="" className="w-1/2  object-fit" /></div>
        <div className="w-1/2"><h1 className="text-4xl font-bold break-words">{allData?.title}</h1></div></>}
        <div className="ql-editor w-[70%]">{parse(htmlContent)}</div>
      </div>
    </>
  );
}

export default Blog;
