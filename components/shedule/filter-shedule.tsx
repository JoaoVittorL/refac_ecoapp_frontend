"use client";
import React from 'react';
import { Input } from '../ui/input';

interface PropsFormFilter {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterChangeFinal: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterShedule = ({ handleFilterChange,handleFilterChangeFinal }: PropsFormFilter) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange(event);
  };

  const handleChangeFinal = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChangeFinal(event);
  };
  
  return (
    <div className="w-full max-w-[1440px] flex justify-start flex-row mx-auto my-4 gap-4" >
      <Input type="text"  />
      <Input type="date" onChange={handleChange} />
      <Input type="date" onChange={handleChangeFinal} />
    </div>
  );
};

export default FilterShedule;
