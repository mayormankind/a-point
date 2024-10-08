import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Provider from "@/chakra/provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A-point",
  description: "official website for A-point an organizational appoiontment sheduling app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
          <ToastContainer/>
        </Provider>
      </body>
    </html>
  );
}