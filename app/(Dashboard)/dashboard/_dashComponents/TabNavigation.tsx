import Link from "next/link";
import React from "react";

interface tabNavigationProps {
  activeTab: boolean;
}

const TabNavigation = (props: tabNavigationProps) => {
  const { activeTab } = props;
  return (
    <div className="tabNavigation bg-slate-100 w-full mt-4 p-2">
      <ul className="list-none border-0 inline-flex p-0 m-0">
        <li className="mx-2">
          <Link
            href="/dashboard/AddFunds"
            className={
              ` text-xl text-brandColor underline decoration-4 underline-offset-8 font-semibold hover:decoration-dotted ` +
              `${true ? "text-brandColor italic decoration-brandColor" : "not-italic decoration-slate-200"}`
            }
          >
            Add Funds
          </Link>
        </li>
        <li className="mx-3">
          <Link
            href="/dashboard/VendorPayments"
            className={
              `text-xl text-brandColor underline decoration-4 underline-offset-8 font-semibold hover:decoration-dotted ` +
              `${activeTab ? "text-brandColor italic decoration-brandColor" : "not-italic decoration-slate-200"}`
            }
          >
            Vendor Payments
          </Link>
        </li>

        <li className="mx-4">
          <Link
            href="/dashboard/PayUtilityBills"
            className={
              `text-xl text-brandColor underline decoration-4 underline-offset-8 font-semibold hover:decoration-dotted ` +
              `${activeTab ? "text-brandColor italic decoration-brandColor" : "not-italic decoration-slate-200"}`
            }
          >
            Pay Utility Bills
          </Link>
        </li>

        <li className="mx-4">
          <Link
            href="/"
            className={
              `text-xl text-brandColor underline decoration-4 underline-offset-8 font-semibold hover:decoration-dotted ` +
              `${activeTab ? "text-brandColor italic decoration-brandColor" : "not-italic decoration-slate-200"}`
            }
          >
            Wallet History
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TabNavigation;
