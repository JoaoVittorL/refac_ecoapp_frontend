import FormShedule from "@/src/components/shedule/container-shedule";
import { api } from "@/src/data/api";
import { SheduleType } from "@/src/types/rotes";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programação",
};

// async function getData(): Promise<ConstructionType[]> {
//   const response = await api("/servicos", {
//     next: { revalidate: 30 },
//   });

//   const data = await response.json();
//   return data;
// }
// const getData = async () => {
//   const equipesAgrupadas: { [key: string]: SheduleType[] } = {};
//   const response = await api.get("/programacoes");
//   response.data.forEach((equipe: SheduleType) => {
//     const equipeId = equipe.equipe_id;
//     if (equipesAgrupadas[equipeId]) {
//       equipesAgrupadas[equipeId].push(equipe);
//     } else {
//       equipesAgrupadas[equipeId] = [equipe];
//     }
//   });
//   return equipesAgrupadas;
// };

// async function getData(): Promise<QuestionType[]> {
//   const response = await api("/perguntas");
//   const data = await response.json();

//   data.filter((item: QuestionType) => {
//     if (item.data_final == null) {
//       return item;
//     }
//   });

//   return data;
// }
async function getData(): Promise<SheduleType[][]> {
  const equipesAgrupadas: { [key: string]: SheduleType[] } = {};

  const response = await api("/programacoes");
  const data = await response.json();

  data.forEach((equipe: SheduleType) => {
    const equipeId = equipe.equipe_id;
    if (equipesAgrupadas[equipeId]) {
      equipesAgrupadas[equipeId].push(equipe);
    } else {
      equipesAgrupadas[equipeId] = [equipe];
    }
  });

  const groupedData: SheduleType[][] = Object.values(equipesAgrupadas);
  return groupedData;
}
const Page = async () => {
  const data= await getData()
  return <FormShedule data={data} />;
};
export default Page;
