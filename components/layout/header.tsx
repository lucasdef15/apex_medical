"use client";
import { navigation } from "@/constants";
import { useHash } from "@/hooks/useHash";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenu } from "../design/Header";
import Button from "../ui/button";
import MenuSvg from "../svg/MenuSvg";

export default function Header() {
  const hash = useHash();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link href="#hero" className="block w-[12rem] xl:mr-8">
          <Image
            src="/assets/brainwave.svg"
            width={190}
            height={40}
            alt="Apex Medical"
            priority
          />
        </Link>
        <nav
          className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => {
              const baseClasses =
                "block relative px-6 py-6 md:py-8 xl:px-12 font-code text-2xl lg:text-xs lg:font-semibold lg:leading-5 uppercase transition-colors";
              const responsiveClasses = `lg:-mr-0.25 ${item.onlyMobile ? "lg:hidden" : ""}`;
              const hoverClasses = "hover:text-color-1 lg:hover:text-n-1";
              const activeClasses =
                item.url === hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50";

              return (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`${baseClasses} ${responsiveClasses} ${hoverClasses} ${activeClasses}`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <HamburgerMenu />
        </nav>

        <Link
          href={"#signup"}
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </Link>
        <Button className="hidden lg:flex" href={"#login"}>
          Sign in
        </Button>
        <Button
          className="ml-auto inline-flex lg:hidden "
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
}
