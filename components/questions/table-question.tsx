"use client";
import { QuestionType } from "@/types/rotes";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
} from "../ui/table";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import FilterUsers from "./filter-question";
import CreateUser from "./create-question";
interface PaginationProps {
  data: QuestionType[];
  token: string | null;
}
const TableUsers: React.FC<PaginationProps> = ({
  data,
  token,
}: {
  data: QuestionType[];
  token: string | null;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const headers = ["Tipo", "Categoria", "Perguntas", "Ações"];
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 12;

  const [filteredUsers, setFilteredUsers] = useState<QuestionType[]>(data);
  const offset = currentPage * usersPerPage;
  const currentPageData = filteredUsers.slice(offset, offset + usersPerPage);

  const pageCount = Math.ceil(data.length / usersPerPage);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement> | string
  ) => {
    if (e == "Filtrar por:") {
      setFilteredUsers(data);
    } else {
      const filteredList = data.filter((item) => item.tipo === e);
      setFilteredUsers(filteredList);
    }
  };
  const handleClickPage = (id: string) => {
    console.log(id);
  };
  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      {!modalIsOpen ? (
        <>
          <FilterUsers
            handleFilterChange={handleFilterChange}
            handleOpenModal={handleOpenModal}
          />
          <Table className="max-h-[600px]">
            <TableHeader>
              <TableRow>
                <TableHead className="max-w-[100px] min-w-[100px]">
                  Tipo
                </TableHead>
                <TableHead className="max-w-[200px] min-w-[200px]">
                  Categoria
                </TableHead>
                <TableHead>Perguntas</TableHead>
                <TableHead className="max-w-[100px] min-w-[100px] text-center">
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPageData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="max-w-[100px] min-w-[100px]">
                    {item.tipo}
                  </TableCell>
                  <TableCell className="max-w-[200px] min-w-[200px]">
                    {item.categoria}
                  </TableCell>
                  <TableCell>{item.pergunta_resposta}</TableCell>
                  <TableCell
                    className="max-w-[100px] min-w-[100px]"
                    onClick={() => handleClickPage(item.id as string)}
                  >
                    <FaPen className="w-full mx-auto" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end mt-4">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={`px-4 py-2 mx-1 border text-xs border-gray-300 rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-slate-200 focus:outline-none ${
                  currentPage === index
                    ? "bg-blue-800 text-white border-blue-500"
                    : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <CreateUser
          token={token}
          isOpen={modalIsOpen}
          onClose={handleOpenModal}
        />
      )}
    </div>
  );
};
export default TableUsers;