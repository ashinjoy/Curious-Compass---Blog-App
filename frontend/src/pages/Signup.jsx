import { useState } from "react";
import toast from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
function Signup() {
  const [formInput, setFormInput] = useState({
    uname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate()
  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      !formInput.uname.trim() ||
      !formInput.email.trim() ||
      !formInput.password.trim() ||
      !formInput.cpassword.trim()
    ) {
      toast.error("This is an error!");
      return;
    }
    try {
      const response = await axiosInstance.post("/signup", {
        ...formInput,
        confirmPassword: formInput.cpassword,
      });
      const {success,message} = response.data
      if(success && message === 'signup success'){
        toast.success('signup success')
        setTimeout(()=>{
          navigate('/login')
        },2500)
      }
    } catch (error) {
      console.error('error in ',error);
      toast.error(error?.response?.data?.message)
    }
   
    
  };
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col h-[85%]  w-1/3 border-2 shadow-md rounded-lg border-blue-600 items-center bg-white pt-[1rem] gap-[1rem] ">
        <h1 className="text-center text-lg font-semibold">Get Started</h1>
        <form action="" className="w-full" onSubmit={handleSignup}>
          <div className="w-full  flex flex-col items-center gap-[2rem] ">
            <div className=" w-[75%] ">
              <label htmlFor="">uname</label>
              <input
                type="text"
                name=""
                id=""
                className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500 p-2"
                value={formInput.uname}
                onChange={(e) =>
                  setFormInput({ ...formInput, uname: e.target.value })
                }
              />
            </div>
            <div className=" w-[75%] ">
              <label htmlFor="">email</label>
              <input
                type="text"
                name=""
                id=""
                value={formInput.email}
                onChange={(e) =>
                  setFormInput({ ...formInput, email: e.target.value })
                }
                className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500 p-2"
              />
            </div>
            <div className=" w-[75%] ">
              <label htmlFor="">password</label>
              <input
                type="password"
                name=""
                id=""
                value={formInput.password}
                onChange={(e) =>
                  setFormInput({ ...formInput, password: e.target.value })
                }
                className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500 p-2"
              />
            </div>
            <div className=" w-[75%] ">
              <label htmlFor="">confirm password</label>
              <input
                type="password"
                name=""
                id=""
                value={formInput.cpassword}
                onChange={(e) =>
                  setFormInput({ ...formInput, cpassword: e.target.value })
                }
                className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500 p-2"
              />
            </div>
            <div className=" w-[75%] ">
              <button className="bg-[#1570EF] w-full p-2 rounded-md text-white">
                Signup
              </button>
            </div>
            <Link to={"/login"}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
