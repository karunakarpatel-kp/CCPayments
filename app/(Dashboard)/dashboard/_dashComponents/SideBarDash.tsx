"use client";

import React, { useEffect, useState } from "react";
import Btn from "./Btn";
import { FaCreditCard } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { GiBank } from "react-icons/gi";
import { useRouter } from "next/navigation";

const SideBarDash = () => {
  const router = useRouter();
  const [incomingBtnTitle, setIncomingBtnTitle] = useState<string>("");

  const incomingBtnClickHandler = (incomingTitle: string) => {
    setIncomingBtnTitle(incomingTitle);
  };

  useEffect(() => {
    if (incomingBtnTitle === "Bill Services") {
      router.push("/dashboard/Utility");
    }
    if (incomingBtnTitle === "Bank Charges") {
      router.push("/dashboard/BankCharges");
    }
    if (incomingBtnTitle === "Profile") {
      router.push("/dashboard/Profile");
    }
    if (incomingBtnTitle === "Transaction History") {
      router.push("/dashboard/Transactions");
    }
  }, [incomingBtnTitle]);

  return (
    <div>
      <span className="flex justify-center align-middle">
        <Btn
          incomingBtnClickHandler={incomingBtnClickHandler}
          active={true}
          title="Bill Services"
          iconName={<FaCreditCard fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </span>
      <span className="mt-3 flex justify-center align-middle">
        <Btn
          incomingBtnClickHandler={incomingBtnClickHandler}
          active={false}
          title="Transaction History"
          iconName={<GiBank fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </span>
      <span className="mt-3 flex justify-center align-middle">
        <Btn
          incomingBtnClickHandler={incomingBtnClickHandler}
          active={false}
          title="Profile"
          iconName={<ImProfile fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </span>
    </div>
  );
};

export default SideBarDash;
