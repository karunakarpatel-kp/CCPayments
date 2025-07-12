import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html lang="en" className="transition-all duration-300">
      <body>
        <main>
          <section>
            <article>{props.children}</article>
          </section>
        </main>
        {/* Adding Google Analytics Code Below */}
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
      </body>
    </html>
  );
};

export default RootLayout;
