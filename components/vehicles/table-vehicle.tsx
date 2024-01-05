"use client";
import { VehicleType } from "@/types/rotes";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
} from "../ui/table";
import { FaPen } from "react-icons/fa";
import { ChangeEvent, useEffect, useState } from "react";
import FilterUsers from "./filter-vehicle";
import CreateUser from "./create-vehicle";
import { useRouter } from "next/navigation";
interface PaginationProps {
  data: VehicleType[];
  token: string | null;
}
const TableUsers: React.FC<PaginationProps> = ({
  data,
  token,
}: {
  data: VehicleType[];
  token: string | null;
}) => {
  const route = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 14;

  const [filteredUsers, setFilteredUsers] = useState<VehicleType[]>(data);
  const offset = currentPage * usersPerPage;
  const currentPageData = filteredUsers.slice(offset, offset + usersPerPage);
  const [searchQuery, setSearchQuery] = useState('');

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
    route.push(`/vehicles/${id}`);
  };
  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleUserChange = (query: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof query === 'string') {
      setSearchQuery(query);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 2) {
      const filteredData = data.filter((user) =>
        user.placa.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filteredData);
    } else {
      setFilteredUsers(data);
    }
  }, [searchQuery, data]);

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      {!modalIsOpen ? (
        <>
          <FilterUsers
            handleUserChange={handleUserChange}
            handleFilterChange={handleFilterChange}
            handleOpenModal={handleOpenModal}
          />
          <Table className="max-h-[600px]">
            <TableHeader>
              <TableRow>
                <TableHead>Placa</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Equipe</TableHead>
                <TableHead>Cidade</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPageData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.placa}</TableCell>
                  <TableCell>{item.tipo}</TableCell>
                  <TableCell>{item.equipe_id}</TableCell>
                  <TableCell>CIDADE</TableCell>
                  <TableCell className="cursor-pointer" onClick={() => handleClickPage(item.id as string)}>
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
