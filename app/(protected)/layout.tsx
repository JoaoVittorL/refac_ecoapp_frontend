import Image from "next/image";
import { ReactNode, useEffect } from "react";

import Logo from "../../public/logo.svg";
import Sidebar from "@/components/Sidebar/sidebar-layout";

export default function PrivateLayout({ children }: { children: ReactNode; }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="h-screen">
        <Sidebar typeAcess="ADM" />
      </div>
      <div className="flex flex-col w-full overflow-y-auto">
        <header className="flex justify-center items-center mb-10 p-2">
          <Image
            src={Logo}
            width={160}
            height={160}
            alt="Logotipo da empresa Eco Elétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
          />
        </header>
        <main className="p-4 flex-grow">{children}</main>
      </div>
    </div>
  );
}