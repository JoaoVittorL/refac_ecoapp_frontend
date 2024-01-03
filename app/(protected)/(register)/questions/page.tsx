import FormQuestions from "@/components/questions/table-question";
import { api } from "@/data/api";
import { QuestionType } from "@/types/rotes";
import { currentToken } from "@/lib/auth";

import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Página de perguntas",
  description: "Página de perguntas direcionada a consultar e cadastrar novas perguntas.",
};


const getQuestions = async () =>
  api.get("/perguntas").then((response) => {
    const data = response.data.filter((item : QuestionType) => {
      if(item.data_final == null){
        return item
      }
    })
     
  return data
  });

const usersPage = async () => {
  const questions = await getQuestions();
  const token: string | null = await currentToken();
  return <FormQuestions data={questions} token={token} />;
};
export default usersPage;
