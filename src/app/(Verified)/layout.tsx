import type { Metadata } from "next";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Navbar from "@/components/layout/navbar/Navbar";
import SideNav from "@/components/layout/sideNav/SideNav";
import Loading from "./loading";

import { authOptions } from "@/lib/AuthOptions";
import { EdgeStoreProvider } from "@/lib/edgestore";
import "../globals.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

export const metadata: Metadata = {
  title: "Medicare || Subhan",
  description: "Do your daily appointments with your patients here.",
};

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
    <div className=" bg-back v_center flex-col box-border">
      <div className="max:w-screen w-full">
        <Navbar />
        <div className="flex">
          <SideNav />
          <Suspense fallback={<Loading />}>
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
