"use client";
import React, { useEffect, useState } from "react";
import Logo from "public/Logo.svg";
import { FaBlog, FaCar, FaCarSide, FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { IoIosLogIn, IoMdClose } from "react-icons/io";
import Link from "next/link";

interface NavigationProps {
  darkMode: boolean | null;
}

const Navigation = (props: NavigationProps) => {
  const [homePage, setHomePage] = useState<boolean>(false);

  const navigate = useRouter();
  const pathName = usePathname();

  const onLogoClickHandler = () => {
    navigate.push("/");
  };

  useEffect(() => {
    if (pathName === "/") {
      setHomePage(true);
    } else {
      setHomePage(false);
    }
  }, [pathName, homePage]);

  return (
    <>
      <div
        className={
          "h-16  bg-brandColor border-b border-b-slate-500 dark:bg-slate-900 dark:border-b dark:border-b-slate-700  md:ml-0 pl-2 grid grid-cols-12 fixed w-full z-50"
        }
      >
        {/* Desktop */}
        <div className="hidden md:invisible lg:flex col-span-1 border-0 border-white self-stretch justify-center items-center ">
          left
        </div>
        <div className="col-span-5 md:col-span-4  border-0 border-white mt-1 ml-2 md:ml-0 lg:ml-0 ">
          <div
            className="border-0 border-red-600 inline-block text-3xl font-semibold text-white mt-2 italic"
            onClick={onLogoClickHandler}
          >
            SettlePe
          </div>
        </div>
        <div className="col-span-7 md:col-span-6 border-0 border-purple-400 m-0 p-0 mr-3  ">
          <ul className="list-none flex space-x-2 md:space-x-6 text-white justify-end mt-2">
            <li>
              <Link
                href="/login"
                className="text-white text-xl underline underline-offset-8 font-normal italic  decoration-slate-100 hover:decoration-dotted"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                href="/register"
                className="text-white text-xl underline underline-offset-8 font-normal italic decoration-slate-100 hover:decoration-dotted "
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="md:hidden border-0 col-span-3 flex justify-center items-center  cursor-pointer">
          <GiHamburgerMenu size={27} fill="white" onClick={onOpenClickHandler} />
        </div> */}

        <div className="hidden md:invisible lg:flex col-span-1 border-2 border-white self-stretch justify-center items-center ">
          Right
        </div>
      </div>
      {homePage && (
        <div className="border-0 border-white text-white pt-10 bg-brandColor ">
          <div className="text-white border-0 text-center py-9 mt-10">
            <h1 className="text-white font-bold text-3xl md:text-4xl">Welcome to Abomma</h1>
            <p className="text-white font-semibold text-xl capitalize">
              A place where you learn about the latest news, updates, upcoming releases at Ibomma.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
