import FormConstructions from "@/components/constructions/content";
import { api } from "@/data/api";
import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Eco Elétrica - Obras",
  description: "Página de obras direcionada a consultar e cadastrar novas obras.",
};

const getConstructions = async () =>
  api.get("/obras").then((response) => {
    return response.data;
  });

const constructionsPage = async () => {
  const constructions = await getConstructions();
  return <FormConstructions data={constructions} />;
};
export default constructionsPage;
