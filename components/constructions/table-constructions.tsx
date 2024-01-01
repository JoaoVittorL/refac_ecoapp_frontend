"use client";
import { ConstructionType } from "@/types/rotes";
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
import FilterUsers from "./filter-construction";
import CreateUser from "./create-construction";
interface PaginationProps {
  data: ConstructionType[];
  token: string | null;
}
const TableUsers: React.FC<PaginationProps> = ({
  data,
  token,
}: {
  data: ConstructionType[];
  token: string | null;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const headers = [
    "Projeto",
    "Descrição",
    "Cidade",
    "UTD",
    "Carteira",
    "Status",
    "Ações",
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 14;

  const [filteredUsers, setFilteredUsers] = useState<ConstructionType[]>(data);
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
      const filteredList = data.filter((item) => item.status === e);
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
                <TableHead>Placa</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Cidade</TableHead>
                <TableHead>UTD</TableHead>
                <TableHead>Carteira</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPageData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.projeto}</TableCell>
                  <TableCell>{item.descricao}</TableCell>
                  <TableCell>{item.cidade}</TableCell>
                  <TableCell>{item.utd}</TableCell>
                  <TableCell>{item.carteira}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell onClick={() => handleClickPage(item.id as string)}>
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
