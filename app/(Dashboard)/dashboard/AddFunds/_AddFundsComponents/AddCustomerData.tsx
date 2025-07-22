import React from "react";
import AddForm from "./AddForm";
import PaymentDetails from "./PaymentDetails";

const AddCustomerData = () => {
  return (
    <div className="border-0 border-black grid grid-cols-12 px-2">
      <div className="col-span-12 md:col-span-5 lg:col-span-5 ">
        <AddForm />
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-7 bg-slate-100 md:mr-4 lg:mr-4 py-5 relative">
        <PaymentDetails />
      </div>
    </div>
  );
};

export default AddCustomerData;
