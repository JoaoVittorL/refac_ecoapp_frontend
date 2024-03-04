import FormService from "@/components/activies/content";
import { api } from "@/src/data/api";
import { ConstructionType } from "@/src/types/rotes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviço",
};

async function getData(): Promise<ConstructionType[]> {
  const response = await api("/servicos", {
    next: { revalidate: 30 },
  });

  const data = await response.json();
  return data;
}
const Page = async () => {
  const data = await getData();
  return <FormService data={data} />;
};
export default Page;
