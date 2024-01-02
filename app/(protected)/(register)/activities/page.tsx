import FormService from "@/components/activies/table-activies";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de serviços",
  description: "Página de serviços direcionada a consultar e cadastrar novos serviços",
};


const getServices = async () =>
  api.get("/servicos").then((response) => {
    return response.data;
  });

const servicePage = async () => {
  const service = await getServices();
  const token: string | null = await currentToken();

  return <FormService data={service} token={token} />;
};
export default servicePage;
