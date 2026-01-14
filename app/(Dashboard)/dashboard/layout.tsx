"use client";

import Navigation from "@Navigation/Navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "Components/Footer/Footer";
import ReadingProgressBar from "Components/UI/ReadingProgressBar/ReadingProgressBar";
import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

import "../../globals.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <body className="relative p-0 m-0 bg-white dark:bg-slate-900 dark:prose-invert prose prose-stone min-h-[65vh] max-w-full border-0 border-sky-400  h-full overflow-x-hidden">
      <ReadingProgressBar />
      <AppProgressBar height="1px" color="#ffffff" options={{ showSpinner: true }} shallowRouting />
      <header>
        <Navigation darkMode={false} />
      </header>
      <main className="border-0 border-red-900 grid grid-cols-12 ">
        <section className="col-span-12 border-0 border-red-500 w-full mb-32">
          <section className="border-0 border-red-800 min-h-[60vh]">{props.children}</section>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
      {/* Adding Google Analytics Code Below */}
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
    </body>
  );
};

export default DashboardLayout;
