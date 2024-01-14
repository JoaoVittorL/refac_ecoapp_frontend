"use client";
import {
  Table as LocalTable,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import TableHeaderCell from "./TableHeaderCell";

export type Column = {
  label: string;
  key: string;
};

type TableProps = {
  data: any[];
  columns: Column[];
  handleClickId: (id: string | number) => void;
};

const Table = ({ data, columns, handleClickId }: TableProps) => {
  return (
    <LocalTable>
      <TableHeader>
        <TableRow className="text-left">
          {columns.map((column, index) => (
            <TableHeaderCell key={index}>{column.label}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, rowIndex) => (
          <TableRow
            className="cursor-pointer"
            key={rowIndex}
            onClick={() => handleClickId(item.id)}
          >
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex}>{item[column.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </LocalTable>
  );
};

export default Table;
