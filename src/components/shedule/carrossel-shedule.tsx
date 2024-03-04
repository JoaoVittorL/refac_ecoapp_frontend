"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import CardShedule from "./card-shedule";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { SheduleType } from "@/src/types/rotes";

interface PaginationProps {
  data: SheduleType[];
}

export function CarouselSize({ data }: PaginationProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  console.log(data);
  return (
    <Carousel
      opts={{
        align: "center",
        visible: 20,
      }}
      className="w-full max-w-[1440px] mx-auto"
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/6 lg:basis-1/8">
            <div className="p-1">
              <CardShedule
                id={item.id}
                obra_id={item.obra_id}
                equipe_id={item.equipe_id}
                data={item.data}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselSize;
