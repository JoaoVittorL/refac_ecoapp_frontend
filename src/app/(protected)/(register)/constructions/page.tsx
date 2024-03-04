import FormConstructions from "@/components/constructions/content";
import { api } from "@/src/data/api";
import { ConstructionType } from "@/src/types/rotes";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obra",
};

async function getData(): Promise<ConstructionType[]> {
  const response = await api("/equipes");
  const data = await response.json();
  return data;
}

const Page = async () => {
  const data = await getData();
  return <FormConstructions data={data} />;
};
export default Page;
