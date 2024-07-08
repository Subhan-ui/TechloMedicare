import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Search, Bell, Mail,  } from "@/constants/react-icons";
import LogoutButton from "./ui/logoutButton";
// import { useRouter } from "next/navigation";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  // const router = useRouter()

  return (
    <>
      <nav className="v_center gap-4 bg-white border-b-2 border-gray-300 h-[92.18px] w-full">
        <div className="center w-[244.18px]  border-r-2 border-gray-300 h-[92.18px] gap-3">
          <Image
            src="/assets/logo.svg"
            height={47.07}
            width={47.07}
            alt="logo"
          />
          <h1 className="font-normal text-4xl text-[#0000ac] font-mukta">
            Medicare
          </h1>
        </div>
        <div className="flex gap-12">
          <form className=" v_center  relative">
            <input
              type="text"
              className="pl-3 rounded-md border-2 border-gray-300 h-[40.21px] w-[580px]"
            />
            <button type="submit" className="absolute right-7">
              <Search size={24} color="#828282" />
            </button>
          </form>
          <div className="text-end font-mukta">
            <p className="text-[15px]">{session?.user?.name}</p>
            <h5 className="font-bold text-[15px]">General Doctor</h5>
          </div>
          <div className="border-2 border-gray-300 w-[137px] h-[40px] rounded-md center ">
            <p className="text-[15px] font-normal font-mukta">
              24, October 2022
            </p>
          </div>
          <div className="gap-[34.9px] v_center">
            <Mail size={24} color="#828282" />
            <Bell size={24} color="#828282" />
            <LogoutButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
