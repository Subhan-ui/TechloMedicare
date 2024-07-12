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
    <div className="max:w-[245.16px] med:w-[200px] md:w-[190px] md:block hidden  h-[908px] border-r-2 border-gray-300 bg-white relative">
      <h5 className="text-[#828282] text-[12px] mt-[30px] ml-[20px]">MENU</h5>
      <ul className="flex flex-col gap-4">
        <li
          className={`sideButton ${
            router === "/" ? "text-blue" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/" ? `bg-blue ` : "bg-white"
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
            router === "/schedule" ? "text-blue" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/schedule" ? `bg-blue ` : "bg-white"
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
            router === "/tasks" ? "text-blue" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/tasks" ? `bg-blue ` : "bg-white"
            }`}
          />
          <Task size={24} />
          <p className="text-[16px]  font-mukta font-normal leading-3">Tasks</p>
        </li>
        <li
          className={`sideButton ${
            router === "/patients" ? "text-blue" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/patients" ? `bg-blue ` : "bg-white"
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
            router === "/messages" ? "text-blue" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/messages" ? `bg-blue ` : "bg-white"
            }`}
          />
          <Mail size={24} />
          <p className="text-[16px]  font-mukta font-normal leading-3">
            Messages
          </p>
        </li>
        <li
          className={`sideButton ${
            router === "/analytics" ? "text-blue" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/analytics" ? `bg-blue ` : "bg-white"
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
            router === "/settings" ? "text-blue" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/settings" ? `bg-blue ` : "bg-white"
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
            router === "/support" ? "text-blue" : "text-[#828282]"
          }`}
        >
          <span
            className={`w-2 h-full mr-[7px] rounded-r-lg ${
              router === "/support" ? `bg-blue ` : "bg-white"
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
