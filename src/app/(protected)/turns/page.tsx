import FormTurns from "@/src/components/turns/table-turns";
import { api } from "@/src/data/api";
import { TurnsType } from "@/src/types/rotes";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turnos",
};
async function getData(): Promise<TurnsType[]> {
  const response = await api("/turnos");
  const data = await response.json();
  return data;
}

const turnsPage = async () => {
  const turns = await getData();
  return <FormTurns data={turns} />;
};
export default turnsPage;
