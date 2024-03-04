import FormUsers from "@/src/components/users/content";
import { api } from "@/src/data/api";
import { UsersType } from "../../../../types/rotes";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuários",
};
async function getData(): Promise<UsersType[]> {
  const response = await api("/colaboradores", {
    next: { revalidate: 30 },
  });
  const data = await response.json();
  return data;
}

const Page = async () => {
  const data = await getData();
  return <FormUsers data={data} />;
};
export default Page;
