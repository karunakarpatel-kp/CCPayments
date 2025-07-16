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
    if (incomingBtnTitle === "Bill Payments") {
      router.push("/dashboard/");
    }
    if (incomingBtnTitle === "Bank Charges") {
      router.push("/bankcharges");
    }
    if (incomingBtnTitle === "Profile") {
      router.push("/profile");
    }
  }, [incomingBtnTitle]);

  return (
    <div>
      <span className="flex justify-center align-middle">
        <Btn
          incomingBtnClickHandler={incomingBtnClickHandler}
          active={true}
          title="Bill Payments"
          iconName={<FaCreditCard fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </span>
      <span className="mt-3 flex justify-center align-middle">
        <Btn
          incomingBtnClickHandler={incomingBtnClickHandler}
          active={false}
          title="Bank Charges"
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
