"use client";
import { useRouter } from "next/navigation";
import BroadBandComponent from "./_broadBandComponents/broadBandComponent";

const BroadbandPage = () => {
  const navigate = useRouter();
  const onGoBackClickHander = () => {
    navigate.back();
  };
  return (
    <section>
      <div className="flex ">
        <div className="flex-grow">
          <h4 className="text-brandColor text-xl md:text-2xl lg:text-2xl text-left ml-3  md:text-left lg:text-left italic border-0 border-black mt-3 px-2">
            Pay Broadband / Landline Bill
          </h4>
        </div>
        <div className="getBack pt-3 pr-5">
          <button type="submit" className="px-4 py-2 bg-slate-300 text-sm " onClick={onGoBackClickHander}>
            Get Back
          </button>
        </div>
      </div>

      <div className="">
        <BroadBandComponent />
      </div>
    </section>
  );
};

export default BroadbandPage;
