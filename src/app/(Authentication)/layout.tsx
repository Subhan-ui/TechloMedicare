import type { Metadata } from "next";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import { authOptions } from "@/lib/AuthOptions";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sign Up or Sign In",
  description: "For Medicare Company",
};

type propsLayout = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: propsLayout) => {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    redirect("/");
  }
  return (
    <NextAuthSessionProvider>
      <div className="center w-full ">
        {children}
        <div className="max:w-[900px] h-[1024px] med:w-[800px] bg-blue v_center flex-col md:flex hidden text-white">
          <h1 className="font-bold max:text-2xl med:text-xl md:text-lg mt-[137px]">
            ALL IN ONE DASHBOARD
          </h1>
          <Image
            priority
            src="/assets/signup/image.png"
            alt="Dashboard"
            height={475.73}
            width={669}
            className="mt-[22px] max:w-[669px]  md:w-[600px] max:h-[475px] h-auto med:w-[589px]"
          />
          <h2 className="max:text-2xl med:text-xl md:text-lg mt-[66px]">
            Keep track of all patient information in this section.
          </h2>
          <button className="bg-white text-blue p-4 rounded-lg text-xs mt-[81px]">
            Learn more
          </button>
        </div>
      </div>
    </NextAuthSessionProvider>
  );
};

export default RootLayout;
