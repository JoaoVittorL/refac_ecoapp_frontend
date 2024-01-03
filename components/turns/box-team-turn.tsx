import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

export interface Turno {
    id: number
    equipe_id: number
    data: string
    inicio_turno: string
    fim_turno: string
    inicio_deslocamento: string
    fim_deslocamento: string
    hodometro_inicial: number
    hodometro_final: number
    veiculo_id: number
  }
const BoxTeamTurn = ({data} : {data : Turno}) => {
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
                  <TableCell className="max-w-[100px] text-center ">{data[0].equipe_id}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].inicio_turno}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].inicio_deslocamento}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].fim_deslocamento}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].fim_turno}</TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].hodometro_final} </TableCell>
                  <TableCell className="max-w-[100px] text-center ">{data[0].veiculo_id}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
    )
}

export default BoxTeamTurn 