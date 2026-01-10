import { memo } from "react";

const ElectricityComponent = () => {
  return (
    <div className="mt-3 mx-3 md:mr-3 lg:mr-3 ">
      <div className="grid grid-cols-12 space-x-1">
        <form className="col-span-7">
          <select
            title="Select Biller"
            className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option defaultChecked>Select Biller</option>
            <option>Telangana State Power</option>
            <option>Maharastra Power Bill</option>
            <option>TSNPDCL</option>
          </select>
          <div className="customerDetails grid grid-cols-12 py-2 space-x-1">
            <input
              type="text"
              name="Enter Customer Name"
              title="Enter Customer Name"
              placeholder="Enter Customer Name"
              className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 col-span-6"
            />
            <input
              type="number"
              name="Enter Customer PhoneNumber"
              title="Enter Customer PhoneNumber"
              placeholder="Enter Customer Mobile Number"
              className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 col-span-6 "
            />
          </div>
          <div className=" grid grid-cols-12 py-2 space-x-1">
            <input
              type="Email"
              name="Enter Email Address"
              title="Enter Email"
              placeholder="Enter Customer Email"
              className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 col-span-6"
            />
            <input
              type="number"
              name="Enter USC Number"
              title="Enter USC Number"
              placeholder="Enter Customer USC Number"
              className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 col-span-6 "
            />
          </div>
          <div className="customerDetails grid grid-cols-12 py-2 space-x-1">
            <button
              type="button"
              name="Fetch Bill"
              title="Fetch Bill "
              className="block  w-full  border border-gray-200 bg-brandColor text-white placeholder:text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none col-span-6"
            >
              Fetch Bill
            </button>
          </div>
        </form>

        <div className="billPreview col-span-5  border-slate-300 bg-slate-100 p-2">
          <div className="title text-center ">
            <h6 className="text-brandColor font-bold text-xl">Bill Fetched</h6>
          </div>
          <div className="grid grid-cols-12  mt-6">
            <div className="col-span-6 text-right pr-5">Customer Name : </div>
            <div className="col-span-6 pl-3">Karunakar</div>
          </div>

          <div className="grid grid-cols-12  mt-6">
            <div className="col-span-6 text-right pr-5">Bill Date:</div>
            <div className="col-span-6 pl-3">Jan 04 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ElectricityComponent);
