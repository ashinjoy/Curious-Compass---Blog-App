import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-[5rem] bg-[#1570EF] flex justify-around items-center fixed inset-0 z-40">
      <div className="text-white flex gap-[3rem]">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/add-blog"}>Add Blog</NavLink>
        <NavLink to={"/myblogs"}>Profile</NavLink>
      </div>
      <div className="text-white flex gap-[2rem]">
        <NavLink>
          <form
            action="" 
            className=" flex w-[20rem] h-[2.5rem]  rounded-xl "
          >
            <input type="text" name="" id="" className="w-[100%] h-[100%] rounded-xl bg-inherit border-2 border-white  outline-none pl-4 pt-[0.5] placeholder:text-white" placeholder="search"  />
          </form>
        </NavLink>
        <div className="w-[2rem] h-[2rem] h rounded-full bg-white"></div>
      </div>
    </div>
  );
}

export default Navbar;
