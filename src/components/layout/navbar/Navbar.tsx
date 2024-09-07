import { getServerSession } from "next-auth";
import Image from "next/image";

import LogoutButton from "../../ui/logoutButton/logoutButton";
import SmallNavbar from "../smallNavbar/SmallNavbar";
import { authOptions } from "@/lib/AuthOptions";
import { Search, Bell, Mail } from "@/constants/react-icons";
import { lightSlate } from "@/constants/colors";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <nav className="md:flex hidden v_center max:gap-[26px] med:gap-5 bg-white border-b-2 border-gray-300 h-[92.18px] md:sticky md:top-0 z-[5000] md:gap-7 gap-5 box-border">
        <div className="center max:w-[244.18px] med:w-[200px] md:w-[190px] border-r-2 border-gray-300 h-[92.18px] gap-3">
          <Image
            src="/assets/icon.png"
            height={47.07}
            width={47.07}
            alt="logo"
            className="md:w-[35px] md:h-[35px] max:w-[47.07px] max:h-[47.07px] w-[25px] h-[25px]"
          />
          <h1 className="font-normal max:text-4xl med:text-3xl md:text-2xl text-blue text-lg">
            Medicare
          </h1>
        </div>
        <div className=" ">
        <div className=" max:w-[1112px] med:w-[calc(100vw-250px)] md:w-[calc(100vw-290px)] md:justify-between flex">
          <form className=" v_center mr-[56px] med:flex hidden  relative">
            <input
              type="text"
              className="max:pl-3 rounded-md border-2 border-gray-300 h-[40.21px] max:w-[580px] med:w-[240px]"
            />
            <button type="submit" className="absolute right-7">
              <Search size={24} color={lightSlate} />
            </button>
          </form>
          <div className="text-end mr-[33px]">
            <p className="text-[15px]">{session?.user?.name}</p>
            <h5 className="font-bold text-[15px]">General Doctor</h5>
          </div>
          <div className="border-2 center border-gray-300 mr-[36px] w-[137px] h-[40px] rounded-md ">
            <p className="text-[15px] font-normal">
              24, October 2022
            </p>
          </div>
          <div className="gap-[32.9px] v_center">
            <Mail size={24} color={lightSlate} />
            <Bell size={24} color={lightSlate} />
            <LogoutButton size={24} />
          </div>
          </div>
        </div>
      </nav>
      <SmallNavbar />
    </>
  );
};

export default Navbar;
