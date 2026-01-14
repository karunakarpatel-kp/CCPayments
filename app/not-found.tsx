"use client";
import React from "react";
import NotFoundImage from "@Public/404.svg";
import Image from "next/image";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import Link from "next/link";
import ReadingProgressBar from "Components/UI/ReadingProgressBar/ReadingProgressBar";
import { AppProgressBar } from "next-nprogress-bar";
import Navigation from "@Navigation/Navigation";
import Footer from "Components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const RootNotFoundPage = () => {
  return (
    <body className="relative p-0 m-0 bg-white dark:bg-slate-900 dark:prose-invert prose prose-stone min-h-[65vh] max-w-full border-0 border-sky-400  h-full overflow-x-hidden">
      <ReadingProgressBar />
      <AppProgressBar height="1px" color="#ffffff" options={{ showSpinner: true }} shallowRouting />
      <header>
        <Navigation darkMode={false} />
      </header>
      <main className="border-0 border-red-900 grid grid-cols-12 ">
        <section className="col-span-12 border-0 border-red-500 w-full mb-32">
          <section className="">
            <div className="grid  md:grid-cols-2  h-[80vh] items-center">
              <div className="border-0 border-red-400  m-auto p-3 w-full px-4 order-last md:order-1">
                <div className="border-0 border-green-400 m-auto  items-center align-middle w-3/4">
                  <h1 className="text-4xl text-brandColor">Page Not Found</h1>
                  <p className="text-xl font-semibold">The page you were looking for doesnot exist.</p>
                  <h4 className="text-2xl font-semibold text-slate-600">Here are some helpfull links instead:</h4>
                  <ol className=" p-3">
                    <li className="list-inside list-disc">
                      <Link href="/" className="text-xl font-semibold text-sky-800 dark:text-white">
                        Home Page
                      </Link>
                    </li>
                  </ol>
                  <div className="border-0 flex gap-5 pl-8">
                    <FacebookMessengerShareButton
                      appId=""
                      url={process.env.HOME_PAGE_BASE_URL + "/404"}
                      title="Page Not Found 404"
                    >
                      <FacebookIcon size={40} />
                    </FacebookMessengerShareButton>
                    <WhatsappShareButton url={process.env.HOME_PAGE_BASE_URL + "/404"} title="Page Not Found 404">
                      <WhatsappIcon size={40} />
                    </WhatsappShareButton>
                    <TwitterShareButton url={process.env.HOME_PAGE_BASE_URL + "/404"} title="Page Not Found 404">
                      <TwitterIcon size={40} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={process.env.HOME_PAGE_BASE_URL + "/404"} title="Page Not Found 404">
                      <LinkedinIcon size={40} />
                    </LinkedinShareButton>
                    <EmailShareButton url={process.env.HOME_PAGE_BASE_URL + "/404"} title="Page Not Found 404">
                      <EmailIcon size={40} />
                    </EmailShareButton>
                  </div>
                </div>
              </div>
              <div className="border-0 border-green-400 text-center m-auto p-2 md:order-2">
                <Image src={NotFoundImage} alt="not-found-svg" className="w-4/4 m-auto rounded-lg " />
              </div>
            </div>
          </section>
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

export default RootNotFoundPage;
