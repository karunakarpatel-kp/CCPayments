"use client";

import React, { Suspense } from "react";
import { FaTruckLoading } from "react-icons/fa";
import ElectricityComponent from "./_electricityComponents/electricityComponent";
import { useRouter } from "next/navigation";

const UtilityPage = () => {
  const navigate = useRouter();
  const onGoBackClickHander = () => {
    navigate.back();
  };
  return (
    <section>
      <div className="flex ">
        <div className="flex-grow">
          <h4 className="text-brandColor text-xl md:text-2xl lg:text-2xl text-center md:text-left lg:text-left italic border-0 border-black mt-3 px-2">
            Pay Electricity Bill
          </h4>
        </div>
        <div className="getBack pt-3 pr-5">
          <button type="submit" className=" px-4 py-2 bg-slate-300" onClick={onGoBackClickHander}>
            Get Back
          </button>
        </div>
      </div>

      <div className="">
        <ElectricityComponent />
      </div>
    </section>
  );
};

export default UtilityPage;
