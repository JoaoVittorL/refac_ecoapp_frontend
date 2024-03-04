import UpdateConstruction from "@/components/constructions/update";
import { api } from "@/src/data/api";
import { currentToken } from "@/src/lib/auth";

async function getData(id: string) {
  const response = await api(`/obras/${id}`);
  const data = await response.json();
  return data;
}

const constructionPageId = async ({
  params,
}: {
  params: { construction: string };
}) => {
  const response = await getData(params.construction);
  return <UpdateConstruction data={response} id={params.construction} />;
};

export default constructionPageId;
