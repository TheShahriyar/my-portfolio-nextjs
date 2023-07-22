import "./globals.css";
import type { Metadata } from "next";
import { kaushan, openSans } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={`${kaushan.variable} ${openSans.variable}`}>
        <body className={openSans.className}>{children}</body>
      </html>
    </>
  );
}
