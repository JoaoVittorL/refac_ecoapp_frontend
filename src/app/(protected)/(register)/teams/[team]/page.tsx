import UpdateTeam from "@/src/components/teams/update";
import { api } from "@/src/data/api";
import { currentToken } from "@/src/lib/auth";

async function getData(id: string) {
  const response = await api(`/equipes/${id}`);
  const data = await response.json();
  return data;
}

const turnPageId = async ({ params }: { params: { team: string } }) => {
  const response = await getData(params.team);
  return <UpdateTeam data={response} id={params.team} />;
};

export default turnPageId;
