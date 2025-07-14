import { GoogleAnalytics } from "@next/third-parties/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RegisterPageLayout = (props: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="relative p-0 m-0 bg-white max-w-full border-0 border-black overflow-x-hidden ">
        <main className="border-0 border-red-900 grid grid-cols-12">
          <section className="col-span-12 md:col-span-12 border-0 border-red-500 m-auto w-full ">
            {props.children}
          </section>
        </main>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
    </html>
  );
};

export default RegisterPageLayout;
