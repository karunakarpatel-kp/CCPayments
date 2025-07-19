import React from "react";

const RegisterCred = () => {
  return (
    <section className="w-full flex h-full">
      <div className="w-full mt-10 md:mt-32 lg:mt-32">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold italic mb-14 text-brandColor mx-6 ">
          Registration
        </h1>
        <div className="w-5/6 mx-6 my-32 text-brandColor text-3xl md:text-5xl lg:text-5xl italic text-center">
          Will Be Available Soon
        </div>
        <div className="w-full md:w-3/6 lg:w-3/6 text-center  md:mx-6 lg:mx-6 mt-10 md:mt-64 lg:mt-64">
          <button
            type="submit"
            className=" bg-brandColor text-white w-3/6 px-5 py-2 text-lg rounded-sm hover:bg-slate-200 hover:text-brandColor "
          >
            Back To Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterCred;
