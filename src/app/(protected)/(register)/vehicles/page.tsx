import FormVehicles from "@/src/components/vehicles/content";
import { api } from "@/src/data/api";
import { VehicleType } from "@/src/types/rotes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veículos",
};

async function getData(): Promise<VehicleType[]> {
  const response = await api("/equipes");
  const data = await response.json();
  return data;
}
const Page = async () => {
  const data = await getData();
  return <FormVehicles data={data} />;
};
export default Page;
