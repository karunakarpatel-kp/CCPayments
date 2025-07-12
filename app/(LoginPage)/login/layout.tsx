import { GoogleAnalytics } from "@next/third-parties/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const LoginPageRootLayout = (props: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="relative p-0 m-0 bg-white max-w-full border border-sky-400  overflow-x-hidden h-screen">
        <main className="border-0 border-red-900 grid grid-cols-12">
          <section className="col-span-12 md:col-span-12 border-0 border-red-500 m-auto w-full mb-32">
            <article>{props.children}</article>
          </section>
        </main>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
    </html>
  );
};

export default LoginPageRootLayout;
