import UpdateConstruction from "@/components/constructions/update-construction";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

async function getData(id: string) {
  const res = api.get(`/obras/${id}`);
  const data = (await res).data;
  return data;
}
const constructionPageId = async ({ params }: { params: { construction: string } }) => {
  const token = await currentToken();
  const response = await getData(params.construction);
  return <UpdateConstruction data={response} token={token} id={params.construction}/>;
};

export default constructionPageId
