import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate ,Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { loading, error, data, apiCall } = useAxios();
  useEffect(() => {
    if (data?.success) {
      toast.success(data?.message);
      localStorage.setItem("user", JSON.stringify(data?.user));
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2500);
      return;
    }
    if (error) {
      toast.error(error);
    }
  }, [data, error]);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("please fill all fields");
      return;
    }
    apiCall("/login", { method: "post", data: formData });
  };
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col h-1/2  w-1/3 border-2 shadow-md rounded-lg border-blue-600 items-center bg-white pt-[1rem] gap-[1rem] ">
        <h1 className="text-center text-lg font-semibold">Get Started</h1>
        <form action="" className=" w-full " onSubmit={handleLogin}>
          <div className="w-full  flex flex-col items-center gap-[2rem] ">
            <div className=" w-[75%] ">
              <label htmlFor="">email</label>
              <input
                type="text"
                name=""
                id=""
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="outline-none border-2 border-black p-2 w-full h-[2.7rem] rounded-md focus:border-blue-500"
              />
            </div>
            <div className=" w-[75%] ">
              <label htmlFor="">password</label>
              <input
                type="password"
                name=""
                id=""
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="outline-none border-2 border-black p-2 w-full h-[2.7rem] rounded-md focus:border-blue-500"
              />
            </div>
            <div className=" w-[75%] ">
              <button className="bg-[#1570EF] w-full p-2 rounded-md text-white">
                {loading ? "..." : "Login"}
              </button>
            </div>
          </div>
        </form>
        <Link to={'/signup'}>signup</Link>
      </div>
    </div>
  );
}

export default Login;
