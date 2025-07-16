import React from "react";
import AddForm from "./AddForm";
import PaymentDetails from "./PaymentDetails";

const AddCustomerData = () => {
  return (
    <div className="border-0 border-black grid grid-cols-12 px-2">
      <div className=" col-span-5 ">
        <AddForm />
      </div>
      <div className="col-span-7 bg-slate-100 mr-4 relative">
        <PaymentDetails />
      </div>
    </div>
  );
};

export default AddCustomerData;
