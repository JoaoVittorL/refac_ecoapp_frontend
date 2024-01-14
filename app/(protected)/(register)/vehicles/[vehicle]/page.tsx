import UpdateVehicle from "@/components/vehicles/update"
import { api } from "@/data/api";

async function getInfoAboutUser(id: string) {
  const res = api.get(`/veiculos/${id}`);
  const data = (await res).data;
  return data;
}
const userPageId = async ({ params }: { params: { vehicle: string } }) => {
  const response = await getInfoAboutUser(params.vehicle);
  return <UpdateVehicle data={response} id={params.vehicle}/>;
};

export default userPageId
