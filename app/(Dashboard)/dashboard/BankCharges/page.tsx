import React from "react";

const BankChargesPage = () => {
  return (
    <table className="border-0 border-red-800 text-center bg-slate-100 table-fixed">
      <thead className="text-brandColor">
        <tr className="">
          <th className="border border-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-3">
            Name of the Bank
          </th>
          <th className="border border-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-3">
            Card Type
          </th>
          <th className="border border-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-3">
            Charges
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-lg lg:text-lg p-4">
            HDFC Bank
          </td>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-lg lg:text-lg p-4">
            VISA
          </td>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-lg lg:text-lg p-4">
            1.3%
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-lg lg:text-lg p-4">
            HDFC Bank
          </td>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-lg lg:text-lg p-4">
            VISA
          </td>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-lg lg:text-lg p-4">
            1.3%
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-lg lg:text-lg p-4">
            HDFC Bank
          </td>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-lg lg:text-lg p-4">
            VISA
          </td>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-lg lg:text-lg p-4">
            1.3%
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BankChargesPage;
