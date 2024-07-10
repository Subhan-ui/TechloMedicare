import type { Metadata } from "next";
import "../globals.css";
import Image from "next/image";
import StoreProvider from "../StoreProvider";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import ToastProvider from "@/providers/ToastProvider";

export const metadata: Metadata = {
  title: "Sign Up or Sign In",
  description: "For Medicare Company",
};

type propsLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: propsLayout) => {
  return (
    <html>
      <body>
        <StoreProvider>
          <ToastProvider />
          <NextAuthSessionProvider>
            <div className="center w-full ">
              {children}
              <div className="w-[900px] h-[1024px] bg-blue v_center flex-col text-white">
                <h1 className="font-mukta font-bold text-2xl mt-[137px]">
                  ALL IN ONE DASHBOARD
                </h1>
                <Image
                  src="/assets/signup/image.png"
                  alt="Dashboard"
                  height={475.73}
                  width={669}
                  className="mt-14"
                />
                <h2 className="font-mukta text-2xl  mt-20">
                  Keep track of all patient information in this section.
                </h2>
                <button className="bg-white text-blue p-4 rounded-lg text-xs mt-24">
                  Learn more
                </button>
              </div>
            </div>
          </NextAuthSessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
