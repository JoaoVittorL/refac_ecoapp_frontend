import FormShedule from "@/components/shedule/container-shedule";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de turnos",
  description: "Página de turnos direcionada a consultar e cadastrar novos turnos",
};





const getPessoaNome = async (id: string) => {
  const response = await api.get(`/obras/${id}`);
  return response.data.nome;
};

const getData = async () =>{
  const response = await api.get("/programacao")
  const teams = response.data

  
  for (const team of teams) {
    const obra_id = await getPessoaNome(team.obra_id);
  
    team.lider_id = obra_id;
  }
  return teams;
}

const turnsPage = async () => {
  const turns = await getData();
  console.log(turns)
  const token: string | null = await currentToken();

  return <FormShedule data={turns} token={token} />;
};
export default turnsPage ;
