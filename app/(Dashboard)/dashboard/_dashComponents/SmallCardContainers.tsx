import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const SmallCardContainers = () => {
  return (
    <table className="border-0 border-red-800 text-center bg-slate-100 table-auto">
      <thead className="text-brandColor">
        <tr className="">
          <th className="border border-slate-200 text-brandColor font-semibold text-base md:text-xl lg:text-xl p-3">
            Total Payins
          </th>
          <th className="border border-slate-200 text-brandColor font-semibold text-base md:text-xl lg:text-xl p-3">
            Total PayIns Order Amount
          </th>
          <th className="border border-slate-200 text-brandColor font-semibold text-base md:text-xl lg:text-xl p-3">
            Total Success PayIns
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-xl lg:text-xl p-4">
            121
          </td>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-xl lg:text-xl p-4">
            25,00,000
          </td>
          <td className="border border-slate-300 bg-slate-200 text-slate-800 font-semibold text-base md:text-xl lg:text-xl p-4">
            300
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SmallCardContainers;
