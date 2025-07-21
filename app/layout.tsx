import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html lang="en" className="transition-all duration-300">
      {props.children}
    </html>
  );
};

export default RootLayout;
