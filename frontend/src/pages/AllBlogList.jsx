import  { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import BlogList from "../components/Blog/BlogList";
import { axiosInstance } from "../utils/axios";


function AllBlogList() {
  const [allposts, setPosts] = useState(null);
  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const response = await axiosInstance.get("/allposts");
        const { success, message, posts } = response.data;

        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    };
    getAllBlogs();
  }, []);
  return (
    <>
      <Navbar />
      <div className="mt-[6rem] w-full flex flex-col items-center gap-[2rem]">
        {allposts &&
          allposts.length > 0 &&
          allposts.map((post) => {
            return <BlogList key={post._id} post={post} />;
          })}
      </div>
    </>
  );
}

export default AllBlogList;
