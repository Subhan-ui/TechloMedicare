"use client";

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import {sideBtnType} from '@/types/types'
import { useAppSelector } from "@/store/hooks";
import { selectNumber } from "@/store/features/appointment/appointmentSlice";

const SideNavButton = ({
  children,
  href,
  name,
  disable,
}: sideBtnType) => {
  const router = usePathname();
  const message = href==='messages'
  const number = useAppSelector(selectNumber)
  return (
    <>
      <li
        className={`sideButton cursor-pointer gap-2 ${
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
          <p className="text-[16px] font-normal leading-3">{name}</p>
        ) : (
          <Link
            href={`/${href}`}
            className="text-[16px]  font-normal leading-3"
          >
            {name}
          </Link>
        )}
        {message&&<p className="absolute med:right-[30px] right-2 text-white bg-mutedRed rounded-full w-[18px] h-[18px] center text-xs font-normal">{number}</p>}
      </li>
    </>
  );
};

export default SideNavButton;
