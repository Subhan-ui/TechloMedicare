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
              <div className="max:w-[900px] h-[1024px] med:w-[800px] bg-blue v_center flex-col md:flex hidden text-white">
                <h1 className="font-mukta font-bold max:text-2xl med:text-xl md:text-lg mt-[137px]">
                  ALL IN ONE DASHBOARD
                </h1>
                <Image
                  src="/assets/signup/image.png"
                  alt="Dashboard"
                  height={475.73}
                  width={669}
                  className="mt-14 max:h-[475px] max:w-[669px] med:h-[400] md:w-[600px] md:h-[350px] med:w-[589px]"
                />
                <h2 className="font-mukta max:text-2xl med:text-xl md:text-lg mt-20">
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
