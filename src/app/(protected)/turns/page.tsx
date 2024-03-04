import FormTurns from "@/src/components/turns/table-turns";
import { api } from "@/src/data/api";
import { TurnoTurns } from "@/src/types/turn";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turnos",
};

async function getData(): Promise<TurnoTurns[]> {
  const response = await api("/turnos");
  const data = await response.json();
  return data;
}

const turnsPage = async () => {
  const turns = await getData();
  return <FormTurns data={turns} />;
};
export default turnsPage;
