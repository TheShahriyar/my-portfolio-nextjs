import "./globals.scss";
import type { Metadata } from "next";
import { kaushan, openSans } from "./fonts";

export const metadata: Metadata = {
  title: "Shahriyar Ahmed - Frontend Developer",
  description:
    "My professional experience includes bringing the wireframes of the UX designer to life through HTML5 and CSS3, as well as collaborating with Back End Developers to create a stellar finished product.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html
        lang="en"
        className={`${kaushan.variable} ${openSans.variable} scroll-smooth`}
      >
        <link rel="icon" href="/me.jpg" sizes="any" />
        <body>{children}</body>
      </html>
    </>
  );
}
