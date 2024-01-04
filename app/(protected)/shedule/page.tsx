import FormShedule from "@/components/shedule/container-shedule";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";
import { SheduleType } from "@/types/rotes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eco Elétrica - Programação",
  description: "Página de turnos direcionada a consultar e cadastrar novos turnos",
};


const getData = async () =>{
  const equipesAgrupadas : {[key: string]: SheduleType[]} = {}
  const response = await api.get("/programacoes")

  const data = response.data.forEach((equipe : SheduleType) => {
    const equipeId = equipe.equipe_id;
    if (equipesAgrupadas[equipeId]) {
      equipesAgrupadas[equipeId].push(equipe);
    } else {
      equipesAgrupadas[equipeId] = [equipe];
    }
  });
  return equipesAgrupadas;
}


const turnsPage = async () => {

  const turns = await getData();
  const token: string | null = await currentToken();
  return <FormShedule data={turns} token={token} />;
};
export default turnsPage ;
