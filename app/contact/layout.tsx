"use client";

import Navigation from "@Navigation/Navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "Components/Footer/Footer";
import ReadingProgressBar from "Components/UI/ReadingProgressBar/ReadingProgressBar";
import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

interface contactLayoutProps {
  children: React.ReactNode;
}

const ContactLayoutPage = (props: contactLayoutProps) => {
  return (
    <html lang="en" className="transition-all duration-300">
      <body className="relative p-0 m-0 bg-white dark:bg-slate-900 dark:prose-invert prose prose-stone min-h-[65vh] max-w-full border-0 border-sky-400  h-full overflow-x-hidden">
        <ReadingProgressBar />
        <AppProgressBar height="1px" color="#ffffff" options={{ showSpinner: true }} shallowRouting />
        <header>
          <Navigation darkMode={false} />
        </header>
        <main className="border-0 border-red-900 grid grid-cols-12">
          <section className="col-span-12 border-0 border-red-500 w-full mb-32">
            <section>{props.children}</section>
            {/* <section className=" mt-16 border-0 border-black grid grid-cols-12">
              <aside className="col-span-2 border-0 border-green-800 h-full mt-3 ">
                <SideBarDash />
              </aside>
              <section className="col-span-10 border-0 border-red-700">
                <DashboardContainer />
                <section>{props.children}</section>
              </section>
            </section> */}
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

export default ContactLayoutPage;
