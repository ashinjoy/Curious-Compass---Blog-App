import Navbar from "../components/navbar/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="mt-[6.4rem] w-full flex justify-end pr-[4rem] ">
        <div className="flex rounded-md border-2 border-blue-500 p-2 items-center gap-3">
          <button className=" w-fit p-1  text-blue-500 tracking-tighter font-semibold text-base">
            View All Posts
          </button>
          <FaArrowRightLong className="text-blue-500 " />
        </div>
      </div>
      <div className=" w-full   p-[2rem] flex gap-4">
        <div className="w-1/2 h-[36rem] bg-red-500 rounded-2xl">
          <img
            src="/img.jpg"
            alt=""
            className="w-[100%] h-[100%] object-cover rounded-2xl"
          />
        </div>
        <div className="flex-1 bg flex flex-wrap p-1 ">
          <div className=" w-1/2 h-1/2  p-1 ">
            <img src="/img.jpg" alt="" className="w-full h-full rounded-md" />
          </div>
          <div className=" w-1/2 h-1/2  p-1">
            <img src="/img.jpg" alt="" className="w-full h-full rounded-md " />
          </div>
          <div className=" w-1/2 h-1/2  p-1">
            <img src="/img.jpg" alt="" className="w-full h-full rounded-md" />
          </div>{" "}
          <div className=" w-1/2 h-1/2  p-1">
            <img src="/img.jpg" alt="" className="w-full h-full rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
