import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/companents/layout";
import Login from "./login/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path:string = ''
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col bg-white">
          {path === '/login' || path === '/register' ? 
          (
            <Login/>
          )
          :
          <Layout>{children}</Layout>}
        </div>
      </body>
    </html>
  );
}
