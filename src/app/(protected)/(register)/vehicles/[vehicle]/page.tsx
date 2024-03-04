import UpdateVehicle from "@/src/components/vehicles/update";
import { api } from "@/src/data/api";
async function getData(id: string) {
  const response = await api(`/veiculos/${id}`);
  const data = await response.json();
  return data;
}

const userPageId = async ({ params }: { params: { vehicle: string } }) => {
  const data = await getData(params.vehicle);
  return <UpdateVehicle data={data} id={params.vehicle} />;
};

export default userPageId;
