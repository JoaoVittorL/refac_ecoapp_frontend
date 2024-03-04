import TurnManipulation from "@/src/components/turns/turn-manipulation";
import { api } from "@/src/data/api";
import { currentToken } from "@/src/lib/auth";

async function getData(id: string) {
  const response = await api(`/turnos/${id}`);
  const data = await response.json();
  return data;
}
const userPageId = async ({ params }: { params: { turn: string } }) => {
  const response = await getData(params.turn);
  return <TurnManipulation data={response} id={params.turn} />;
};

export default userPageId;
