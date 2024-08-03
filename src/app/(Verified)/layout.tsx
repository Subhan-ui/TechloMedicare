import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import SideNav from "@/components/layout/sideNav/SideNav";
import StoreProvider from "../../providers/StoreProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOptions";
import { redirect } from "next/navigation";
import ToastProvider from "@/providers/ToastProvider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import Loading from "./loading";
import { Suspense } from "react";
import {Mukta} from 'next/font/google'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export const metadata: Metadata = {
  title: "Medicare || Subhan",
  description: "Do your daily appointments with your patients here.",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/login");
  }
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`bg-back v_center flex-col box-border ${mukta.variable}`} >
          <ToastProvider />
          <div className="max:w-[1412px] med:w-[1000px] md:w-[768px] w-full">
            <Navbar />
            <div className="flex">
              <SideNav />
              <Suspense fallback={<Loading />}>
                <EdgeStoreProvider>{children}</EdgeStoreProvider>
              </Suspense>
            </div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
