import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ } from "Essential";
import React from "react";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const LoginPage = () => {
  return (
    <section className="grid grid-cols-12 border border-red-700 ">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem libero officiis, similique repellendus
      accusantium quod nihil, sed sapiente eligendi, aut a reiciendis?
      {/* <section className="col-span-6 border border-black bg-brandColor ">One</section> */}
      {/* <section className="col-span-6 border border-blue-800">Two</section> */}
    </section>
  );
};

export default LoginPage;
