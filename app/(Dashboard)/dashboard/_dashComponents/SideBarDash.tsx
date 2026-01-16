"use client";
import React, { useEffect, useState } from "react";
import Btn from "./Btn";
import { FaCreditCard } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { GiBank } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";

const SideBarDash = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [incomingBtnTitle, setIncomingBtnTitle] = useState<string>("");

  const incomingBtnClickHandler = (incomingTitle: string) => {
    setIncomingBtnTitle(incomingTitle);
  };

  useEffect(() => {
    // if (incomingBtnTitle === "Logout") {
    //   router.push("/login");
    // }
  }, [incomingBtnTitle]);

  return (
    <div className="border-0 border-red-800 ">
      <Link className="flex justify-center align-middle no-underline" href={"/dashboard/Utility"}>
        <Btn
          incomingBtnClickHandler={incomingBtnClickHandler}
          active={pathName.includes("/Utility")}
          title="Bill Services"
          iconName={<FaCreditCard fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </Link>
      <Link className="flex justify-center align-middle no-underline mt-3" href={"/dashboard/Transactions"}>
        <Btn
          incomingBtnClickHandler={incomingBtnClickHandler}
          active={pathName.includes("/Transactions")}
          title="Transaction History"
          iconName={<GiBank fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </Link>
      <Link className="flex justify-center align-middle no-underline mt-3" href={"/dashboard/Profile"}>
        <Btn
          incomingBtnClickHandler={incomingBtnClickHandler}
          active={pathName.includes("/Profile")}
          title="Profile"
          iconName={<ImProfile fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </Link>
      <Link className="mt-32 flex justify-center align-middle no-underline" href={"/login"}>
        <Btn
          incomingBtnClickHandler={incomingBtnClickHandler}
          active={pathName.includes("/LogOut")}
          title="Logout"
          iconName={<LuLogOut fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </Link>
    </div>
  );
};

export default SideBarDash;
