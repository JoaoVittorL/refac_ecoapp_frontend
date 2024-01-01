import FormService from "@/components/activies/table-activies";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

const getServices = async () =>
  api.get("/servicos").then((response) => {
    return response.data;
  });

const servicePage = async () => {
  const service = await getServices();
  const token: string | null = await currentToken();

  return <FormService data={service} token={token} />;
};
export default servicePage;
