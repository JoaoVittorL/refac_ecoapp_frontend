import UpdateVehicle from "@/components/vehicles/update-vehicle"
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

async function getInfoAboutUser(id: string) {
  // const token = await currentToken();
  const res = api.get(`/veiculos/${id}`);
  const data = (await res).data;
  return data;
}
const userPageId = async ({ params }: { params: { vehicle: string } }) => {
  const token = await currentToken();
  const response = await getInfoAboutUser(params.vehicle);
  return <UpdateVehicle data={response} token={token} id={params.vehicle}/>;
};

export default userPageId
