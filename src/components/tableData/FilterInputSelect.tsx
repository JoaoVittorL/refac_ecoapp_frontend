"use client";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Button } from "@/src/components/ui/button";

interface Props {
  options: string[];
  placeholder: string;
  handleSelectChange: (
    e: React.ChangeEvent<HTMLSelectElement> | string
  ) => void;
  handleCaractersSearch: (
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => void;
  handleOpenModal: () => void;
}

const FilterUsers = ({
  options,
  placeholder,
  handleSelectChange,
  handleCaractersSearch,
  handleOpenModal,
}: Props) => {
  return (
    <div className="flex flex-col justify-end gap-4 md:flex-row mb-10">
      <Input
        placeholder={placeholder}
        onChange={(event) => handleCaractersSearch(event.target.value)}
      />

      <Select onValueChange={(value) => handleSelectChange(value)}>
        <SelectTrigger className="md:w-[180px] w-full">
          <SelectValue placeholder="Tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Filtrar por:">Filtrar por:</SelectItem>
          {options.map((item: string, index: number) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={handleOpenModal}>Criar</Button>
    </div>
  );
};

export default FilterUsers;
