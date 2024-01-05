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
  handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement> | string) => void;
  handleUserChange :(e: React.ChangeEvent<HTMLInputElement> | string) => void;
  handleOpenModal: () => void;
}

const FilterUsers = ({
  handleFilterChange,
  handleOpenModal,
  handleUserChange
}: PropsFormFilter) => {
  return (
    <div className="flex flex-col justify-end gap-4 md:flex-row mb-10">
      <Input onChange={(event) => handleUserChange(event.target.value)} placeholder="Pesquise o código..."/>
      <Select onValueChange={(value) => handleFilterChange(value)}>
        <SelectTrigger className="md:w-[180px] w-full">
          <SelectValue placeholder="Tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Filtrar por:">Filtrar por:</SelectItem>
          <SelectItem value="UD">UD</SelectItem>
          <SelectItem value="Unidunitê">Unidunitê</SelectItem>
          <SelectItem value="M">M</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleOpenModal}>Criar</Button>
    </div>
  );
};

export default FilterUsers;
