import FormConstructions from "@/components/constructions/table-constructions";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Página de obras",
  description: "Página de obras direcionada a consultar e cadastrar novas obras.",
};

const getConstructions = async () =>
  api.get("/obras").then((response) => {
    return response.data;
  });

const constructionsPage = async () => {
  const constructions = await getConstructions();
  const token: string | null = await currentToken();

  return <FormConstructions data={constructions} token={token} />;
};
export default constructionsPage;
