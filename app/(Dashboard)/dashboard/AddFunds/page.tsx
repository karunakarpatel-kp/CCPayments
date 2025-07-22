import React, { Suspense } from "react";
import { FaTruckLoading } from "react-icons/fa";
import AddCustomerData from "./_AddFundsComponents/AddCustomerData";

const AddFunds = () => {
  return (
    <section>
      <h4 className="text-brandColor text-2xl italic border-0 border-black mt-3 px-2">Add Funds</h4>
      <div>{/* <AddCustomerData /> */}</div>
    </section>
  );
};

export default AddFunds;
