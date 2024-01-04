"use client";
import { UsersType } from "@/types/rotes";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
} from "../ui/table";
import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";
import FilterUsers from "./filter-users";
import CreateUser from "./create-user";
import { useRouter } from "next/navigation";
import { ChangeEvent } from 'react';

interface PaginationProps {
  data: UsersType[];
  token: string | null;
}
const TableUsers: React.FC<PaginationProps> = ({
  data,
  token,
}: {
  data: UsersType[];
  token: string | null;
}) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 12;
  const [filteredUsers, setFilteredUsers] = useState<UsersType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setFilteredUsers(data);
  }, [data]);

  const offset = currentPage * usersPerPage;
  const currentPageData = filteredUsers.slice(offset, offset + usersPerPage);
  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement> | string) => {
    if (typeof e === 'string') {
      const selectedValue = e;
      if (selectedValue === 'Filtrar por:') {
        setFilteredUsers(data);
      } else {
        const filteredList = data.filter((item) => item.tipo === selectedValue);
        setFilteredUsers(filteredList);
      }
    } else {
      const selectedValue = e.target.value;
      if (selectedValue === 'Filtrar por:') {
        setFilteredUsers(data);
      } else {
        const filteredList = data.filter((item) => item.tipo === selectedValue);
        setFilteredUsers(filteredList);
      }
    }
  };

  const handleClickPage = (id: string) => {
    router.push(`users/${id}`);
  };
  const handleUserChange = (query: string | ChangeEvent<HTMLInputElement>) => {
      if (typeof query === 'string' && query.length > 2) {
          setSearchQuery(query);
          const filteredData = data.filter((user) =>
            user.nome.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredUsers(filteredData);
        }
    }
  }

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      {!modalIsOpen ? (
        <>
          <FilterUsers
            handleUserChange={handleUserChange}
            handleFilterChange={handleFilterChange}
            handleOpenModal={handleOpenModal}
          />
          <div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="max-w-[60px]">CPF</TableHead>
                <TableHead className="max-w-[200px]">Nome</TableHead>
                <TableHead className="max-w-[200px]">E-mail</TableHead>
                <TableHead className="max-w-[100px]">Tipo</TableHead>
                <TableHead className="max-w-[200px]">Equipe</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPageData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="max-w-[60px]">{item.cpf}</TableCell>
                  <TableCell className="max-w-[200px]">{item.nome}</TableCell>
                  <TableCell className="max-w-[200px]">{item.email}</TableCell>
                  <TableCell className="max-w-[100px]">{item.tipo}</TableCell>
                  <TableCell className="max-w-[200px]">
                    {item.equipe_id}
                  </TableCell>
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