"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/src/hooks/use-scrooll";
import { cn } from "@/src/lib/utils";
import ThemeSwitcher from "../theme-swicher";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        " backdrop-blur-lg": scrolled,
        " ": selectedLayout,
      })}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <Image
              src={Logo}
              width={32}
              height={32}
              alt="Logo da empresa ecoelétrica"
            />
            <span className="font-bold text-xl flex ">Ecoelétrica</span>
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
