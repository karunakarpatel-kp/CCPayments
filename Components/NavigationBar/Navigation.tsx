"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBarDash from "app/(Dashboard)/dashboard/_dashComponents/SideBarDash";
import { AiOutlineMenuFold } from "react-icons/ai";

interface NavigationProps {
  darkMode: boolean | null;
}

const Navigation = (props: NavigationProps) => {
  const [homePage, setHomePage] = useState<boolean>(false);
  const [dashBoard, setDashBoard] = useState<boolean>(false);
  const [openSideBar, setOpenSidebar] = useState<boolean>(false);

  const navigate = useRouter();
  const pathName = usePathname();

  const onLogoClickHandler = () => {
    navigate.push("/");
  };

  useEffect(() => {
    if (pathName.includes("/dashboard")) {
      setDashBoard(true);
    }
  }, []);

  useEffect(() => {
    if (pathName === "/") {
      setHomePage(true);
    } else {
      setHomePage(false);
    }
  }, [pathName, homePage]);

  const onOpenMenuClickHandler = () => {
    setOpenSidebar(true);
  };

  const onCloseMenuClickHandler = () => {
    setOpenSidebar(false);
  };

  const onSidbarContainerClickHandler = () => {
    setTimeout(() => {
      setOpenSidebar(false);
    }, 300);
  };

  return (
    <>
      <div
        className={
          "h-16  bg-brandColor border-b border-b-slate-500 dark:bg-slate-900 dark:border-b dark:border-b-slate-700  md:ml-0 pl-2 grid grid-cols-12 fixed w-full z-50"
        }
      >
        {/* Desktop */}
        <div className="hidden md:invisible lg:flex col-span-1 border-0 border-white self-stretch justify-center items-center ">
          {/* left */}
        </div>

        <div className="col-span-5 md:col-span-4  border-0 border-white mt-1 ml-2 md:ml-0 lg:ml-0 ">
          <div
            className="border-0 border-red-600 inline-block text-2xl md:text-3xl lg:text-3xl font-semibold text-white mt-2 italic hover:cursor-pointer"
            onClick={onLogoClickHandler}
          >
            SettlePe
          </div>
        </div>

        {!dashBoard && (
          <div className="col-span-7 md:col-span-6 border-0 border-purple-400 m-0 p-0 mr-3  ">
            <ul className="list-none flex space-x-2 md:space-x-6 text-white justify-end mt-2">
              <li>
                <Link
                  href="/login"
                  className="text-white text-lg md:text-xl lg:text-xl underline underline-offset-8 font-normal italic  decoration-slate-100 hover:decoration-dotted"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="text-white text-lg md:text-xl lg:text-xl underline underline-offset-8 font-normal italic decoration-slate-100 hover:decoration-dotted "
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Hamberger - Menu Open */}

        {!openSideBar && dashBoard && (
          <div className="absolute right-5 top-4 block md:hidden lg:hidden">
            <GiHamburgerMenu size={27} fill="white" onClick={onOpenMenuClickHandler} />
          </div>
        )}

        {openSideBar && dashBoard && (
          <div className="absolute right-5 top-4 block md:hidden lg:hidden">
            <AiOutlineMenuFold size={27} fill="white" onClick={onCloseMenuClickHandler} />
          </div>
        )}

        <div className="hidden md:invisible lg:flex col-span-1 border-2 border-white self-stretch justify-center items-center ">
          {/* Right */}
        </div>
      </div>

      {/* SideBar Content */}
      {openSideBar && (
        <div
          className="sideBarContent absolute top-20 right-0 left-0 bottom-0   bg-slate-50 z-20"
          onClick={onSidbarContainerClickHandler}
        >
          <SideBarDash />
        </div>
      )}
    </>
  );
};

export default Navigation;
