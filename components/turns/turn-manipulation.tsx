import { TurnsType } from "@/types/rotes";

interface PaginationProps {
    data: TurnsType[];
    token: string | null;
    id: string
  }
const TurnManipulation: React.FC<PaginationProps> = ({ data, token,id }) => {
    console.log(data)
     return <div>Turn Manipulation</div>
}
export default TurnManipulation