import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

export interface Lancamento {
    id: number;
    codigo: string;
    descricao: string;
    unidade: string;
    quantidade: number;
  }
  export interface Obra {
    id: number;
    projeto: string;
    descricao: string;
    status: string;
    carteira: string;
    cidade: string;
    utd: string;
  }
export interface ObrasTurno {
    id: number;
    obra_id: number;
    turno_id: number;
    fase_da_obra: string;
    retorno_campo: string;
    fora_programacao: number;
    obra: Obra;
    lancamentos: Lancamento[];
  }

const BoxConstructionTurns = ({data} : {data : ObrasTurno}) => {
    return (
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="max-w-[100px] text-center ">Obra</TableHead>
                <TableHead className="max-w-[100px] text-center ">Turno</TableHead>
                <TableHead className="max-w-[100px] text-center ">Fase da obra</TableHead>
                <TableHead className="max-w-[100px] text-center ">Retorno de campo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow >
                  <TableCell className="max-w-[100px] text-center ">{data[0].obra.projeto}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].fase_da_obra}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].retorno_campo}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].fora_programacao}</TableCell>
                </TableRow>
            </TableBody>
            <TableHeader>
              <TableRow>
                <TableHead className="max-w-[100px] text-center ">Obra</TableHead>
                <TableHead className="max-w-[100px] text-center ">Turno</TableHead>
                <TableHead className="max-w-[100px] text-center ">Fase da obra</TableHead>
                <TableHead className="max-w-[100px] text-center ">Retorno de campo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow >
                  <TableCell className="max-w-[100px] text-center ">{data[0].obra.projeto}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].fase_da_obra}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].retorno_campo}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].fora_programacao}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="max-w-[100px] text-center ">{data[0].obra.descricao}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].obra.status}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].obra.cidade}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].obra.carteira}</TableCell>
                  <TableCell className="max-w-[100px] text-center "></TableCell>
                </TableRow>
            </TableBody>
          </Table>
    )
}
export default BoxConstructionTurns