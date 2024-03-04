import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { createContext } from "react";
import { ThemeProvider } from "@/src/providers/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import Header from "@/src/components/responsive/header";
import HeaderMobile from "@/src/components/responsive/header-mobile";
import MarginWidthWrapper from "@/src/components/responsive/margin-width-wrapper";
import PageWrapper from "@/src/components/responsive/page-wrapper";
import SideNav from "@/src/components/responsive/side-nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="PT-BR">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <SideNav />
            <main className="flex-1">
              <MarginWidthWrapper>
                <Header />
                <HeaderMobile />
                <PageWrapper >{children}</PageWrapper>
              </MarginWidthWrapper>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
