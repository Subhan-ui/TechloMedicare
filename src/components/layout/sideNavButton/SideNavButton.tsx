"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {sideBtnType} from '@/types/sideNavBtnType'

const SideNavButton = ({
  children,
  href,
  name,
  disable,
}: sideBtnType) => {
  const router = usePathname();
  return (
    <>
      <li
        className={`sideButton cursor-pointer ${
          router === `/${href}` ? "text-blue" : "text-lightSlate"
        }`}
      >
        <span
          className={`w-2 h-full mr-[7px] rounded-r-lg ${
            router === `/${href}` ? `bg-blue ` : "bg-white"
          }`}
        />
        {children}
        {disable ? (
          <p className="text-[16px] font-mukta font-normal leading-3">{name}</p>
        ) : (
          <Link
            href={`/${href}`}
            className="text-[16px]  font-mukta font-normal leading-3"
          >
            {name}
          </Link>
        )}
      </li>
    </>
  );
};

export default SideNavButton;
