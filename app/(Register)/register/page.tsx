import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import RegisterCred from "Components/Register/RegisterCreds";
import { SEO_OBJ } from "Essential";
import Link from "next/link";
import React from "react";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const RegisterPage = () => {
  return (
    <section className="grid grid-cols-12 border-0 border-red-700 text-white h-screen">
      <section className="col-span-6 border-0 border-green-400 bg-brandColor p-1 flex flex-col">
        <section className="border-0 border-white justify-center items-center m-auto pb-40 text-center">
          <h1 className=" font-semibold italic text-7xl mb-4">SettlePe</h1>
          <h6 className="font-semibold italic text-xl mt-6 opacity-80">Settle Your Bills In Time</h6>
        </section>
        <section className="border-0 border-white w-full text-center mb-20">
          <Link href="/" className="text-xl  px-4 underline underline-offset-4">
            Home
          </Link>
          <Link href="/register" className="text-xl  px-4 underline underline-offset-4">
            Register
          </Link>
        </section>
      </section>
      <section className="col-span-6 border border-red-900 text-black p-1 ">
        <RegisterCred />
      </section>
    </section>
  );
};

export default RegisterPage;
