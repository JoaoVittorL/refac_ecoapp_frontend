import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ pageCount, handlePageClick }: any) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onClick = (index: number) => {
    setCurrentPage(index);
    handlePageClick(index);
  };

  return (
    <ul className="flex itens-center justify-center gap-2 mt-4">
      <li>
        <a
          href="#"
          onClick={() => onClick(currentPage - 1)}
          className={` hover:bg-gray-200 ${
            currentPage === 0 ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <FaAngleLeft className="text-2xl" />
        </a>
      </li>
      {[...Array(pageCount)].map((_, index) => (
        <li key={index}>
          <a
            href="#"
            onClick={() => onClick(index)}
            className={`px-3 py-1 rounded border  hover:bg-gray-200 ${
              currentPage === index ? "bg-blue-950 text-white" : ""
            }`}
          >
            {index + 1}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={() => onClick(currentPage + 1)}
          className={` hover:bg-gray-200 ${
            currentPage === pageCount - 1
              ? "pointer-events-none opacity-50"
              : ""
          }`}
        >
          <FaAngleRight className="text-2xl" />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
