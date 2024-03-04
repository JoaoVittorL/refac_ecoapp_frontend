"use client";

import { TeamsType } from "@/src/types/rotes";

import FilterInputSelect from "@/src/components/tableData/FilterInputSelect";
import Table from "@/src/components/tableData/Table";
import Pagination from "@/src/components/tableData/Pagination";

import { ChangeEvent, useEffect, useState } from "react";
import CreateTeam from "./create";
import { useRouter } from "next/navigation";

interface Props {
  data: TeamsType[];
}
const Form = ({ data }: Props) => {
  var options = ["LM", "LV", "APOIO"];
  const columns = [
    { label: "Equipe", key: "equipe" },
    { label: "Tipo", key: "tipo" },
    { label: "Lider", key: "lider_id" },
    { label: "Coordenador", key: "coordenador_id" },
    { label: "Supervisor", key: "supervisor_id" },
    { label: "Contrato", key: "contrato" },
  ];

  const itensForPage = 12;
  const route = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [arrFiltered, setArrFiltered] = useState<TeamsType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery === "") {
      setArrFiltered(data);
    }
    if (searchQuery.length > 0) {
      const filteredData = data.filter((user) =>
        user.equipe.toLowerCase().includes(searchQuery.toLowerCase())
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
    route.push(`/teams/${id}`);
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto p-4 absolute">
      {!modalIsOpen ? (
        <>
          <FilterInputSelect
            options={options}
            placeholder="Digite usuário"
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
        <CreateTeam isOpen={modalIsOpen} onClose={handleOpenModal} />
      )}
    </div>
  );
};

export default Form;
