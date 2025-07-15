import React from "react";
import Wallet from "./Wallet";
import { FaRupeeSign } from "react-icons/fa";
import SmallCardContainers from "./SmallCardContainers";
import Link from "next/link";
import TabNavigation from "./TabNavigation";

const DashboardContainer = () => {
  return (
    <div className="mt-3 mr-3">
      {/* Wallet */}
      <Wallet />
      {/* smallCard Containers */}
      <SmallCardContainers />
      {/* Tab Navigation */}
      <TabNavigation activeTab={false} />
    </div>
  );
};

export default DashboardContainer;
