import React from "react";
import { Link } from "react-router-dom";

function BlogList({ post }) {
  

  return (
    <div className="w-[70%] border-2 border-black h-full flex items-center gap-[2rem]">
      <div className="w-[70%]">
        <h1 className="font-bold text-lg">{post?.title}</h1>
        <p className="text-md font-medium">
          JavaScript can be a little tricky sometimes, even when you’re dealing
          with simple-looking problems.
        </p>
      </div>
      <div className="w-[30%]">
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
