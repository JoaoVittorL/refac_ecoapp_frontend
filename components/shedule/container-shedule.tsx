import { SheduleType } from '@/types/rotes';
import CarouselSize from './carrossel-shedule'
interface PaginationProps {
    data: SheduleType[];
    token: string | null;
  }
const Container = ({data,token} : PaginationProps) => {
    console.log(data)
    return (
        <div className="flex w-full mx-auto justify-center">
            <CarouselSize data={data} token={token}/>
        </div>
    )
}
export default Container