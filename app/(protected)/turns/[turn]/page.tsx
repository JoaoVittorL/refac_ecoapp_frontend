import TurnManipulation from "@/components/turns/turn-manipulation";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

async function getData(id: string) {
  const res = api.get(`/turnos/${id}`);
  const data = (await res).data;
  return data;
}
const userPageId = async ({ params }: { params: { turn: string } }) => {
  const token = await currentToken();
  const response = await getData(params.turn);
  return <TurnManipulation data={response} token={token} id={params.turn}/>;
};

export default userPageId
