import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const PaymentDetails = () => {
  return (
    <div>
      <h4 className="text-xl md:text-3xl lg:text-3xl text-brandColor font-semibold text-center italic underline underline-offset-8 decoration-dotted">
        Payment Details
      </h4>
      <div className="amount text-center flex justify-center align-middle md:absolute md:top-[45%] md:right-[40%] ">
        <h5 className="text-3xl md:text-5xl lg:text-5xl text-brandColor font-semibold m-0 py-4">
          <FaRupeeSign className="text-brandColor inline-block font-normal mr-2 -mt-1 animate-pulse text-2xl md:text-4xl lg:text-4xl" />
          1934.38
        </h5>
      </div>

      <div className=" m-auto w-full border-0 text-center md:absolute md:bottom-8">
        <button
          type="submit"
          className=" bg-brandColor text-white w-3/6 md:w-2/6 lg:w-2/6 px-5 py-2 text-lg  hover:bg-slate-200 hover:text-brandColor rounded-md shadow-lg"
        >
          Add Money
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
