import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaPhone, FaTwitterSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaPinterestSquare } from "react-icons/fa";
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
import { SEO_OBJ } from "Essential";

const Footer = () => {
  return (
    <>
      <div
        className={
          " bg-brandColor dark:bg-slate-900 dark:border-t dark:border-t-slate-800 md:ml-0 pl-2 md:grid grid-cols-12 w-full "
        }
      >
        {/* Desktop */}
        <div className="Left border-0 border-white col-span-1 invisible">{/* left */}</div>
        <div className="copyrightMessage border-0 border-green-500 col-span-3 cursor-pointer text-white  font-semibold text-base pb-12">
          <h6 className="italic text-3xl text-white font-semibold pb-5 pt-4">SettlePe</h6>
          <h6 className="italic text-2xl text-white font-semibold pb-5 pt-1">Hanuman Enterprises</h6>
          <address className="not-italic">
            Sri Krishna Nagar, <br /> Narsampet, <br /> Warangal Rural, <br /> Telangana 506132
          </address>
          <br />
          <span>9491993154</span> <br />
          <span>karunakarpatel.business@gmail.com</span>
        </div>
        <div className="privacyLinks border-0 border-white col-span-4">
          <ul className="list-none flex flex-col m-auto flex-wrap  justify-center align-middle pt-10">
            <li className="text-center">
              <Link href="/contact" className="text-white">
                Contact Us
              </Link>
            </li>
            <li className="text-center">
              <Link href="/privacy" className="text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="text-center">
              <Link href="/disclaimer" className="text-white">
                Disclaimer
              </Link>
            </li>
            <li className="text-center">
              <Link href="/sitemap.xml" className="text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-0 flex gap-5 pl-8 col-span-3 justify-center md:justify-end">
          <FacebookMessengerShareButton appId="" url={process.env.HOME_PAGE_BASE_URL!} title={SEO_OBJ.HOME_PAGE.title}>
            <FacebookIcon size={34} className="rounded-md " />
          </FacebookMessengerShareButton>
          <WhatsappShareButton url={process.env.HOME_PAGE_BASE_URL!} title={SEO_OBJ.HOME_PAGE.title}>
            <WhatsappIcon size={34} className="rounded-md" />
          </WhatsappShareButton>
          <TwitterShareButton url={process.env.HOME_PAGE_BASE_URL!} title={SEO_OBJ.HOME_PAGE.title}>
            <TwitterIcon size={34} className="rounded-md" />
          </TwitterShareButton>
          <LinkedinShareButton url={process.env.HOME_PAGE_BASE_URL!} title={SEO_OBJ.HOME_PAGE.title}>
            <LinkedinIcon size={34} className="rounded-md" />
          </LinkedinShareButton>
          <EmailShareButton url={process.env.HOME_PAGE_BASE_URL!} title={SEO_OBJ.HOME_PAGE.title}>
            <EmailIcon size={34} className="rounded-md" />
          </EmailShareButton>
        </div>
        <div className="Right border-0 border-white col-span-1 invisible">{/* Right */}</div>
      </div>
      <div className="text-white w-full text-center text-lg  bg-brandColor py-5 -mt-5">
        All Rights Reserved, CopyRight @ Karunakar Patel
      </div>
    </>
  );
};

export default Footer;

{
  /* <div className="hidden md:invisible md:flex col-span-1 border-0 border-white self-stretch justify-center items-center ">
          left
        </div>

        <div className="col-span-9 md:col-span-4 border border-green-800 mt-1 ml-0 cursor-pointer text-white flex items-center font-semibold text-base">
          Karunakar Patel @All Rights Reserved
        </div>

        <div className="hidden md:block col-span-6 border border-purple-400 m-0 p-0 items-center ">
          <div className="lists">
            <ul className="list-none flex space-x-6 text-white justify-end mt-3">
              <li>
                <Link href="/privacy" className="text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <ul className="list-none flex space-x-6 text-white justify-end mt-3">
            <li>
              <Link href="/" className="text-white">
                <FaFacebookSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                <FaTwitterSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-white">
                <ImInstagram size={23} className="pt-0" />
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-white">
                <FaPinterestSquare size={23} className="pt-0" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:invisible md:flex col-span-1 border border-white self-stretch justify-center items-center ">
          Right
        </div> */
}
