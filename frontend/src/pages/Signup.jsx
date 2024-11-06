import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
function Signup() {
  const [formInput, setFormInput] = useState({
    uname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [inputErr, setError] = useState({
    uname: "",
    email: "",
    password: "",
  });
  const { data, loading, error, apiCall } = useAxios();

  useEffect(()=>{
    if(data?.success){
      toast.success(data?.message)
      navigate('/')
      return
    }
    if(error){
      toast.error(error)
    }
  },[data,error])


  const navigate = useNavigate();
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
       apiCall("/signup", {
        method: "post",
        data: { ...formInput, confirmPassword: formInput.cpassword },
      });   
    } catch (error) {
      console.error("error in ", error);
      toast.error(error);
    }
  };
  const handleInput = (e) => {
    if (e.target.id === "uname") {
      const name = e.target.value.trim();
      setFormInput({ ...formInput, uname: e.target.value });
      if (name.length === 0) {
        setError({ ...inputErr, uname: "Enter user name" });
      } else {
        setError({ ...inputErr, uname: "" });
      }
      return;
    }
    if (e.target.id === "email") {
      const email = e.target.value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setFormInput({ ...formInput, email: e.target.value });
      if (email.length === 0) {
        setError({ ...inputErr, email: "Enter email address" });
        return;
      }
      if (!emailRegex.test(e.target.value)) {
        setError({ ...inputErr, email: "Enter valid email address" });
        return;
      }
      setError({ ...inputErr, email: "" });
    }
    if (e.target.id === "password") {
      const password = e.target.value.trim();
      setFormInput({ ...formInput, password: e.target.value });
      if (password.length === 0 || password.length < 6) {
        setError({
          ...inputErr,
          password: "password should consist of atleat 6 characters",
        });
        return;
      }

      setError({ ...inputErr, password: "" });
    }
  };
  return (
    
    <div className="flex w-full h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col   w-1/3  shadow-lg rounded-lg   items-center bg-white pt-[1rem] gap-[1rem] ">
        <h1 className="text-center text-lg font-semibold">Get Started</h1>
        <form action="" className="w-full" onSubmit={handleSignup}>
          <div className="w-full  flex flex-col items-center gap-[2rem] ">
            <div className=" w-[75%] ">
              <label htmlFor="">uname</label>
              <input
                type="text"
                id="uname"
                className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500 p-2"
                value={formInput.uname}
                onChange={handleInput}
              />
              <p className="text-red-500">{inputErr.uname}</p>
            </div>
            <div className=" w-[75%] ">
              <label htmlFor="">email</label>
              <input
                type="text"
                id="email"
                value={formInput.email}
                onChange={handleInput}
                className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500 p-2"
              />
              <p className="text-red-500">{inputErr.email}</p>
            </div>
            <div className=" w-[75%] ">
              <label htmlFor="">password</label>
              <input
                type="password"
                id="password"
                value={formInput.password}
                onChange={handleInput}
                className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500 p-2"
              />
              <p className="text-red-500">{inputErr.password}</p>
            </div>
            <div className=" w-[75%] ">
              <label htmlFor="">confirm password</label>
              <input
                type="password"
                value={formInput.cpassword}
                onChange={(e) =>
                  setFormInput({ ...formInput, cpassword: e.target.value })
                }
                className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500 p-2"
              />
              {/* <p className="text-red-500">{error.cpassword}</p> */}
            </div>
            <div className=" w-[75%] ">
              <button className="bg-[#4664ae] w-full p-2 rounded-md text-white hover:bg-[#1570EF]">
               { loading ? '......' : 'Signup'}
              </button>
            </div>
            <div>
              <span>Already have an account ?</span>{" "}
              <Link to={"/login"} className="hover:text-blue-600">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
