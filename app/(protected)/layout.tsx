// import Image from "next/image";
// import { ReactNode, useEffect } from "react";

// import Logo from "../../public/logo.svg";
// import Sidebar from "@/components/Sidebar/sidebar-layout";

// export default function PrivateLayout({ children }: { children: ReactNode; }) {
//   return (
//     <div className="flex h-screen overflow-hidden">
//       <div className="h-screen">
//         <Sidebar typeAcess="ADM" />
//       </div>
//       <div className="flex flex-col w-full overflow-y-auto">
//         <header className="flex justify-center items-center mb-10 p-2">
//           <Image
//             src={Logo}
//             width={160}
//             height={160}
//             alt="Logotipo da empresa Eco Elétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
//           />
//         </header>
//         <main className="p-4 flex-grow">{children}</main>
//       </div>
//     </div>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { createContext } from "react";
// import { ThemeProvider } from "../../providers/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Eco App",
};

import Header from "@/components/responsive/header";
import HeaderMobile from "@/components/responsive/header-mobile";
import MarginWidthWrapper from "@/components/responsive/margin-width-wrapper";
import PageWrapper from "@/components/responsive/page-wrapper";
import SideNav from "@/components/responsive/side-nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          <div className="flex">
            <SideNav />
            <main className="flex-1">
              <MarginWidthWrapper>
                <Header />
                <HeaderMobile />
                <PageWrapper>{children}</PageWrapper>
              </MarginWidthWrapper>
            </main>
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
