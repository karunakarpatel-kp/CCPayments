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
        <main className="border-0 border-red-900 grid grid-cols-12">
          <section className="hidden md:invisible md:block md:col-span-1 border-2 border-green-800">
            {/* One */}
          </section>
          <section className="col-span-12 md:col-span-10 border-0 border-red-500 m-auto w-full mb-32">
            <article>{props.children}</article>
          </section>
          <section className="hidden md:col-span-1 md:block md:invisible border border-slate-500">{/* TWO */}</section>
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
