"use client";
import React, { useEffect, useState } from "react";
import Wallet from "./Wallet";
import { FaRupeeSign } from "react-icons/fa";
import SmallCardContainers from "./SmallCardContainers";
import Link from "next/link";
import TabNavigation from "./TabNavigation";
import { usePathname, useRouter } from "next/navigation";

const DashboardContainer = () => {
  const [addFundsTab, setAddFundsTab] = useState<string>("");
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/dashboard/AddFunds") {
      setAddFundsTab("AddFunds");
    }
  }, []);

  return (
    <div className="mt-3 mx-3 md:mr-3 lg:mr-3">
      {/* Wallet */}
      <Wallet />
      {/* smallCard Containers */}
      {addFundsTab && <SmallCardContainers />}
      {/* Tab Navigation */}
      {/* <TabNavigation activeTab={false} /> */}
    </div>
  );
};

export default DashboardContainer;
