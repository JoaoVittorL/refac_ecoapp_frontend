import UpdateActivie from "@/components/activies/update";
import { api } from "@/src/data/api";
import { currentToken } from "@/src/lib/auth";
import { ConstructionType } from "@/src/types/rotes";

// async function getData(id: string) {
//   const res = api.get(`/servicos/${id}`);
//   const data = (await res).data;
//   return data;
// }

async function getData(id: string) {
  const response = await api(`/servicos/${id}`);
  const data = await response.json();
  return data;
}

const userPageId = async ({ params }: { params: { activie: string } }) => {
  const response = await getData(params.activie);
  console.log(response);
  return <UpdateActivie data={response} id={params.activie} />;
};

export default userPageId;
