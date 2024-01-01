import FormTeams from "@/components/teams/table-teams";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

const getData = async () =>
  api.get("/equipes").then((response) => {
    return response.data;
  });

const teamsPage = async () => {
  const teams = await getData();
  const token: string | null = await currentToken();

  return <FormTeams data={teams} token={token} />;
};
export default teamsPage;
