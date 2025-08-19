import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ, blogPostsObj } from "Essential";
import Image from "next/image";

import yesBankImage from "../../public/settlePe-YesBank.png";
import airtelImage from "../../public/airtelBank.png";
import stateBank from "../../public/SBIBank.png";
import axisImage from "../../public/axisBank.png";
import finoImage from "../../public/finobank.png";
import payTmImage from "../../public/payTM.png";

import { FaBus, FaCreditCard } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";
import { LuUtilityPole } from "react-icons/lu";
import { Head } from "next/document";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const Home = () => {
  return (
    <>
      {/* First Section */}
      <section className="mt-0 md:mt-16 lg:mt-16 bg-brandColor grid grid-cols-12 p-0 border-0 border-red-800">
        <div className="col-span-12 md:col-span-8 lg:col-span-8 text-white px-8 mt-20 md:mt-0 lg:mt-0">
          <div className="w-full md:w-3/6 lg:w-3/6 m-auto py-6 md:py-32 lg:py-32 ">
            <h1 className="text-white  font-semibold italic text-3xl md:text-4xl lg:text-4xl">
              Settle Your Bills In Time
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-normal break-words">
              At SettlePe, we offer a seamless platform where users can pay utility bills, book flight and bus tickets,
              pay rent at low service charges, and even make payments using credit cards. SettlePe simplifies all your
              financial transactions—fast, secure, and reliable.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4  text-white my-auto   -mt-10 md:-mt-0 lg:-mt-0 mx-auto md:-ml-28 lg:-ml-28  ">
          <AiFillCreditCard fontSize={380} className="text-slate-400 m-auto hidden md:block" />
        </div>
      </section>

      {/* Mobile / DTH Service */}
      <section className="grid grid-cols-12 p-0 ">
        <div className="col-span-12 md:col-span-6 lg:col-span-6 md:-mr-12 lg:-mr-12  text-white border-0 border-red-400 flex justify-center items-center p-0">
          <div className="m-auto w-full md:w-4/6 lg:w-4/6 h-full md:h-5/6 lg:h-5/6 bg-slate-50 text-center">
            <FaMobile fontSize={250} className="text-slate-300 mt-12 m-auto hidden md:block" />
            <FaMobile fontSize={150} className="text-slate-300 my-5 m-auto md:hidden" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 border-0 border-red-800 w-full md:w-5/6 lg:w-5/6 ml-0 md:-ml-10 lg:-ml-10 -mt-5">
          <div className="m-auto py-12 md:py-28 lg:py-28 border-0 border-white text-center md:text-left lg:text-left">
            <h1 className="font-semibold italic text-2xl md:text-4xl lg:text-4xl text-brandColor">
              Mobile / DTH Recharge
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-normal text-black text-left px-4 md:px-0 lg:px-0">
              Mobile and DTH Recharges being a day to day requirement, a <span className="italic">SettlePe</span>{" "}
              retailer can provide Mobile and DTH recharge services of all the Operators in India to their customers
              without any hassles.
            </p>
            <button type="button" title="readMore" className="bg-brandColor px-6 py-2 rounded-sm text-white ">
              Pay Your Bills
            </button>
          </div>
        </div>
      </section>

      {/* Vendor Payments */}
      <section className="grid grid-cols-12 p-0 ">
        <div className="col-span-12 md:col-span-6 lg:col-span-6 border-0 border-red-800 w-full md:w-5/6 lg:w-5/6 m-auto mr-0 md:-mr-8 lg:-mr-8 text-center md:text-left lg:text-left px-2 md:px-0 lg:px-0">
          {/* Hides on Desktop */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6 md:-mr-12 lg:-mr-12  text-white border-0 border-red-400 flex justify-center items-center p-0">
            <div className="m-auto w-full md:w-4/6 lg:w-4/6 h-full md:h-5/6 lg:h-5/6 bg-slate-50 text-center">
              <GiTakeMyMoney fontSize={150} className="text-slate-300 my-5 m-auto md:hidden" />
            </div>
          </div>

          <div className="m-auto py-3 md:py-28 lg:py-28 border-2 border-white">
            <h1 className="font-semibold italic text-2xl md:text-4xl lg:text-4xl text-brandColor md:text-left lg:text-left">
              Vendor Payments Made Simple
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-normal text-black md:text-left lg:text-left">
              Ensure timely payments to your vendors, improving cash flow and strengthening business relationships. Our
              platform uses advanced security protocols.
            </p>
            <button type="button" title="readMore" className="bg-brandColor px-6 py-2 rounded-sm text-white">
              Vendor Payments
            </button>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 -ml-12  text-white border-0 border-red-400 justify-center items-center p-0  hidden md:flex lg:flex">
          <div className="m-auto w-4/6 h-5/6 bg-slate-50 flex">
            <GiTakeMyMoney fontSize={350} className="text-slate-300 m-auto" />
          </div>
        </div>
      </section>

      {/* Flight Ticket Booking */}
      <section className="grid grid-cols-12 p-0 ">
        <div className="col-span-12 md:col-span-6 lg:col-span-6 md:-mr-12 lg:-mr-12  text-white border-0 border-red-400 flex justify-center items-center p-0 mt-8 md:mt-0 lg:mt-0">
          <div className="m-auto w-full md:w-4/6 lg:w-4/6 h-full md:h-5/6 lg:h-5/6 bg-slate-50 text-center">
            <IoAirplaneSharp fontSize={250} className="text-slate-300 mt-12 m-auto hidden md:block" />
            <IoAirplaneSharp fontSize={150} className="text-slate-300 my-5 m-auto md:hidden" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 border-0 border-red-800 w-full md:w-5/6 lg:w-5/6 ml-0 md:-ml-10 lg:-ml-10 -mt-5">
          <div className="m-auto py-12 md:py-28 lg:py-28 border-0 border-white text-center md:text-left lg:text-left">
            <h1 className="font-semibold italic text-2xl md:text-4xl lg:text-4xl text-brandColor">
              Flight Ticket Booking.
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-normal text-black text-left px-4 md:px-0 lg:px-0">
              <span className="italic">SettlePe</span> retailer can provide Flight Booking services to their customers
              at competitive rates and great commissions without any hassles. competitive rates and great commissions.
            </p>
            <button type="button" title="readMore" className="bg-brandColor px-6 py-2 rounded-sm text-white ">
              Book Flights
            </button>
          </div>
        </div>
      </section>

      {/* BBPS Payments*/}

      <section className="grid grid-cols-12 p-0 ">
        <div className="col-span-12 md:col-span-6 lg:col-span-6 border-0 border-red-800 w-full md:w-5/6 lg:w-5/6 m-auto mr-0 md:-mr-8 lg:-mr-8 text-center md:text-left lg:text-left px-2 md:px-0 lg:px-0">
          {/* Hides on Desktop */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6 md:-mr-12 lg:-mr-12  text-white border-0 border-red-400 flex justify-center items-center p-0">
            <div className="m-auto w-full md:w-4/6 lg:w-4/6 h-full md:h-5/6 lg:h-5/6 bg-slate-50 text-center">
              <GiTakeMyMoney fontSize={150} className="text-slate-300 my-5 m-auto md:hidden" />
            </div>
          </div>

          <div className="m-auto py-3 md:py-28 lg:py-28 border-2 border-white">
            <h1 className="font-semibold italic text-2xl md:text-4xl lg:text-4xl text-brandColor md:text-left lg:text-left">
              Bharat Bill Payment System
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-normal text-black md:text-left lg:text-left">
              Bharat Bill Payment System facilitates the payments of bills and increases the security and speed of
              online bill payments.By using Bharat Bill Payment Service, you can pay bills for Utility (Gas, power,
              water, DTH).
            </p>
            <button type="button" title="readMore" className="bg-brandColor px-6 py-2 rounded-sm text-white">
              Pay Your Utility Bills
            </button>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 -ml-12  text-white border-0 border-red-400 justify-center items-center p-0  hidden md:flex lg:flex">
          <div className="m-auto w-4/6 h-5/6 bg-slate-50 flex">
            <LuUtilityPole fontSize={350} className="text-slate-300 m-auto" />
          </div>
        </div>
      </section>

      {/* Bus Ticket Booking */}

      <section className="grid grid-cols-12 p-0 ">
        <div className="col-span-12 md:col-span-6 lg:col-span-6 md:-mr-12 lg:-mr-12  text-white border-0 border-red-400 flex justify-center items-center p-0 mt-8 md:mt-0 lg:mt-0">
          <div className="m-auto w-full md:w-4/6 lg:w-4/6 h-full md:h-5/6 lg:h-5/6 bg-slate-50 text-center">
            <FaBus fontSize={250} className="text-slate-300 mt-12 m-auto hidden md:block" />
            <FaBus fontSize={150} className="text-slate-300 my-5 m-auto md:hidden" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 border-0 border-red-800 w-full md:w-5/6 lg:w-5/6 ml-0 md:-ml-10 lg:-ml-10 -mt-5">
          <div className="m-auto py-12 md:py-28 lg:py-28 border-0 border-white text-center md:text-left lg:text-left">
            <h1 className="font-semibold italic text-2xl md:text-4xl lg:text-4xl text-brandColor">
              Bus Ticket Booking.
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-normal text-black text-left px-4 md:px-0 lg:px-0">
              <span className="italic">SettlePe</span> retailer can provide Flight Booking services to Travel bookings
              being a basic requirement, a SettlePe retailer can provide Bus Booking services of the comprehensive range
              of Bus Operators in India to their customers without any hassles.
            </p>
            <button type="button" title="readMore" className="bg-brandColor px-6 py-2 rounded-sm text-white ">
              Book Bus Tickets
            </button>
          </div>
        </div>
      </section>

      {/* Section For Bank Images */}
      <h2 className="text-brandColor italic text-3xl m-auto text-center my-5 md:my-10 lg:my-10">Our Partners</h2>
      <section className="border-0 border-red-500 m-auto w-full md:w-5/6 flex md:justify-around flex-wrap ">
        <Image
          src={axisImage}
          alt="axis-bank-image"
          width={237}
          height={120}
          className="my-0 w-3/6 p-2 lg:w-1/6 lg:h-2/6"
        />
        <Image
          src={airtelImage}
          alt="airtel-bank-image"
          width={237}
          height={120}
          className="my-0 w-3/6 p-2 lg:w-1/6 lg:h-2/6"
        />
        <Image
          src={yesBankImage}
          alt="yesBank-image"
          width={237}
          height={120}
          className="my-0 w-3/6 p-2 lg:w-1/6 lg:h-2/6"
        />
        <Image
          src={stateBank}
          alt="stateBank-image"
          width={237}
          height={120}
          className="my-0 w-3/6 p-2 lg:w-1/6 lg:h-2/6"
        />
        <Image
          src={finoImage}
          alt="finoBank-image"
          width={237}
          height={120}
          className="my-0 w-3/6 p-2 lg:w-1/6 lg:h-2/6"
        />
        <Image
          src={payTmImage}
          alt="payTMBank-image"
          width={237}
          height={120}
          className="my-0 w-3/6 p-2 lg:w-1/6 lg:h-2/6"
        />
      </section>
    </>
  );
};

export default Home;
