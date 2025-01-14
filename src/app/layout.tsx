import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DesktopContainer from "./desktopContainer";
import MobileContainer from "./mobileContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oskar Laing",
  description: "A personal portfolio site for Oskar Laing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute top-0 left-0 hidden">
          <div className="block">1</div>
          <div className="hidden sm:block">sm</div>
          <div className="hidden md:block">md</div>
          <div className="hidden lg:block">lg</div>
          <div className="hidden xl:block">xl</div>
        </div>
        {/* <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer> */}
        {children}
      </body>
    </html>
  );
}
