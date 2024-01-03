"use client";
import { TurnsType } from "@/types/rotes";
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
import FilterTurns from "./filter-turns";
import { useRouter } from "next/navigation";
interface PaginationProps {
  data: TurnsType[];
  token: string | null;
}
const TableTurns: React.FC<PaginationProps> = ({
  data,
  token,
}: {
  data: TurnsType[];
  token: string | null;
}) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 14;

  const [filteredUsers, setFilteredUsers] = useState<TurnsType[]>(data);
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
      const filteredList = data.filter((item) => item.equipe === e);
      setFilteredUsers(filteredList);
    }
  };
  const handleClickPage = (id: string) => {
    router.push(`turns/${id}`);
  };
  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto">
          <FilterTurns
            handleFilterChange={handleFilterChange}
            handleOpenModal={handleOpenModal}
          />
          <Table className="max-h-[600px]">
            <TableHeader>
              <TableRow>
                <TableHead className="max-w-[30px]">Data</TableHead>
                <TableHead className="max-w-[40px]">Equipe</TableHead>
                <TableHead>Encarregado</TableHead>
                <TableHead className="max-w-[20px]">Placa</TableHead>
                <TableHead className="max-w-[20px] text-center">
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPageData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="max-w-[30px]">{item.data}</TableCell>
                  <TableCell className="max-w-[40px]">{item.equipe}</TableCell>
                  <TableCell>{item.nome}</TableCell>
                  <TableCell className="max-w-[20px]">{item.placa}</TableCell>
                  <TableCell
                    className="max-w-[20px] cursor-pointer "
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
    </div>
  );
};
export default TableTurns;