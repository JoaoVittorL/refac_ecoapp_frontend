import UpdateActivie from "@/components/activies/update";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

async function getData(id: string) {
  const res = api.get(`/servicos/${id}`);
  const data = (await res).data;
  return data;
}
const userPageId = async ({ params }: { params: { activie: string } }) => {
  const token = await currentToken();
  const response = await getData(params.activie);
  return <UpdateActivie data={response} token={token} id={params.activie}/>;
};

export default userPageId
