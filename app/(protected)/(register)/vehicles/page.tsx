import FormVehicles from "@/components/vehicles/content";
import { api } from "@/data/api";

import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Eco Elétrica - Veiculos",
  description: "Página de veículos direcionada a consultar e cadastrar novos veículos.",
};


const getVehicles = async () =>
  api.get("/veiculos").then((response) => {
    return response.data;
  });

const servicePage = async () => {
  const vehicles = await getVehicles();

  return <FormVehicles data={vehicles} />;
};
export default servicePage;
