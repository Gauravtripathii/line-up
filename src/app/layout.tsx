import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

const open = Open_Sans({ subsets: ["latin"] });

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
    <html lang="en">
      <head>
        <title>LineUp</title>
      </head>
      <body className={`${open.className} h-screen`}>
        <Toaster />
        {children}
        <div className="bg-circle"></div>
      </body>
    </html>
  );
}
