"use client";

import { Provider } from "react-redux";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import centralStore from "./centralStore";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html lang="en" className="transition-all duration-300">
      <Provider store={centralStore}>{props.children}</Provider>
    </html>
  );
};

export default RootLayout;
