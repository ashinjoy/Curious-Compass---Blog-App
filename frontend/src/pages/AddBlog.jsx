import Navbar from "../components/navbar/Navbar";

function AddBlog() {
  return (
    <>
      <Navbar />
      <div className="mt-[6.4rem] w-full  flex justify-center gap-[4rem]">
        <div className="w-1/3 h-[80dvh] flex flex-col gap-[1rem]">
          <div className="w-full flex items-center gap-[1rem]">
            <h1 className="text-6xl font-medium">Add</h1>
            <span className="text-6xl font-medium text-[#1570EF]">Blog</span>
          </div>
          <div className="w-[100%] h-[100%]">
            <img
              src="/blog.webp"
              alt=""
              className="w-[100%] h-[100%] object-contain rounded-lg"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-3 justify-center ">
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="">Cover Photo</label>
            <input type="file" name="" id="" className="" />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name=""
              id=""
              className="w-full outline-none border-2 border-black rounded-md h-[3rem]"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              name=""
              id=""
              className="w-full h-[9rem] outline-none border-2 border-black"
            />
          </div>
          <button className="bg-[#1570EF] p-2 w-full rounded-md text-white font-medium ">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default AddBlog;
