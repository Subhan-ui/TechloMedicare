import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Search, Bell, Mail, Options } from "@/constants/react-icons";
import LogoutButton from "../ui/logoutButton";
import SmallNavbar from "./SmallNavbar";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <nav className="md:flex hidden v_center max:gap-4 med:gap-20 bg-white border-b-2 border-gray-300 h-[92.18px] md:gap-7 gap-5 box-border">
        <div className="center max:w-[244.18px] med:w-[200px] md:w-[190px]  border-r-2 border-gray-300 h-[92.18px] gap-3">
          <Image
            src="/assets/logo.svg"
            height={47.07}
            width={47.07}
            alt="logo"
            className="md:w-[35px] md:h-[35px] max:w-[47.07px] max:h-[47.07px] w-[25px] h-[25px]"
          />
          <h1 className="font-normal max:text-4xl med:text-3xl md:text-2xl text-blue font-mukta text-lg">
            Medicare
          </h1>
        </div>
        <div className="max:gap-12 med:gap-24 md:gap-20 flex">
          <form className=" v_center max:flex hidden  relative">
            <input
              type="text"
              className="pl-3 rounded-md border-2 border-gray-300 h-[40.21px] w-[580px] "
            />
            <button type="submit" className="absolute right-7">
              <Search size={24} color="#828282" />
            </button>
          </form>
          <div className="text-end font-mukta ">
            <p className="text-[15px]">{session?.user?.name}</p>
            <h5 className="font-bold text-[15px]">General Doctor</h5>
          </div>
          <div className="border-2 center border-gray-300 w-[137px] h-[40px] rounded-md ">
            <p className="text-[15px] font-normal font-mukta">
              24, October 2022
            </p>
          </div>
          <div className="gap-[34.9px] v_center">
            <Mail size={24} color="#828282" />
            <Bell size={24} color="#828282" />
            <LogoutButton size={24}/>
          </div>
        </div>
      </nav>
      <SmallNavbar />
    </>
  );
};

export default Navbar;
