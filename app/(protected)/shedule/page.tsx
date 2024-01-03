import FormShedule from "@/components/shedule/container-shedule";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de turnos",
  description: "Página de turnos direcionada a consultar e cadastrar novos turnos",
};


const getData = async () =>{
  const response = await api.get("/programacoes")
  return response.data;
}


const turnsPage = async () => {
  const turns = await getData();
  const token: string | null = await currentToken();

  return <FormShedule data={turns} token={token} />;
};
export default turnsPage ;
