"use client";

import { VehicleType } from "@/types/rotes";

import FilterInputSelect from "@/components/tableData/FilterInputSelect";
import Table from "@/components/tableData/Table";
import Pagination from "@/components/tableData/Pagination";

import { ChangeEvent, useEffect, useState } from "react";
import CreateVehicle from "./create";
import { useRouter } from "next/navigation";

interface Props {
  data: VehicleType[];
}
const Form = ({ data }: Props) => {
  var options = ["caminhão", "leve","apoio"];
  const columns = [
    { label: "Placa", key: "placa" },
    { label: "Tipo", key: "tipo" },
    { label: "Equipe", key: "equipe_id" },
    {label: "Cidade", key: "cidade"}
  ];

  const itensForPage = 12;
  const route = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [arrFiltered, setArrFiltered] = useState<VehicleType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery === "") {
      setArrFiltered(data);
    }
    if (searchQuery.length > 0) {
      const filteredData = data.filter((user) =>
        user.placa.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setArrFiltered(filteredData);
    }
    setCurrentPage(0);
  }, [data, searchQuery]);

  const offset = currentPage * itensForPage;
  const pageCount = Math.ceil(arrFiltered.length / itensForPage);
  const currentPageData = arrFiltered.slice(offset, offset + itensForPage);

  const handlePageClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const handleSelectChange = (
    value: string | ChangeEvent<HTMLSelectElement>
  ) => {
    if (value === "Filtrar por:") {
      setArrFiltered(data);
    } else {
      const filteredList = data.filter((item) => item.tipo === value);
      setArrFiltered(filteredList);
    }
  };

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleClickId = (id: string | number) => {
    route.push(`/vehicles/${id}`);
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto p-4">
      {!modalIsOpen ? (
        <>
          <FilterInputSelect
            options={options}
            placeholder="Digite a placa"
            handleSelectChange={handleSelectChange}
            handleCaractersSearch={(e) => setSearchQuery(e as string)}
            handleOpenModal={handleOpenModal}
          />
          <Table
            data={currentPageData}
            columns={columns}
            handleClickId={handleClickId}
          />
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        </>
      ) : (
        <CreateVehicle isOpen={modalIsOpen} onClose={handleOpenModal} />
      )}
    </div>
  );
};

export default Form;
