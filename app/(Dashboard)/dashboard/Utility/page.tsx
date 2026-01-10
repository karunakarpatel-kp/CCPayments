import React, { Suspense } from "react";
import { FaTruckLoading } from "react-icons/fa";
import BillServiceContainer from "./_UtilityComponents/BillServiceContainer";

const UtilityPage = () => {
  return (
    <section>
      <h4 className="text-brandColor text-xl md:text-2xl lg:text-2xl text-center md:text-left lg:text-left italic border-0 border-black mt-3 px-2">
        Select a Bill Service.
      </h4>
      <div>
        <BillServiceContainer />
      </div>
    </section>
  );
};

export default UtilityPage;
