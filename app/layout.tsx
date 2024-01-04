import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import Head from 'next/head';
import favicon from  "../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eco Elétrica",
  description: "Eco app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html>
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
        <body className={inter.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
