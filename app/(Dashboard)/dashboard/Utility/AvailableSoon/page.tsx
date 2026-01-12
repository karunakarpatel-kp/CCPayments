"use client";
import { useRouter } from "next/navigation";
import AvailableSoonComponent from "./_availableSoonComponents/AvailableSoonComponent";

const WaterPage = () => {
  const navigate = useRouter();
  const onGoBackClickHander = () => {
    navigate.back();
  };
  return (
    <section>
      <div className="flex ">
        <div className="flex-grow">
          <h4 className="text-brandColor text-xl md:text-2xl lg:text-2xl text-center md:text-left lg:text-left italic border-0 border-black mt-3 px-2">
            Feature Available Soon Page
          </h4>
        </div>
        <div className="getBack pt-3 pr-5">
          <button type="submit" className=" px-4 py-2 bg-slate-300" onClick={onGoBackClickHander}>
            Get Back
          </button>
        </div>
      </div>

      <div className=" bg-slate-100 text-center w-full py-16 text-2xl text-brandColor italic font-semibold mt-3 underline underline-offset-8">
        {/* <AvailableSoonComponent /> */}
        Feature Available Soon
      </div>
    </section>
  );
};

export default WaterPage;
