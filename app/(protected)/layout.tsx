import Image from "next/image";
import { ReactNode } from "react";

import Logo from "../../public/logo.svg";
import Sidebar from "@/components/Sidebar/sidebar-layout";

export default async function PrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="h-screen flex flex-row">
      <Sidebar typeAcess="ADM" />
      <div className="h-full w-full">
        <header className="flex mb-10">
          <Image
            src={Logo}
            style={{ display: "block", margin: "auto", paddingTop: "20px" }}
            width={160}
            height={160}
            alt="Logotipo da empresa Eco Elétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
          />
        </header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
