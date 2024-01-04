import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eco Elétrica - Indicadores",
    description: "Página de turnos direcionada a consultar e cadastrar novos turnos",
  };
  
export default async function Home() {
    return (
        <div className="font-bold">HOME</div>
    );
}