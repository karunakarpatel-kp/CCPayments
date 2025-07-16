import React from "react";

const AddForm = () => {
  return (
    <section className="w-full flex h-full">
      <div className="w-full">
        <div className="w-5/6 mx-1 my-3">
          <label className="text-xl pb-3 font-medium text-brandColor"> Enter Customer Name</label>
          <input
            name="userName"
            type="text"
            placeholder="Enter Your UserName"
            className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
          />
        </div>
        <div className="w-5/6 mx-1 mt-5">
          <label className="text-xl pb-3 font-medium text-brandColor"> Enter Customer Mobile Number</label>
          <input
            name="customerMobileNumber"
            type="number"
            placeholder="Enter Your Customer Mobile Number"
            className="border-0 border-slate-300 w-full p-3 bg-slate-100 text-lg mt-2"
          />
        </div>
        <div className="w-5/6 mx-1 my-3">
          <label className="text-xl pb-3 font-medium text-brandColor"> Enter Customer Required Amount</label>
          <input
            name="customerRequiredAmount"
            type="number"
            step={1.0}
            placeholder="Enter Required Amount"
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
    </section>
  );
};

export default AddForm;
