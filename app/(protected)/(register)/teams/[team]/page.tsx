import UpdateTeam from "@/components/teams/update-team";
import { currentToken } from "@/lib/auth";

async function getInfoAboutTeam(id: string) {
  const token = await currentToken();
  const res = fetch(`http://localhost:3333/equipes/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  const data = (await res).json();
  return data;
}

const turnPageId = async ({ params }: { params: { team: string } }) => {
  const token = await currentToken();
  const response = await getInfoAboutTeam(params.team);
  return <UpdateTeam data={response} token={token} id={params.team}/>;
};

export default turnPageId;
