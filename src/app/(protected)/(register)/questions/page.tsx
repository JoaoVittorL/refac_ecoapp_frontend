import FormQuestions from "@/src/components/questions/table-question";
import { api } from "@/src/data/api";
import { QuestionType } from "@/src/types/rotes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas",
};
async function getData(): Promise<QuestionType[]> {
  const response = await api("/perguntas");
  const data = await response.json();

  data.filter((item: QuestionType) => {
    if (item.data_final == null) {
      return item;
    }
  });

  return data;
}

const Page = async () => {
  const data = await getData();
  return <FormQuestions data={data} />;
};
export default Page;
