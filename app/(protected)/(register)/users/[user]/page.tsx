import UpdateUser from "@/components/users/update-user";
import { currentToken } from "@/lib/auth";

async function getInfoAboutUser(id: string) {
  const token = await currentToken();
  const res = fetch(
    `http://localhost:3333/colaboradores/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
  );
  const data = (await res).json();
  return data;
}
const userPageId = async ({ params }: { params: { user: string } }) => {
  const token = await currentToken();
  const response = await getInfoAboutUser(params.user);
  return <UpdateUser data={response} token={token}/>;
};

export default userPageId
