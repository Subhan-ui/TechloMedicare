"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Schedules,
  Dashboard,
  Support,
  Peoples,
  Analytics,
  Setting,
  Task,
} from "@/constants/react-icons";

const SideNav = () => {
  const router = usePathname();

  return (
    <div className="w-[245.16px]  h-[908px] border-r-2 border-gray-300 bg-white relative">
      <h5 className="text-[#828282] text-[12px] mt-[30px] ml-[20px]">MENU</h5>
      <ul className="flex flex-col gap-4">
        <li
          className={`sideButton ${
            router === "/" ? "text-[#0000ac]" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/" ? `bg-[#0000ac] ` : "bg-white"
            }`}
          />
          <Dashboard size={24} />
          <Link
            href="/"
            className="text-[16px]  font-mukta font-normal leading-3"
          >
            Dashboard
          </Link>
        </li>
        <li
          className={`sideButton ${
            router === "/schedule" ? "text-[#0000ac]" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/schedule" ? `bg-[#0000ac] ` : "bg-white"
            }`}
          />
          <Schedules size={24} />
          <Link
            href="/schedule"
            className="text-[16px]  font-mukta font-normal leading-3"
          >
            Schedule
          </Link>
        </li>
        <li
          className={`sideButton ${
            router === "/tasks" ? "text-[#0000ac]" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/tasks" ? `bg-[#0000ac] ` : "bg-white"
            }`}
          />
          <Task size={24} />
          <p className="text-[16px]  font-mukta font-normal leading-3">Tasks</p>
        </li>
        <li
          className={`sideButton ${
            router === "/patients" ? "text-[#0000ac]" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/patients" ? `bg-[#0000ac] ` : "bg-white"
            }`}
          />
          <Peoples size={24} />
          <Link
            href="/patients"
            className="text-[16px]  font-mukta font-normal leading-3"
          >
            Patients
          </Link>
        </li>
        <li
          className={`sideButton ${
            router === "/messages" ? "text-[#0000ac]" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/messages" ? `bg-[#0000ac] ` : "bg-white"
            }`}
          />
          <Mail size={24} />
          <p className="text-[16px]  font-mukta font-normal leading-3">
            Messages
          </p>
        </li>
        <li
          className={`sideButton ${
            router === "/analytics" ? "text-[#0000ac]" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/analytics" ? `bg-[#0000ac] ` : "bg-white"
            }`}
          />
          <Analytics size={24} />
          <p className="text-[16px]  font-mukta font-normal leading-3">
            Analytics
          </p>
        </li>
      </ul>
      <div className="border-[1px] my-6 border-gray-300 mx-[58px]" />
      <h5 className="text-[#828282] text-[12px] mt-[30px] ml-[20px]">
        General
      </h5>
      <ul className="flex flex-col gap-4">
        <li
          className={`sideButton ${
            router === "/settings" ? "text-[#0000ac]" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/settings" ? `bg-[#0000ac] ` : "bg-white"
            }`}
          />
          <Setting size={24} />
          <Link
            href="/settings"
            className="text-[16px]  font-mukta font-normal leading-3"
          >
            Settings
          </Link>
        </li>
        <li
          className={`sideButton ${
            router === "/support" ? "text-[#0000ac]" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/support" ? `bg-[#0000ac] ` : "bg-white"
            }`}
          />
          <Support size={24} />
          <p className="text-[16px]  font-mukta font-normal leading-3">
            Support
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
