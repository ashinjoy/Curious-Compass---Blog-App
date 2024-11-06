import React from "react";
import { Link } from "react-router-dom";

function BlogList({ post }) {
  

  return (
    <div className="w-[70%] border-2 border-black h-full flex items-center gap-[2rem] rounded-md shadow-md hover:transition-transform">
      <div className="w-[80%]">
        <h1 className="font-bold text-lg">{post?.title}</h1>
        <p className="text-md font-medium">
        </p>
      </div>
      <div className="w-[20%]">
        <img
          src={post?.thumbnail}
          alt=""
          className="w-full h-full object-cover"
        />
        <Link to={`/fullarticle/${post._id}`}>Touch me</Link>
      </div>
    </div>
  );
}

export default BlogList;
