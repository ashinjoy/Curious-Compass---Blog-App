
function Login() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col h-1/2  w-1/3 border-2 shadow-md rounded-lg border-blue-600 items-center bg-white pt-[1rem] gap-[1rem] ">
        <h1 className="text-center text-lg font-semibold">Get Started</h1>
        <div className="w-full  flex flex-col items-center gap-[2rem] ">
          <div className=" w-[75%] ">
            <label htmlFor="">email</label>
            <input
              type="text"
              name=""
              id=""
              className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500"
            />
          </div>
          <div className=" w-[75%] ">
            <label htmlFor="">password</label>
            <input
              type="text"
              name=""
              id=""
              className="outline-none border-2 border-black w-full h-[2.7rem] rounded-md focus:border-blue-500"
            />
          </div>
          <div className=" w-[75%] ">
            <button className="bg-[#1570EF] w-full p-2 rounded-md text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

