import React from "react";

const LoginCreds = () => {
  return (
    <section className="w-full flex h-full">
      <div className="w-full mt-32">
        <h1 className="text-4xl font-semibold italic mb-14 text-brandColor mx-6 ">Login</h1>
        <div className="w-5/6 mx-6 my-3">
          <label className="text-xl pb-3 font-medium text-brandColor"> UserName</label>
          <input
            name="userName"
            type="text"
            placeholder="Enter Your UserName"
            className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
          />
        </div>
        <div className="w-5/6 mx-6 mt-5">
          <label className="text-xl pb-3 font-medium text-brandColor"> Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
          />
        </div>
        <div className="w-3/6 mx-6 mt-8">
          <button
            type="submit"
            className=" bg-brandColor text-white w-3/6 px-5 py-2 text-lg rounded-sm hover:bg-slate-200 hover:text-brandColor "
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginCreds;
