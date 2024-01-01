import FormQuestions from "@/components/questions/table-question";
import { api } from "@/data/api";
import { currentToken } from "@/lib/auth";

const getQuestions = async () =>
  api.get("/perguntas").then((response) => {
    return response.data;
  });

const usersPage = async () => {
  const questions = await getQuestions();
  const token: string | null = await currentToken();
  return <FormQuestions data={questions} token={token} />;
};
export default usersPage;
