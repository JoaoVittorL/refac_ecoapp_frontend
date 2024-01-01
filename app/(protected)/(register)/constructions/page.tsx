import FormConstructions from "@/components/constructions/table-constructions";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

const getConstructions = async () =>
  api.get("/obras").then((response) => {
    return response.data;
  });

const constructionsPage = async () => {
  const constructions = await getConstructions();
  const token: string | null = await currentToken();

  return <FormConstructions data={constructions} token={token} />;
};
export default constructionsPage;