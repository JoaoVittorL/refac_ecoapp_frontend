import UpdateUser from "@/components/users/update-user";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

async function getInfoAboutUser(id: string) {
  const token = await currentToken();
  const res = api.get(`/colaboradores/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  const data = (await res).data;
  return data;
}
const userPageId = async ({ params }: { params: { user: string } }) => {
  const token = await currentToken();
  const response = await getInfoAboutUser(params.user);
  return <UpdateUser data={response} token={token}/>;
};

export default userPageId
