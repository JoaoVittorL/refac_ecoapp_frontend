import UpdateUser from "@/src/components/users/update-user";
import { api } from "@/src/data/api";
async function getData(id: string) {
  const response = await api(`/colaboradores/${id}`);
  const data = await response.json();
  return data;
}

const userPageId = async ({ params }: { params: { user: string } }) => {
  const response = await getData(params.user);
  return <UpdateUser data={response} />;
};

export default userPageId;
