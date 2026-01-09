import Link from "next/link";
import { memo } from "react";
import { FaBroadcastTower, FaCreditCard, FaMobile, FaMoneyBill } from "react-icons/fa";
import { GiGasStove, GiTap, GiWaterDrop } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuCable, LuRouter } from "react-icons/lu";

const BillServiceContainer = () => {
  return (
    <div className="mt-3 mx-3 md:mr-3 lg:mr-3 ">
      <div className="grid grid-cols-12 space-x-6 my-3">
        <div className="electricyService border-0 border-slate-400 col-span-3 py-1 ">
          <Link href={"/"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <HiOutlineLightBulb className="!text-brandColor text-center m-auto text-4xl " />
              </div>
              <div className="serviceName">
                <h6 className="text-xl py-2 font-semibold">Electricity</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="border-0 border-slate-400 col-span-3 py-1 ">
          <Link href={"/"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <GiTap color="white" className="!text-brandColor text-center m-auto text-4xl " />
              </div>
              <div className="serviceName">
                <h6 className="text-xl py-2">Water</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-3 py-1 ">
          <Link href={"/"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaMobile className="!text-brandColor text-center m-auto text-4xl " />
              </div>
              <div className="serviceName">
                <h6 className="text-xl py-2">Mobile</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-3 py-1 ">
          <Link href={"/"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200  text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <LuRouter color="white" className="!text-brandColor text-center m-auto text-4xl " />
              </div>
              <div className="serviceName">
                <h6 className="text-xl py-2">BroadBand</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Second Row */}
      <div className="grid grid-cols-12 space-x-6 my-3">
        <div className=" border-0 border-slate-400 col-span-3 py-1 ">
          <Link href={"/"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaCreditCard className="!text-brandColor text-center m-auto text-4xl " />
              </div>
              <div className="serviceName">
                <h6 className="text-xl py-2 font-semibold">Credit Card</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="border-0 border-slate-400 col-span-3 py-1 ">
          <Link href={"/"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <LuCable color="white" className="!text-brandColor text-center m-auto text-4xl " />
              </div>
              <div className="serviceName">
                <h6 className="text-xl py-2">DTH/CABLE</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="border-0 border-slate-400 col-span-3 py-1 ">
          <Link href={"/"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <GiGasStove className="!text-brandColor text-center m-auto text-4xl " />
              </div>
              <div className="serviceName">
                <h6 className="text-xl py-2">Gas</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-3 py-1 ">
          <Link href={"/"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200  text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <LuRouter color="white" className="!text-brandColor text-center m-auto text-4xl " />
              </div>
              <div className="serviceName">
                <h6 className="text-xl py-2">BroadBand</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(BillServiceContainer);
