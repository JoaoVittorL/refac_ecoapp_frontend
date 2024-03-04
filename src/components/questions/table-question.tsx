"use client";
import { QuestionType } from "@/src/types/rotes";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
} from "../ui/table";
import { ChangeEvent, useEffect, useState } from "react";
import FilterUsers from "./filter-question";
import CreateUser from "./create-question";
interface PaginationProps {
  data: QuestionType[];
}
const TableUsers: React.FC<PaginationProps> = ({
  data,
}: {
  data: QuestionType[];
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isDelete, setDelete] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 10;

  const [filteredUsers, setFilteredUsers] = useState<QuestionType[]>(data);
  const offset = currentPage * usersPerPage;
  const currentPageData = filteredUsers.slice(offset, offset + usersPerPage);

  const pageCount = Math.ceil(data.length / usersPerPage);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleCheckboxChange = (id: string) => {
    if (isDelete.includes(id)) {
      setDelete(isDelete.filter((item) => item !== id));
    } else {
      setDelete([...isDelete, id]);
    }
  };

  const handleDelete = async () => {
    isDelete?.forEach(async (id) => {
      try {
        const response = await fetch("/api/questions", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${}`,
          },
          body: JSON.stringify({
            id: id,
          }),
        });
        const data = await response.json();
        if (data.message == "Pergunta atualizada com sucesso!") {
          const beforeDeleteList = filteredUsers.filter((item) => {
            if (item.id != id) {
              return item;
            }
          });
          setFilteredUsers(beforeDeleteList);
        } else {
          alert(
            "Erro ao deletar pergunta. Por favor, tente novamente mais tarde!"
          );
        }
        setDelete([]);
      } catch (error) {
        console.error("Erro ao deletar pergunta:", error);
      }
    });
  };

  const handleUserChange = (query: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof query === "string") {
      setSearchQuery(query);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 2) {
      const filteredData = data.filter((user) =>
        user.pergunta_resposta.toLowerCase().includes(searchQuery.toLowerCase())
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
            isDelete={isDelete}
            handleDelete={handleDelete}
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
                  <TableCell className="max-w-[100px] min-w-[100px] text-center">
                    <input
                      id="disabled-checkbox"
                      type="checkbox"
                      className="w-6 h-6  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={isDelete.includes(item.id.toString())}
                      onChange={() => handleCheckboxChange(item.id.toString())}
                    />
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
          isOpen={modalIsOpen}
          onClose={handleOpenModal}
        />
      )}
    </div>
  );
};
export default TableUsers;
