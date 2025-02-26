import type { Metadata } from "next";
import { Geist, Geist_Mono, Londrina_Shadow, Unbounded } from "next/font/google";
import "./globals.css";
import { MenuNav } from "@/ui/menu-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const londrina_Shadow = Londrina_Shadow({
  variable: "--font-londrina_shadow",
  weight: "400",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${londrina_Shadow.variable} ${unbounded.variable}`}>
        <MenuNav/>
        {children}
      </body>
    </html>
  );
}
