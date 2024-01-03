import FormUsers from "@/components/users/table-users";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Usuários",
  description: "Página de usuários direcionada a consultar e cadastrar novas usuários.",
};

const getUsers = async () =>
  api.get("/colaboradores").then((response) => {
    return response.data;
  });

const usersPage = async () => {
  const users = await getUsers();
  const token : string | null = await currentToken();
  return <FormUsers data={users} token={token} />;
};
export default usersPage;
