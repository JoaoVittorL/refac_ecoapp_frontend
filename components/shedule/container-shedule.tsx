'use client'
import { SheduleType } from "@/types/rotes";
import CarouselSize from "./carrossel-shedule";
import FilterShedule from "./filter-shedule";
import { useEffect, useState } from "react";
interface PaginationProps {
  data: SheduleType[];
  token: string | null;
}
const Container = ({ data, token }: PaginationProps) => {
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const handleFilterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setDataInicial(e.target.value);
    filterData(e.target.value, dataFinal);
  };

  const handleFilterChangeFinal = (e : React.ChangeEvent<HTMLInputElement>) => {
    setDataFinal(e.target.value);
    filterData(dataInicial, e.target.value);

  };

  const [dataFiltrada, setDataFiltrada] = useState<any>(data);
  const [newFilter, setNewFilter] = useState([])

  const filterData = (initialDate: string, finalDate: string) => {
    const filteredData = Object.values(dataFiltrada).flatMap((array) => array.filter((item : SheduleType) => {
      const itemDate = new Date(item.data);
      return itemDate >= new Date(initialDate) && itemDate <= new Date(finalDate);
    }));
    console.log(filteredData)
    // setDataFiltrada(filteredData)
  };

  console.log(dataFiltrada)
  

  return (
    <div className="flex flex-col w-full mx-auto justify-center">
        <FilterShedule handleFilterChange={handleFilterChange} handleFilterChangeFinal={handleFilterChangeFinal} />
        {dataFiltrada && Object.keys(dataFiltrada).map((equipeId) => (
          <CarouselSize key={equipeId} data={dataFiltrada[equipeId]} token={token} />
        ))}
    </div>
  );
};
export default Container;
