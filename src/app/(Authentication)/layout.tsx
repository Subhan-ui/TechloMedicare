import type { Metadata } from "next";
import "../globals.css";
import Image from "next/image";
import StoreProvider from "../../providers/StoreProvider";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import ToastProvider from "@/providers/ToastProvider";
import { Mukta } from "next/font/google";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up or Sign In",
  description: "For Medicare Company",
  icons: {
    icon: [
      {
        url:  '/assets/icon.png',
        href: '/assets/icon.png',
      },
    ],
  },
};

const mukta = Mukta({
  weight:  ["200" , "300" , "400" , "500" , "600" , "700" , "800" ],
  subsets: ['latin'],
  variable: '--font-mukta'
}
);

type propsLayout = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: propsLayout) => {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    redirect("/");
  }
  return (
    <html>
      <body className={mukta.variable}>
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
                priority
                  src="/assets/signup/image.png"
                  alt="Dashboard"
                  height={475.73}
                  width={669}
                  className="mt-14 max:w-[669px]  md:w-[600px] h-auto med:w-[589px]"
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
