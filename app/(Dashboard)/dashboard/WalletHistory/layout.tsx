import React from "react";
import SideBarDash from "../_dashComponents/SideBarDash";
import DashboardContainer from "../_dashComponents/DashboardContainer";

const ProfileLayout = (props: any) => {
  return (
    <section className=" mt-16 border-0 border-black grid grid-cols-12">
      {/* {props.children} */}
      <aside className="col-span-2 border-0 border-green-800 h-full mt-3 ">
        <SideBarDash />
      </aside>
      <section className="col-span-10 border-0 border-red-700">
        <DashboardContainer />
        {props.children}
      </section>
    </section>
  );
};

export default ProfileLayout;
