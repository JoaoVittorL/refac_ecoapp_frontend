"use client";

import { ServiceType } from "@/types/rotes";

import FilterInputSelect from "@/components/tableData/FilterInputSelect";
import Table from "@/components/tableData/Table";
import Pagination from "@/components/tableData/Pagination";

import { ChangeEvent, useEffect, useState } from "react";
import CreateQuestion from "./create-question";
import { useRouter } from "next/navigation";

interface Props {
  data: ServiceType[];
  token: string | null;
}
const Form = ({ data, token }: Props) => {
  var options = ["ADM", "CAMPO", "SUPERVISÃO"];
  const columns = [
    { label: "Tipo", key: "tipo" },
    { label: "Categoria", key: "categoria" },
    { label: "Perguntas", key: "pergunta_resposta" },
  ];

  const itensForPage = 12;
  const route = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [arrFiltered, setArrFiltered] = useState<ServiceType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery === "") {
      setArrFiltered(data);
    }
    if (searchQuery.length > 0) {
      const filteredData = data.filter((user) =>
        user.codigo.toLowerCase().includes(searchQuery.toLowerCase())
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
      const filteredList = data.filter((item) => item.unidade === value);
      setArrFiltered(filteredList);
    }
  };

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleClickId = (id: string | number) => {
    route.push(`/questions/${id}`);
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto p-4">
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
        <CreateQuestion
          isOpen={modalIsOpen}
          onClose={handleOpenModal}
        />
      )}
    </div>
  );
};

export default Form;
