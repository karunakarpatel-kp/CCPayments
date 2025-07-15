import React from "react";
import Wallet from "./Wallet";
import { FaRupeeSign } from "react-icons/fa";

const NaviDash = () => {
  return (
    <div className="mt-3 mr-3">
      {/* Wallet */}
      <Wallet />
      {/* smallCard Containers */}
      <div className="smallCardContainer mt-5 flex flex-row overflow-x-scroll w-full">
        {/* First Card */}
        <div className="card inline-block text-center bg-slate-50 min-w-32 mr-2">
          <div className="textFields relative border-0 border-black  px-6 py-2 m-0 ">
            <h3 className="text-2xl italic text-brandColor font-normal m-0 py-2">Total PayIns</h3>
            <h5 className="text-3xl text-brandColor font-semibold m-0 py-2">
              {/* <FaRupeeSign className="text-brandColor inline-block font-normal mr-2 -mt-1" fontSize={26} /> */}
              193
            </h5>
          </div>
        </div>
        {/* second Card */}
        <div className="card inline-block text-center bg-slate-50 min-w-32 mr-2">
          <div className="textFields relative border-0 border-black  px-6 py-2 m-0 ">
            <h3 className="text-2xl italic text-brandColor font-normal m-0 py-2">
              Total Success Payments From the Customers
            </h3>
            <h5 className="text-3xl text-brandColor font-semibold m-0 py-2">
              <FaRupeeSign className="text-brandColor inline-block font-normal mr-2 -mt-1" fontSize={26} />
              1934.38
            </h5>
          </div>
        </div>

        {/* Third Card */}

        <div className="card inline-block text-center bg-slate-50 min-w-32 mr-2">
          <div className="textFields relative border-0 border-black  px-6 py-2 m-0 ">
            <h3 className="text-2xl italic text-brandColor font-normal m-0 py-2">
              Total Success Payments From the Customers
            </h3>
            <h5 className="text-3xl text-brandColor font-semibold m-0 py-2">
              <FaRupeeSign className="text-brandColor inline-block font-normal mr-2 -mt-1" fontSize={26} />
              1934.38
            </h5>
          </div>
        </div>

        {/*  */}
        <div className="card inline-block text-center bg-slate-50 min-w-32 mr-2">
          <div className="textFields relative border-0 border-black  px-6 py-2 m-0 ">
            <h3 className="text-2xl italic text-brandColor font-normal m-0 py-2">Total PayIns</h3>
            <h5 className="text-3xl text-brandColor font-semibold m-0 py-2">
              {/* <FaRupeeSign className="text-brandColor inline-block font-normal mr-2 -mt-1" fontSize={26} /> */}
              193
            </h5>
          </div>
        </div>

        {/*  */}
        <div className="card inline-block text-center bg-slate-50 min-w-32 mr-2">
          <div className="textFields relative border-0 border-black  px-6 py-2 m-0 ">
            <h3 className="text-2xl italic text-brandColor font-normal m-0 py-2">Total PayIns</h3>
            <h5 className="text-3xl text-brandColor font-semibold m-0 py-2">
              {/* <FaRupeeSign className="text-brandColor inline-block font-normal mr-2 -mt-1" fontSize={26} /> */}
              193
            </h5>
          </div>
        </div>

        {/*  */}
        <div className="card inline-block text-center bg-slate-50 min-w-32 mr-2">
          <div className="textFields relative border-0 border-black  px-6 py-2 m-0 ">
            <h3 className="text-2xl italic text-brandColor font-normal m-0 py-2">Total PayIns</h3>
            <h5 className="text-3xl text-brandColor font-semibold m-0 py-2">
              {/* <FaRupeeSign className="text-brandColor inline-block font-normal mr-2 -mt-1" fontSize={26} /> */}
              193
            </h5>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="snapContainer snap-y ">
        <div className="snap-center">One</div>
        <div className="snap-center">Two</div>
        <div className="snap-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident similique vitae qui?
        </div>
        <div className="snap-center">One</div>
      </div>
    </div>
  );
};

export default NaviDash;
