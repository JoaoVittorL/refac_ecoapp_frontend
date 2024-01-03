import { SheduleType } from "@/types/rotes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const CardShedule = ({id, obra_id, equipe_id, data} : SheduleType) => {
    return (
        <Card className="max-w-44 w-full">
            <CardHeader>
                <CardTitle>{id}</CardTitle>
                <CardDescription>{obra_id}</CardDescription>
                <CardDescription>{data}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{equipe_id}</p>
            </CardContent>
        </Card>
    )
}
export default CardShedule