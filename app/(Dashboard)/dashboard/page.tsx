import React from "react";

import Sidebar from "Components/Sidebar/Sidebar";
import DashBoardNavigation from "./_dashComponents/NaviDash";
import SideBarDash from "./_dashComponents/SideBarDash";

const DashBoardPage = () => {
  return (
    <section className=" mt-16 border-0 border-black grid grid-cols-12">
      <aside className="col-span-3 border-0 border-green-800 h-full mt-3 ">
        <SideBarDash />
      </aside>
      <section className="col-span-9 border-0 border-red-700">
        <DashBoardNavigation />
      </section>
    </section>
  );
};

export default DashBoardPage;
