import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import SideNav from "@/components/layout/SideNav";
import Head from "next/head";
import StoreProvider from "../StoreProvider";
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
};

const mukta = Mukta({
  weight:  ["200" , "300" , "400" , "500" , "600" , "700" , "800" ],
  subsets: ['latin']
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
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
          />
        </Head>
        <body className={`bg-[#F5F5F5] v_center flex-col box-border`} >
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
