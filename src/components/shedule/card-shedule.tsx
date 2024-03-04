import { SheduleType } from "@/src/types/rotes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const CardShedule = ({ id, obra_id, equipe_id, data }: SheduleType) => {
  const formattedDate = new Date(data).toLocaleDateString("pt-BR");
  return (
    <Card className="max-w-96 w-full text-black">
      <CardHeader className="flex items-center text-black">
        <CardDescription className="text-lg text-center text-black">
          {formattedDate}
        </CardDescription>

        <CardDescription className="text-lg flex  text-center text-black">
          <span className="font-bold text-black mr-2">Obra:</span>
          <span>{obra_id}</span>
        </CardDescription>
        <CardDescription className="text-lg flex  text-center text-black">
          <span className="font-bold text-black mr-2">Etapa:</span>
          <span className="font-bold text-black mr-2">Programada</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-lg flex  text-center text-black justify-center">
          <span className="font-bold text-black mr-2">Equipe:</span>
          <p className="text-lg text-center">{equipe_id}</p>
        </div>
      </CardContent>
      <div className="flex justify-between gap-2 p-2">
        <Button className="max-w-[50%] w-full" variant="secondary">Editar</Button>
        <Button className="max-w-[50%] w-full">Visualizar</Button>
      </div>
    </Card>
  );
};
export default CardShedule;
