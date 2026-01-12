import { memo } from "react";
import { FaRupeeSign } from "react-icons/fa";

const MobileRechargeComponent = () => {
  return (
    <div className="mt-4 mx-3 md:mr-3 lg:mr-3 ">
      <div className="grid grid-cols-12 space-x-8">
        <form className="col-span-7">
          <select
            title="Select Operator"
            className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-3"
            required
          >
            <option>Select Operator</option>
            <option>BSNL</option>
            <option>Jio</option>
            <option>MTNL</option>
            <option>Vi</option>
            <option>Airtel</option>
          </select>

          <select
            title="Select Circle"
            className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            required
          >
            <option>Select Circle</option>
            <option>Andhra Pradesh</option>
            <option>Assam</option>
            <option>Bihar Jharkhand</option>
            <option>Telangana</option>
          </select>

          <div className="customerDetails grid grid-cols-12 py-2 space-x-1">
            <input
              type="text"
              name="Enter Customer Name"
              title="Enter Customer Name"
              placeholder="Enter Customer Name"
              className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 col-span-6"
              required
            />
            <input
              type="text"
              name="Enter Customer PhoneNumber"
              title="Enter Customer PhoneNumber"
              inputMode="numeric"
              max={10}
              min={1}
              maxLength={10}
              placeholder="Enter Customer Mobile Number"
              className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 col-span-6 "
              required
            />
          </div>
          <div className=" grid grid-cols-12 py-2 space-x-1">
            <input
              type="Email"
              name="Enter Email Address"
              title="Enter Email"
              placeholder="Enter Customer Email"
              className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 col-span-6"
              required
            />
            <button
              type="submit"
              name="Browse Plans"
              title="Browse Plans"
              className="block  w-2/4 border border-gray-200 bg-slate-100 text-brandColor placeholder:text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none col-span-6"
            >
              Browse Plans
            </button>
          </div>
          <div className="customerDetails grid grid-cols-12 py-2 space-x-1">
            <button
              type="submit"
              name="Fetch Bill"
              title="Fetch Bill "
              className="block  w-full  border border-gray-200 bg-brandColor text-white placeholder:text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none col-span-6"
            >
              Fetch Bill
            </button>
          </div>
        </form>
        {/*  BIll Preview */}
        <div className="billPreview col-span-5 border-slate-100 bg-slate-100 p-4">
          <div className="title text-center ">
            <h6 className="text-brandColor font-bold text-2xl">Bill Fetched</h6>
          </div>

          <div className="grid grid-cols-12  mt-12 text-brandColor">
            <div className="col-span-6 text-right pr-5 font-semibold text-lg ">Customer Name : </div>
            <div className="col-span-6 pl-3 font-semibold text-lg text-black">Karunakar Patel</div>
          </div>

          <div className="grid grid-cols-12  mt-6 text-brandColor ">
            <div className="col-span-6 text-right pr-5 font-semibold text-lg ">Bill Date: </div>
            <div className="col-span-6 pl-3 font-semibold text-lg text-black">Jan 04 2026</div>
          </div>

          <div className="grid grid-cols-12  mt-6 text-brandColor ">
            <div className="col-span-6 text-right pr-5 font-semibold text-lg ">Bill Amount: </div>
            <div className="col-span-6 pl-3 font-semibold text-lg text-black">
              <FaRupeeSign className="text-brandColor inline-block font-normal mr-2 -mt-1  text-lg" />
              93
            </div>
          </div>

          <div className="grid grid-cols-12  mt-6 text-brandColor w-full">
            <button
              type="submit"
              className="bg-brandColor text-white py-2 px-3 block col-span-12 m-auto w-1/4 text-lg  hover:shadow-lg"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MobileRechargeComponent);
