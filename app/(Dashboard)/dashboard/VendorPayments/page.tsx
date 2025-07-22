import React from "react";
import VendorForm from "./_VendorComponents/VendorForm";

const VendorPaymentsPage = () => {
  return (
    <section>
      <h4 className="text-brandColor text-2xl text-center md:text-left lg:text-left italic border-0 border-black mt-3 px-2">
        Vendor Form
      </h4>
      <div>
        <VendorForm />
      </div>
    </section>
  );
};

export default VendorPaymentsPage;
