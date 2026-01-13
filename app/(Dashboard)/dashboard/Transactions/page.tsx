import React from "react";
import { TransactionChart } from "./_transactionsComponent/transactionChart";
import { GeoChart } from "./_transactionsComponent/geoChart";
import { PieChart } from "./_transactionsComponent/pieChart";

const BankChargesPage = () => {
  return (
    <section>
      <h4 className="text-brandColor text-xl md:text-2xl lg:text-2xl text-center md:text-left lg:text-left italic border-0 border-black mt-3 px-2">
        Transactions
      </h4>
      <section className="grid grid-cols-12 space-x-5 ">
        <div className="col-span-12 md:col-span-4 lg:col-span-4 border border-slate-200 ">
          <GeoChart />
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-4 border border-slate-200 ">
          <PieChart />
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-4 border border-slate-200 ">
          <TransactionChart />
        </div>
      </section>
    </section>
  );
};

export default BankChargesPage;
