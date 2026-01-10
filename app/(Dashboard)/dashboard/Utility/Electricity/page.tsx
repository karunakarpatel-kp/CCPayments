import React, { Suspense } from "react";
import { FaTruckLoading } from "react-icons/fa";
import ElectricityComponent from "./_electricityComponents/electricityComponent";

const UtilityPage = () => {
  return (
    <section>
      <h4 className="text-brandColor text-xl md:text-2xl lg:text-2xl text-center md:text-left lg:text-left italic border-0 border-black mt-3 px-2">
        Pay Electricity Bill
      </h4>
      <div>
        <ElectricityComponent />
      </div>
    </section>
  );
};

export default UtilityPage;
