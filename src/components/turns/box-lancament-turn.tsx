import { Lancamento } from "@/src/types/turn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
const LancamentTurn = ({ data }: { data: Lancamento[] }) => {
  return (
    <Table className="my-10">
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-[100px] text-center ">Código</TableHead>
          <TableHead className="max-w-[100px] text-center ">
            Descrição
          </TableHead>
          <TableHead className="max-w-[100px] text-center ">Unidade</TableHead>
          <TableHead className="max-w-[100px] text-center ">
            Quantidade
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="max-w-[100px] text-center ">
              {item.codigo}
            </TableCell>
            <TableCell className="max-w-[100px] text-center ">
              {item.descricao}
            </TableCell>
            <TableCell className="max-w-[100px] text-center ">
              {item.unidade}
            </TableCell>
            <TableCell className="max-w-[100px] text-center ">
              {item.quantidade}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="max-w-[100px] text-center ">
              {item.codigo}
            </TableCell>
            <TableCell className="max-w-[100px] text-center ">
              {item.descricao}
            </TableCell>
            <TableCell className="max-w-[100px] text-center ">
              {item.unidade}
            </TableCell>
            <TableCell className="max-w-[100px] text-center ">
              {item.quantidade}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="max-w-[100px] text-center ">
              {item.codigo}
            </TableCell>
            <TableCell className="max-w-[100px] text-center ">
              {item.descricao}
            </TableCell>
            <TableCell className="max-w-[100px] text-center ">
              {item.unidade}
            </TableCell>
            <TableCell className="max-w-[100px] text-center ">
              {item.quantidade}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LancamentTurn;
