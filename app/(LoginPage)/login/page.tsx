import LoginCreds from "Components/LoginCreds/LoginCreds";
import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ } from "Essential";
import Link from "next/link";
import React from "react";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.LOGIN_PAGE.absoluteURL });

const LoginPage = () => {
  return (
    <section className="grid grid-cols-12 border-0 border-red-700 text-white h-screen">
      <section className="col-span-12 md:col-span-6 lg:col-span-6 border-0 border-green-400 bg-brandColor p-1 flex flex-col">
        <div className="border-0 border-white justify-center items-center m-auto md:pb-40 lg:pb-40 text-center">
          <h1 className=" font-semibold italic text-4xl md:text-7xl lg:text-7xl mb-4">SettlePe</h1>
          <h6 className="font-semibold italic text-sm md:text-xl lg:text-xl mt-6 opacity-80">
            Settle Your Bills In Time
          </h6>
        </div>
        <section className="border-0 border-white w-full text-center mb-10 md:mb-20 lg:mb-20">
          <Link href="/" className=" text-lg md:text-xl lg:text-xl  px-4 underline underline-offset-4">
            Home
          </Link>
          <Link href="/register" className=" text-lg md:text-xl lg:text-xl  px-4 underline underline-offset-4">
            Register
          </Link>
        </section>
      </section>
      <section className="col-span-12 md:col-span-6 lg:col-span-6 border-0 border-red-900 text-black p-1 ">
        <LoginCreds />
      </section>
    </section>
  );
};

export default LoginPage;
