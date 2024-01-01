"use client";
import { TeamsType } from "@/types/rotes";
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
import FilterUsers from "./filter-teams";
import CreateUser from "./create-teams";
import { useRouter } from "next/navigation";
interface PaginationProps {
  data: TeamsType[];
  token: string | null;
}
const TableUsers: React.FC<PaginationProps> = ({
  data,
  token,
}: {
  data: TeamsType[];
  token: string | null;
}) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const headers = [
    "Equipe ",
    "Tipo",
    "Lider",
    "Contrato",
    "Coordenador",
    "Supervisor",
    "Ações",
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 14;

  const [filteredUsers, setFilteredUsers] = useState<TeamsType[]>(data);
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
      const filteredList = data.filter((item) => item.contrato === e);
      setFilteredUsers(filteredList);
    }
  };
  const handleClickPage = (id: string) => {
    router.push(`teams/${id}`);
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
                <TableHead className="max-w-[60px]">Equipe</TableHead>
                <TableHead className="max-w-[60px]">Tipo</TableHead>
                <TableHead>Lider</TableHead>
                <TableHead>Coordenador</TableHead>
                <TableHead>Supervisor</TableHead>
                <TableHead className="max-w-[40px]">Contrato</TableHead>
                <TableHead className="max-w-[40px] text-center">
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPageData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="max-w-[60px]">{item.equipe}</TableCell>
                  <TableCell className="max-w-[60px]">{item.tipo}</TableCell>
                  <TableCell>{item.lider_id}</TableCell>
                  <TableCell>{item.coordenador_id}</TableCell>
                  <TableCell>{item.supervisor_id}</TableCell>
                  <TableCell className="max-w-[40px]">
                    {item.contrato}
                  </TableCell>
                  <TableCell
                    className="max-w-[40px] cursor-pointer "
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
