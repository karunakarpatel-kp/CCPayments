import React from "react";
import { FaCalculator } from "react-icons/fa";

const AddFundsLoadingPage = () => {
  return (
    <div className="mt-16">
      <div className="min-h-36 h-full  border border-slate-200 dark:border-slate-700 space-y-2 mx-2 p-2 py-4  shadow-none dark:shadow-lg rounded-lg ">
        <div className="title bg-slate-200 dark:bg-slate-700 h-10 animate-pulse rounded-sm"></div>
        <div className="title bg-slate-200 dark:bg-slate-700 min-h-36 animate-pulse rounded-sm"></div>
        <div className="title px-1 space-y-2">
          <span className="h-3 animation-pulse bg-slate-200 dark:bg-slate-700 block rounded-sm"></span>
          <span className="h-3 animation-pulse bg-slate-200 dark:bg-slate-700 block rounded-sm"></span>
          <span className="h-3 animation-pulse bg-slate-200 dark:bg-slate-700 block rounded-sm"></span>
          <span className="h-3 animation-pulse bg-slate-200 dark:bg-slate-700 block rounded-sm"></span>
        </div>
        <div className="title bg-slate-200 dark:bg-slate-700 h-10 animate-pulse"></div>
      </div>
    </div>
  );
};

export default AddFundsLoadingPage;
