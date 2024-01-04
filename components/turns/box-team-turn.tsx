import { TurnoTurns } from "@/types/turn"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
const BoxTeamTurn = ({data} : {data : TurnoTurns}) => {
    return (
       <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="max-w-[100px] text-center ">Equipe</TableHead>
                <TableHead className="max-w-[100px] text-center ">Veículo</TableHead>
                <TableHead className="max-w-[100px] text-center ">Inicio de turno</TableHead>
                <TableHead className="max-w-[100px] text-center ">Inicio deslocamento</TableHead>
                <TableHead className="max-w-[100px] text-center ">Fim de deslocmento</TableHead>
                <TableHead className="max-w-[100px] text-center ">Fim de turno</TableHead>
                <TableHead className="max-w-[100px] text-center ">Hodômetro final</TableHead>
               
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow >
                  <TableCell className="max-w-[100px] text-center ">{data.equipe_id}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data.inicio_turno}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data.inicio_deslocamento}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data.fim_deslocamento}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data.fim_turno}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data.hodometro_final} </TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data.veiculo_id}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
    )
}

export default BoxTeamTurn 