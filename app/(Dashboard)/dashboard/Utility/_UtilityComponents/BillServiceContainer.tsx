import Link from "next/link";
import { memo } from "react";
import { FaBus, FaCar, FaCreditCard, FaHotel, FaMobile, FaPlane, FaTag, FaTrain } from "react-icons/fa";
import { GiDutchBike, GiGasStove, GiHealthNormal, GiLifeJacket, GiTap, GiVineWhip, GiWaterDrop } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBike, LuCable, LuOrbit, LuRouter } from "react-icons/lu";

const BillServiceContainer = () => {
  return (
    <div className="mt-3 mx-3 md:mr-3 lg:mr-3 ">
      {/* First Row */}
      <div className="grid grid-cols-12 space-x-1 md:space-x-6 lg:space-x-6 my-3">
        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/Electricity"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <HiOutlineLightBulb className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2 font-semibold">Electricity</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/Water"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <GiTap
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Water</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3  py-1 ">
          <Link href={"/dashboard/Utility/MobileRecharge"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaMobile className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Mobile Recharge</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/Broadband"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200  text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <LuRouter
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Broadband / Landline</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Second Row */}
      <div className="grid grid-cols-12 space-x-1 md:space-x-6 lg:space-x-6 my-3 -mt-3 md:-mt-0 lg:-mt-0">
        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/VehicleChallan"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <GiDutchBike className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2 font-semibold">Vehicle Challan</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <LuCable
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">DTH/CABLE</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3  py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <GiGasStove className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Gas</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200  text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <LuRouter
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Broadband</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Third Row */}
      <div className="grid grid-cols-12 space-x-1 md:space-x-6 lg:space-x-6 my-3 -mt-3 md:-mt-0 lg:-mt-0">
        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaTag className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2 font-semibold">FASTag Recharge</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <LuOrbit
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Loan Repayment</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3  py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaPlane className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Flight Booking</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200  text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaBus
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Bus Bookings</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Fourth Row */}

      <div className="grid grid-cols-12 space-x-1 md:space-x-6 lg:space-x-6 my-3 -mt-3 md:-mt-0 lg:-mt-0">
        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaTrain className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2 font-semibold">Train Booking</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaHotel
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Hotel </h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3  py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <GiHealthNormal className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Health Insurance</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200  text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <LuBike
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Bike Insurance</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Fifth Row */}

      {/* Fourth Row */}

      <div className="grid grid-cols-12 space-x-1 md:space-x-6 lg:space-x-6 my-3 -mt-3 md:-mt-0 lg:-mt-0">
        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaCar className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2 font-semibold">Car Insurance</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <GiLifeJacket
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Life Insurance </h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3  py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200 text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <FaCreditCard className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl" />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Credit Card</h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="electricyService border-0 border-slate-400 col-span-6 md:col-span-3 lg:col-span-3 py-1 ">
          <Link href={"/dashboard/Utility/AvailableSoon"} className="no-underline">
            <div className="border w-full m-auto bg-slate-200  text-brandColor p-3 text-center rounded-xl shadow-sm hover:shadow-xl hover:cursor-pointer">
              <div className="icon py-4">
                <LuBike
                  color="white"
                  className="!text-brandColor text-center m-auto text-3xl md:text-4xl lg:text-4xl "
                />
              </div>
              <div className="serviceName">
                <h6 className="text-base md:text-xl lg:text-xl py-2">Bike Insurance</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(BillServiceContainer);
