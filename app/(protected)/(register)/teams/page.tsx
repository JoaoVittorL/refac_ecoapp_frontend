import FormTeams from "@/components/teams/table-teams";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Página de equipes",
  description: "Página de equipes direcionada a consultar e cadastrar novas equipes.",
};

// const getPessoaNome = async (pessoaId: number) => {
//   const response = await api.get(`/colaboradores/${pessoaId}`);
//   return response.data.nome;
// };

const getData = async () =>{
  const response = await api.get("/equipes")
  return response.data
  // for (const team of teams) {
  //   const liderNome = await getPessoaNome(team.lider_id);
  //   const supervisorNome = await getPessoaNome(team.supervisor_id);
  //   const coordenadorNome = await getPessoaNome(team.coordenador_id);
  
  //   team.lider_id = liderNome;
  //   team.supervisor_id = supervisorNome;
  //   team.coordenador_id = coordenadorNome;
  // }
}



const teamsPage = async () => {
  const teams = await getData();
  const token: string | null = await currentToken();

  return <FormTeams data={teams} token={token} />;
};
export default teamsPage;
