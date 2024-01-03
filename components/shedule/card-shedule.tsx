import { SheduleType } from "@/types/rotes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const CardShedule = ({id, obra_id, equipe_id, data} : SheduleType) => {
    return (
        <Card className="max-w-44 w-full text-black">
            <CardHeader className="flex items-center text-black">
                <CardDescription className="text-lg text-center text-black">{data}</CardDescription>
               
                <CardDescription className="flex items-center">
                    <span className="font-bold text-black mr-2">Projeto: </span>
                    <span>{obra_id}</span>
                </CardDescription>
                <CardDescription className="text-lg text-center text-black">
                    <span className="font-bold text-black mr-2">Etapa: </span>
                    <span className="font-bold text-black mr-2">Programada</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-center">{equipe_id}</p>
            </CardContent>
        </Card>
    )
}
export default CardShedule