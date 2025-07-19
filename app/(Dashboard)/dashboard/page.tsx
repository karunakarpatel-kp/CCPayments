import React from "react";

import Sidebar from "Components/Sidebar/Sidebar";
import SideBarDash from "./_dashComponents/SideBarDash";
import DashboardContainer from "./_dashComponents/DashboardContainer";

const DashBoardPage = (props: any) => {
  return (
    <section className=" mt-16 border-0 border-black grid grid-cols-12">
      {/* {props.children} */}
      <aside className="col-span-2 border border-green-800 h-full mt-3 ">
        <SideBarDash />
      </aside>
      <section className="col-span-10 border-0 border-red-700">
        <DashboardContainer />
        <section>{props.children}</section>
      </section>
    </section>
  );
};

export default DashBoardPage;
