"use client";

import Navigation from "Components/NavigationBar/Navigation";
import { useEffect, useRef, useState } from "react";
import Footer from "Components/Footer/Footer";

import { AppProgressBar } from "next-nprogress-bar";
import ReadingProgressBar from "Components/UI/ReadingProgressBar/ReadingProgressBar";
import { GoogleAnalytics } from "@next/third-parties/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const HomePageLayout = (props: RootLayoutProps) => {
  return (
    <html lang="en" className="transition-all duration-300">
      <body className="relative p-0 m-0 bg-white dark:bg-slate-900 dark:prose-invert prose prose-stone min-h-[65vh] max-w-full border-0 border-sky-400  h-full overflow-x-hidden">
        <ReadingProgressBar />
        <AppProgressBar height="1px" color="#ffffff" options={{ showSpinner: true }} shallowRouting />
        <header>
          <Navigation darkMode={false} />
        </header>
        <main className="border-0 border-red-900 grid grid-cols-12 ">
          <section className="col-span-12 border-0 border-red-500 w-full mb-32">
            <article>{props.children}</article>
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
      {/* Adding Google Analytics Code Below */}
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
    </html>
  );
};

export default HomePageLayout;

// import React from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
// import Link from "next/link";
// import Sidebar from "Components/Sidebar/Sidebar";
// import Article from "Components/Article/Article";

// const BlogPostLayoutUI = (props: any) => {
//   return (
//     <>
//       <section className="border-0 border-green-900 w-full grid grid-cols-12 mt-11 md:mt-20 prose prose-slate prose-xl prose-headings:text-3xl  prose-headings:my-4 md:prose-lg md:prose-h1:text-4xl md:prose-h1:leading-tight lg:prose-xl md:prose-img:h-[520px] lg:max-w-screen-2xl">
//         <Article incomingProps={props} />
//         <Sidebar />
//       </section>
//       <section>
//         <Link href="#top" className=" scroll-smooth ">
//           <div className="darkMode fixed bottom-32 right-0 border bg-brandColor text-white border-slate-700 p-2 pt-3 px-4 cursor-pointer rounded-s-2xl dark:bg-slate-900  dark:text-black shadow-inner z-50 scroll-smooth">
//             <FaArrowCircleUp size={25} fill="white" className="animate-bounce" />
//           </div>
//         </Link>
//       </section>
//       {/* <RecentBlogPost /> */}
//     </>
//   );
// };

// export default BlogPostLayoutUI;
