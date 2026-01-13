import React from "react";

const ProfilePage = () => {
  return (
    <div className="border-0 border-red-500 p-1 ">
      <h2 className="text-brandColor text-xl md:text-2xl lg:text-2xl text-center md:text-left lg:text-left border-0 border-black mt-3 px-2">
        Profile Page
      </h2>
      <table className="text-center bg-slate-100 table-fixed">
        <thead className="text-brandColor">
          <tr className="">
            <th className="border border-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-0">
              {/* Name of the Retailer */}
            </th>

            <th className="border border-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-0">
              {/* Role */}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 bg-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-4 ">
              Name of the Retailer
            </td>
            <td className="border border-slate-300 bg-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-4 text-left">
              Azmira Venkateshwarlu
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 bg-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-4">
              Role
            </td>
            <td className="border border-slate-300 bg-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-4">
              Master Distributor
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 bg-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-4">
              Contact Mobile Number
            </td>
            <td className="border border-slate-300 bg-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-4">
              +91 9191993154
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 bg-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-4">
              Contact Email Id
            </td>
            <td className="border border-slate-300 bg-slate-200 text-brandColor font-semibold text-base md:text-lg lg:text-lg p-4">
              contact@settlePe.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;
