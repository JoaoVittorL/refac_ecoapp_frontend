import FormVehicles from "@/components/vehicles/table-vehicle";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

const getVehicles = async () =>
  api.get("/veiculos").then((response) => {
    return response.data;
  });

const servicePage = async () => {
  const vehicles = await getVehicles();
  const token: string | null = await currentToken();

  return <FormVehicles data={vehicles} token={token} />;
};
export default servicePage;
