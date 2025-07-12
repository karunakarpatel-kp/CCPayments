import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ } from "Essential";
import React from "react";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const LoginPage = () => {
  return (
    <section className="grid grid-cols-12 border border-red-700  text-white h-full">
      <section className="col-span-6 border border-black bg-brandColor">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum blanditiis incidunt asperiores. Neque eum, earum
        distinctio! Saepe itaque dolores possimus libero necessitatibus voluptate ratione! Aspernatur earum ipsam
        voluptas quia magni?
      </section>
      <section className="col-span-6 border border-blue-800 bg-blue-950 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt voluptatum, aperiam error veritatis
        facere exercitationem nihil? Ea consectetur eum pariatur voluptatibus voluptatem libero, tempora quasi ad, nisi
        ratione fugit debitis quo nam nesciunt repellat praesentium recusandae deserunt, iusto adipisci!
      </section>
    </section>
  );
};

export default LoginPage;
