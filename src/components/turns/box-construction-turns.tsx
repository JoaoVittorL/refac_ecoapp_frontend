import {  ObrasTurno } from "@/src/types/turn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";



const BoxConstructionTurns = ({ data }: { data: ObrasTurno[] }) => {
  return (
         <Table>
           <TableHeader >
             <TableRow>
               <TableHead className="max-w-[100px] text-center ">Obra</TableHead>
               <TableHead className="max-w-[100px] text-center ">
                 Descrição
               </TableHead>
               <TableHead className="max-w-[100px] text-center ">
                 Status
               </TableHead>
               <TableHead className="max-w-[100px] text-center ">
                 Carteira
               </TableHead>
               <TableHead className="max-w-[100px] text-center ">
                 Cidade
               </TableHead>
               <TableHead className="max-w-[100px] text-center ">UTD</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
             <TableRow>
               <TableCell className="max-w-[100px] text-center ">
                 {data[0].obra.projeto}
               </TableCell>
               <TableCell className="max-w-[100px] text-center ">
                 {data[0].obra.descricao}
               </TableCell>
               <TableCell className="max-w-[100px] text-center ">
                 {data[0].obra.status}
               </TableCell>
               <TableCell className="max-w-[100px] text-center ">
                 {data[0].obra.carteira}
               </TableCell>
               <TableCell className="max-w-[100px] text-center ">
                 {data[0].obra.cidade}
               </TableCell>
               <TableCell className="max-w-[100px] text-center ">
                 {data[0].obra.utd}
               </TableCell>
             </TableRow>
           </TableBody>
         </Table>
  );
};
export default BoxConstructionTurns;
