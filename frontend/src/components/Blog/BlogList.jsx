import React from "react";
import { Link } from "react-router-dom";

function BlogList({ post }) {
  

  return (
    <Link to={`/fullarticle/${post._id}`} className="w-[70%]">
      <div className="border-2 border-gray-200 h-full flex items-center gap-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-200 ease-in-out p-4 bg-white cursor-pointer">
        <div className="w-[75%]">
          <h1 className="font-bold text-xl text-gray-800 mb-2 line-clamp-1">{post?.title}</h1>
          <p className="text-md font-medium text-gray-600 line-clamp-2">
            {post?.description}
          </p>
        </div>
    
        <div className="w-[25%] flex justify-center items-center">
          <img
            src={post?.thumbnail}
            alt="Blog Thumbnail"
            className="rounded-md object-cover w-full h-[120px] shadow-sm"
          />
        </div>
      </div>
    </Link>
    
  
  );
}

export default BlogList;
