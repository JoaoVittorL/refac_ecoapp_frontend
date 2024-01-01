"use client";
import { Button } from "../ui/button";
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

const FilterUsers = ({ handleFilterChange,handleOpenModal }: PropsFormFilter) => {
  return (
    <div className="flex flex-col justify-end gap-4 md:flex-row mb-10">
      <Select onValueChange={(value) => handleFilterChange(value)}>
        <SelectTrigger className="md:w-[180px] w-full">
          <SelectValue placeholder="Tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Filtrar por:">Filtrar por:</SelectItem>
          <SelectItem value="ADM">ADM</SelectItem>
          <SelectItem value="COORDENADOR">COORDENADOR</SelectItem>
          <SelectItem value="CAMPO">CAMPO</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleOpenModal}>Criar</Button>
    </div>
  );
};

export default FilterUsers;
