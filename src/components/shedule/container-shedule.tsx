"use client";
import { SheduleType } from "@/src/types/rotes";
import CarouselSize from "./carrossel-shedule";
import FilterShedule from "./filter-shedule";
import { useState } from "react";
interface PaginationProps {
  data: SheduleType[][];
}
const Container = ({ data }: PaginationProps) => {
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInicial(e.target.value);
    filterData(e.target.value, dataFinal);
  };

  const handleFilterChangeFinal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataFinal(e.target.value);
    filterData(dataInicial, e.target.value);
  };

  const [dataFiltrada, setDataFiltrada] = useState<any>(data);

  const filterData = (initialDate: string, finalDate: string) => {
    const filteredData = Object.keys(data).reduce(
      (filtered: any, equipeId: any) => {
        const equipeData = data[equipeId].filter((item: any) => {
          const itemDate = new Date(item.data);
          const startDate = new Date(initialDate);
          const endDate = new Date(finalDate);

          return itemDate >= startDate && itemDate <= endDate;
        });

        if (equipeData.length > 0) {
          filtered[equipeId] = equipeData;
        }

        return filtered;
      },
      {}
    );

    setDataFiltrada(filteredData);
  };

  return (
    <div className="flex flex-col w-full mx-auto justify-center">
      <FilterShedule
        handleFilterChange={handleFilterChange}
        handleFilterChangeFinal={handleFilterChangeFinal}
      />
      {dataFiltrada &&
        Object.keys(dataFiltrada).map((equipeId) => (
          <div key={equipeId}>
            <h1 className="flex justify-center text-bold mb-4">{equipeId}</h1>
            <CarouselSize key={equipeId} data={dataFiltrada[equipeId]} />
          </div>
        ))}
    </div>
  );
};
export default Container;
