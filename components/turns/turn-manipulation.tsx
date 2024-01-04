import { RootTurn } from "@/types/turn";
import BoxConstructionTurns from "./box-construction-turns";
import BoxTeamTurn from "./box-team-turn";
import LancamentTurn from "./box-lancament-turn";

  const TurnManipulation: React.FC<RootTurn> = ({ data }) => {
    return <div>
      <BoxTeamTurn data={data.turno[0]}/>
      <div className="border-y-2 my-10">
        {
          data.colaboradores.map((colaborador,index) => {
            return <p key={index} className="my-2">{index} - {colaborador}</p>
          })
        }
      </div>
      <BoxConstructionTurns data={data.obras_turnos}/>
      <LancamentTurn data={data.obras_turnos[0].lancamentos}/>
    </div>;
  }
  
  export default TurnManipulation;