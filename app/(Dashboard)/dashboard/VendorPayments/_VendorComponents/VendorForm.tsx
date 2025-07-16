import React from "react";

const VendorForm = () => {
  return (
    <>
      <section className="w-full px-2 grid grid-cols-12">
        <div className="w-full col-span-6">
          <div className="w-5/6 mx-1 my-3">
            <label className="text-xl pb-3 font-medium text-brandColor"> Enter Amount</label>
            <input
              name="amount"
              type="number"
              placeholder="Enter Amount"
              className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
            />
          </div>
          <div className="w-5/6 mx-1 mt-5">
            <label className="text-xl pb-3 font-medium text-brandColor"> Enter IFSC Code</label>
            <input
              name="IFSC Code"
              type="text"
              placeholder="Enter Your IFSC Code"
              className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
            />
          </div>
          <div className="w-5/6 mx-1 my-3">
            <label className="text-xl pb-3 font-medium text-brandColor"> Enter Name</label>
            <input
              name="name"
              type="text"
              step={1.0}
              placeholder="Enter Name"
              className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
            />
          </div>
          {/* <div className="w-3/6 mx-1 mt-6">
          <button
            // onClick={onSubmitClickHandler}
            type="submit"
            className=" bg-brandColor text-white w-3/6 px-5 py-2 text-lg rounded-sm hover:bg-slate-200 hover:text-brandColor "
          >
            Submit
          </button>
        </div> */}
        </div>
        <div className="w-full col-span-6">
          <div className="w-5/6 mx-1 my-3">
            <label className="text-xl pb-3 font-medium text-brandColor"> Enter City</label>
            <input
              name="city"
              type="text"
              placeholder="Enter City"
              className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
            />
          </div>
          <div className="w-5/6 mx-1 mt-5">
            <label className="text-xl pb-3 font-medium text-brandColor"> Enter Account Number</label>
            <input
              name="accountNumber"
              type="number"
              placeholder="Enter Account Number"
              className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
            />
          </div>
          <div className="w-5/6 mx-1 my-3">
            <label className="text-xl pb-3 font-medium text-brandColor"> Enter Mobile Number</label>
            <input
              name="mobileNumber"
              type="number"
              step={1.0}
              placeholder="Enter Mobile Number"
              className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
            />
          </div>
        </div>
      </section>
      <div className="mt-6 text-center w-4/6  m-auto">
        <button
          type="submit"
          className="m-auto bg-brandColor text-white  px-6 py-3 text-lg  hover:bg-slate-200 hover:text-brandColor rounded-md shadow-lg"
        >
          Send To Beneficiary
        </button>
      </div>
    </>
  );
};

export default VendorForm;
