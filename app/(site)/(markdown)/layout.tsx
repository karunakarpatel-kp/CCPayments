import React from "react";

const MarkDownPageLayout = (props: any) => {
  return (
    <>
      <section className="border-0 border-green-900 mt-20 prose prose-slate prose-lg  prose-headings:text-3xl  prose-headings:my-4 md:prose-lg md:prose-h1:text-4xl md:prose-h1:leading-tight lg:prose-xl md:prose-img:h-[520px] lg:max-w-screen-2xl m-auto px-4 w-full md:w-4/6 lg:w-4/6">
        {props.children}
      </section>
    </>
  );
};

export default MarkDownPageLayout;
