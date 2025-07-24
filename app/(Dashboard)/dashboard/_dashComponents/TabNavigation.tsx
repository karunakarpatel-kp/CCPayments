"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface tabNavigationProps {
  activeTab: boolean;
}

const TabNavigation = (props: tabNavigationProps) => {
  const { activeTab } = props;
  const router = useRouter();
  const onAddFundsClickHandler = () => {
    router.push("/dashboard/AddFunds");
  };
  const onVendorPaymentClickHandler = () => {
    router.push("/dashboard/VendorPayments");
  };
  return (
    <table className="table-fixed border-0 text-center bg-slate-100 w-full overflow-hidden">
      <thead className="text-brandColor">
        <tr className="p-0 m-0">
          <th
            className={
              `min-w-32 border-r border-slate-200 text-brandColor font-semibold text-base md:text-xl p-3 underline decoration-2 underline-offset-8 hover:cursor-pointer hover:bg-brandColor hover:text-white hover:decoration-dotted  ` +
              `${
                activeTab
                  ? "text-white italic  bg-brandColor decoration-slate-50 decoration-dotted rounded-lg "
                  : "not-italic decoration-slate-200"
              }`
            }
            onClick={onAddFundsClickHandler}
          >
            Add Funds
          </th>
          <th
            className={
              `min-w-32 border-r border-slate-200 text-brandColor font-semibold text-base md:text-xl p-3 underline decoration-2 underline-offset-8 hover:cursor-pointer hover:bg-brandColor hover:text-white hover:decoration-dotted  ` +
              `${
                activeTab
                  ? "text-white italic  bg-brandColor decoration-slate-50 decoration-dotted rounded-lg "
                  : "not-italic decoration-slate-200"
              }`
            }
            onClick={onVendorPaymentClickHandler}
          >
            Vendor Payments
          </th>
          <th
            className={
              `min-w-32 border-r border-slate-200 text-brandColor font-semibold text-base md:text-xl p-3 underline decoration-2 underline-offset-8 hover:cursor-pointer hover:bg-brandColor hover:text-white hover:decoration-dotted ` +
              `${
                activeTab
                  ? "text-white italic  bg-brandColor decoration-slate-50 decoration-dotted rounded-lg "
                  : "not-italic decoration-slate-200"
              }`
            }
            onClick={onAddFundsClickHandler}
          >
            Pay Utility Bills
          </th>
          <th
            className={
              `min-w-32 border-r border-slate-200 text-brandColor font-semibold text-base md:text-xl p-3 underline decoration-2 underline-offset-8 hover:cursor-pointer hover:bg-brandColor hover:text-white hover:decoration-dotted  ` +
              `${
                true
                  ? "text-white italic  bg-brandColor decoration-slate-50 decoration-dotted rounded-lg "
                  : "not-italic decoration-slate-200"
              }`
            }
            onClick={onAddFundsClickHandler}
          >
            Wallet History
          </th>
        </tr>
      </thead>
      {/* <tbody>
          <tr>
            <td>one</td>
          </tr>
        </tbody> */}
    </table>
  );
};

export default TabNavigation;
