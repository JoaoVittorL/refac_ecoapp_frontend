"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
interface PropsFormFilter {
  handleFilterChange: (
    e: React.ChangeEvent<HTMLSelectElement> | string
  ) => void;
  handleOpenModal: () => void;
}

const FilterTurns = ({
  handleFilterChange,
  handleOpenModal,
}: PropsFormFilter) => {
  return (
    <div className="flex flex-col justify-end gap-4 md:flex-row mb-10">
      <Input type="text" placeholder="Encarregado"/>
      <Input type="date" placeholder="Data inicial"/>
      <Input type="date" placeholder="Data final"/>
      <Select onValueChange={(value) => handleFilterChange(value)}>
        <SelectTrigger className="md:w-[180px] w-full">
          <SelectValue placeholder="Tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Filtrar por:">Filtrar por:</SelectItem>
          <SelectItem value="ECOLM0007">ECOLM0007</SelectItem>
          <SelectItem value="ECOLM0008">ECOLM0008</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterTurns;