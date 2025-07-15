import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";

const Wallet = () => {
  return (
    <div className="wallet border-0 border-slate-800 w-full bg-slate-100 rounded-sm">
      <div className="textFields relative border-0 border-black w-11/12 px-6 py-2 m-0 ">
        <h3 className="text-2xl italic text-brandColor font-semibold m-0 py-2">Wallet Balance</h3>
        <h5 className="text-3xl text-brandColor font-semibold m-0 py-2">
          <FaRupeeSign className="text-brandColor inline-block font-normal mr-2 -mt-1" fontSize={26} />
          1987.78
        </h5>
        <AiOutlineReload
          className=" text-right text-brandColor font-semibold cursor-pointer absolute right-[5%] top-[40%] hover:animate-spin"
          fontSize={28}
        />
      </div>
    </div>
  );
};

export default Wallet;
