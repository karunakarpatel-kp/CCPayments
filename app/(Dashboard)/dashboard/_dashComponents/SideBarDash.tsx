import React from "react";
import Btn from "./Btn";
import { FaCreditCard } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { GiBank } from "react-icons/gi";

const SideBarDash = () => {
  return (
    <div>
      <span className="flex justify-center align-middle">
        <Btn
          active={true}
          title="Bill Payments"
          iconName={<FaCreditCard fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </span>
      <span className="mt-3 flex justify-center align-middle">
        <Btn
          active={false}
          title="Bank Charges"
          iconName={<GiBank fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </span>
      <span className="mt-3 flex justify-center align-middle">
        <Btn
          active={false}
          title="Profile"
          iconName={<ImProfile fontSize={28} className={`${false} ? 'text-white' : 'text-black'`} />}
        />
      </span>
    </div>
  );
};

export default SideBarDash;
