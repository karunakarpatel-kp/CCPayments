"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import ReadingProgressBar from "Components/UI/ReadingProgressBar/ReadingProgressBar";
import { AppProgressBar } from "next-nprogress-bar";

import "../../globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RegisterPageLayout = (props: RootLayoutProps) => {
  return (
    <body className="relative p-0 m-0 bg-white max-w-full border-0 border-black overflow-x-hidden ">
      <ReadingProgressBar />
      <AppProgressBar height="1px" color="#ffffff" options={{ showSpinner: true }} shallowRouting />
      <main className="border-0 border-red-900 grid grid-cols-12">
        <section className="col-span-12 md:col-span-12 border-0 border-red-500 m-auto w-full ">
          {props.children}
        </section>
      </main>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
    </body>
  );
};

export default RegisterPageLayout;
