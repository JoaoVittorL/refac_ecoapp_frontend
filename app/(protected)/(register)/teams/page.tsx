import FormTeams from "@/components/teams/content";
import { api } from "@/data/api";

import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Eco Elétrica - Equipes",
  description: "Página de equipes direcionada a consultar e cadastrar novas equipes.",
};

const getData = async () =>{
  const response = await api.get("/equipes")
  return response.data
}

const teamsPage = async () => {
  const teams = await getData();

  return <FormTeams data={teams}/>;
};
export default teamsPage;
