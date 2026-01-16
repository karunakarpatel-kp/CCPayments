"use client";

import { getUserEnteredLoginDetails } from "app/Slices/loginSlice";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const LoginCreds = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();

  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passWordRef = useRef<HTMLInputElement | null>(null);

  const onSubmitClickHandler = () => {
    const loginCred = {
      userName: userNameRef.current!.value,
      passWord: passWordRef.current!.value,
    };
    dispatch(getUserEnteredLoginDetails(loginCred));
    navigate.push("/dashboard/Utility");
  };

  return (
    <section className="w-full flex h-full">
      <div className="w-full mt-5 md:mt-32 lg:mt-32">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold italic mb-5 md:mb-14 lg:mb-14 text-brandColor mx-6 text-center md:text-left lg:text-left">
          Login
        </h1>
        <div className="w-5/6 mx-6 my-3">
          <label className="text-lg md:text-xl lg:text-xl pb-3 font-medium text-brandColor">UserName</label>
          <input
            name="userName"
            type="text"
            ref={userNameRef}
            placeholder="Enter Your UserName"
            className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-base md:text-lg lg:text-lg mt-2"
          />
        </div>
        <div className="w-5/6 mx-6 mt-5">
          <label className="text-lg md:text-xl lg:text-xl pb-3 font-medium text-brandColor"> Password</label>
          <input
            name="password"
            type="password"
            ref={passWordRef}
            placeholder="Enter Your Password"
            className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-base md:text-lg lg:text-lg mt-2"
          />
        </div>
        <div className="w-3/6 mx-6 mt-8">
          <button
            onClick={onSubmitClickHandler}
            type="submit"
            className=" bg-brandColor text-white w-3/6 px-5 py-2 text-base md:text-lg lg:text-lg rounded-sm hover:bg-slate-200 hover:text-brandColor "
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginCreds;
