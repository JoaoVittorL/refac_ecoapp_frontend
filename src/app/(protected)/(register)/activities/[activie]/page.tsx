import UpdateActivie from "@/src/components/activies/update";
import { api } from "@/src/data/api";
async function getData(id: string) {
  const response = await api(`/servicos/${id}`);
  const data = await response.json();
  return data;
}

const userPageId = async ({ params }: { params: { activie: string } }) => {
  const response = await getData(params.activie);
  return <UpdateActivie data={response} id={params.activie} />;
};

export default userPageId;
