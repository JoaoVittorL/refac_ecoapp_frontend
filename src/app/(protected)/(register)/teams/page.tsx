import FormTeams from "@/src/components/teams/content";
import { api } from "@/src/data/api";
import { TeamsType } from "@/src/types/rotes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipes",
};
async function getData(): Promise<TeamsType[]> {
  const response = await api("/equipes");
  const data = await response.json();
  return data;
}

const Page = async () => {
  const teams = await getData();

  return <FormTeams data={teams} />;
};
export default Page;
