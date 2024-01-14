import FormUsers from "@/components/users/content";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eco Elétrica - Usuários",
  description:
    "Página de usuários direcionada a consultar e cadastrar novas usuários.",
};

const getUsers = async () =>
  api.get("/colaboradores").then((response) => {
    return response.data;
  });

const usersPage = async () => {
  const token = await currentToken();
  const data = await getUsers();
  return <FormUsers data={data} token={token} />;
};
export default usersPage;
