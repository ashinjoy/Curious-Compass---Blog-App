import  { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import BlogList from "../components/Blog/BlogList";
import { axiosInstance } from "../utils/axios";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";


function AllBlogList() {
  const [allposts, setPosts] = useState(null);
  const {loading,data,error,apiCall} =  useAxios()
  console.log(loading);
  
  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        apiCall("/allposts")
        // const response = await axiosInstance.get("/allposts");
        // const { success, message, posts } = response.data;

        // setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    };
    getAllBlogs();
  }, []);

  useEffect(()=>{
    if(data?.success){
      setPosts(data?.posts)
      console.log(data.posts);
      
      return
    }
    if(error){
      toast.error(error)
    }
console.log('loading',loading);

  },[data,error,loading])
  return (
    <>
      <Navbar />
      {loading ? (<div className="mt-[19rem]">..........Loading</div>) : 
     ( <div className="mt-[6rem] w-full flex flex-col items-center gap-[2rem]">
        {allposts &&
          allposts.length > 0 &&
          allposts.map((post) => {
            return <BlogList key={post._id} post={post} />;
          })}
      </div>)}
    </>
  );
}

export default AllBlogList;
