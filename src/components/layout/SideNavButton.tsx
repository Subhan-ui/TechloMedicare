'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNavButton = ({
  children,
  href,
  name,
}: {
  children: React.ReactNode;
  href: string;
  name: string;
}) => {
  const router = usePathname();
  return (
    <>
      <li
        className={`sideButton cursor-pointer ${
          router === `/${href}` ? "text-blue" : "text-[#828282]"
        }`}
      >
        <span
          className={`w-2 h-full mr-[7px] rounded-r-lg ${
            router === `/${href}` ? `bg-blue ` : "bg-white"
          }`}
        />
        {children}
        <Link
          href={`/${href}`}
          className="text-[16px]  font-mukta font-normal leading-3"
        >
          {name}
        </Link>
      </li>
    </>
  );
};

export default SideNavButton;
