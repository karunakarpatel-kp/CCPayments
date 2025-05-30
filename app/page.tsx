import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import sampleImage from "../public/Redux_Toolkit_slice.png";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

export default function Home() {
  return (
    <>
      <div className="LoadingUI grid grid-cols-12  mt-10 mb-8 mx-2 border-0 border-slate-100 hover:cursor-pointer hover:shadow-md hover:ring-1 hover:ring-offset-0 hover:ring-cyan-300 shadow-sm ">
        <div className="border-0 border-green-500 col-span-12 md:col-span-4 p-0 m-0 flex justify-center align-middle relative h-[220px] md:h-[auto] lg:h-[260px] ">
          <Image src={sampleImage} alt="sample-image" fill className="p-0 m-0 " />
        </div>
        <div className="rightSection border border-slate-200 col-span-12 md:col-span-8 pl-3 py-3">
          <div className="Title px-3">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold m-0 pb-3">
              Here is the Title Of the Blog Post of Karunakar Patel
            </h1>
            <p className="text-lg md:text-base  lg:text-xl leading-normal p-0 m-0 line-clamp-4 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              ipsam magnam quas ratione dolorum?
            </p>
            <div className="flex  space-x-1 md:space-x-2 border-0 border-red-900 flex-wrap  justify-start space-y-2 items-baseline mt-1 md:mt-3 lg:mt-3">
              <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base ">
                Abomma
              </div>
              <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base ">
                Karunakar Patel
              </div>
              <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base ">
                Patel
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="LoadingUI grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-11 md:gap-14 mt-10 mb-8 mx-2 ">
        {blogPostsObj.map((singleBlogPost, index) => {
          return (
            <div
              key={index}
              className=" shadow-sm md:shadow-sm mt-0 m-auto p-3 md:p-5 no-underline ring-1 ring-gray-200 dark:ring-slate-600 rounded-md hover:bg-slate-50  dark:bg-slate-900 dark:hover:bg-slate-800 h-full "
            >
              <Link href={singleBlogPost.url} className="no-underline">
                <h1 className="text-3xl leading-snug  break-words font-bold font-sans mb-0 px-1">
                  {singleBlogPost.title}
                </h1>
                <Image
                  src={singleBlogPost.featuredImage}
                  alt={singleBlogPost.featuredImageAltText}
                  className="mt-3 mb-3  h-[230px] ring-1 rounded-md bg-slate-200 dark:bg-slate-800"
                />
                <p className="text-xl mt-0  font-normal line-clamp-5 leading-relaxed">{singleBlogPost.description}</p>
                <div className="flex  space-x-1 md:space-x-2 border-0 border-white flex-wrap  justify-start space-y-2 items-baseline -mt-3 ">
                  {singleBlogPost.tags.map((singleTag, index) => {
                    return (
                      <div
                        className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base "
                        key={index}
                      >
                        {singleTag.tag}
                      </div>
                    );
                  })}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="LoadingUI grid grid-cols-12  mt-10 mb-8 mx-2 border-0 border-slate-100 hover:cursor-pointer hover:shadow-md hover:ring-1 hover:ring-offset-0 hover:ring-cyan-300 shadow-sm ">
        <div className="border-0 border-green-500 col-span-12 md:col-span-4 p-0 m-0 flex justify-center align-middle relative h-[220px] md:h-[auto] lg:h-[260px] ">
          <Image src={sampleImage} alt="sample-image" fill className="p-0 m-0 " />
        </div>
        <div className="rightSection border border-slate-200 col-span-12 md:col-span-8 pl-3 py-3">
          <div className="Title px-3">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold m-0 pb-3">
              Here is the Title Of the Blog Post of Karunakar Patel
            </h1>
            <p className="text-lg md:text-base  lg:text-xl leading-normal p-0 m-0 line-clamp-4 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              ipsam magnam quas ratione dolorum?
            </p>
            <div className="flex  space-x-1 md:space-x-2 border-0 border-red-900 flex-wrap  justify-start space-y-2 items-baseline mt-1 md:mt-3 lg:mt-3">
              <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base ">
                Abomma
              </div>
              <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base ">
                Karunakar Patel
              </div>
              <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base ">
                Patel
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
