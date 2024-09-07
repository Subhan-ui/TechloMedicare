import { Metadata } from "next";
import { Mukta } from "next/font/google";

import StoreProvider from "@/providers/StoreProvider";
import ToastProvider from "@/providers/ToastProvider";

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/assets/icon.png",
        href: "/assets/icon.png",
      },
    ],
  },
};

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mukta",
  display: "swap",
});

type propsLayout = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: propsLayout) {
  return (
    <html>
      <body className={mukta.className}>
        <StoreProvider>
          <ToastProvider />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
