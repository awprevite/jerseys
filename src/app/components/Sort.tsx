'use client';

import { useState } from 'react';
import Button from './Button';
import { Square, SquareCheck } from 'lucide-react';

interface SortProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

function Sort({ label, options, onSelect }: SortProps) {
  
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleSelect = (option: string) => {
    selectedOption === option ? setSelectedOption(null) : setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className='sort'>
      <label className='sort-title'>{label}</label>
      <div className='sort-menu'>
        {options.map((option) => (
          <div className='sort-item' key={option}> 
            <Button type='primary' text={selectedOption === option ? <SquareCheck/> : <Square />} onClick={() => handleSelect(option)}/>
            <label className='sort-label'>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SortItemsProps {
  items: any[];
  sortBy: string;
}

function sortItems({ items, sortBy}: SortItemsProps) {
  if (sortBy === 'Name') {
    return [...items].sort((a, b) => a.lastName.localeCompare(b.name));
  }
  if (sortBy === 'Number') {
    return [...items].sort((a, b) => a.number - b.number);
  }
  if (sortBy === 'Year') {
    return [...items].sort((a, b) => a.year - b.year);
  }
  if (sortBy === 'Price') {
    return [...items].sort((a, b) => a.price - b.price);
  }
  if (sortBy === 'Size') {
    return [...items].sort((a, b) => a.size.localeCompare(b.size));
  }
  if (sortBy === 'Brand') {
    return [...items].sort((a, b) => a.brand.localeCompare(b.brand));
  }
  return items;
}

export { Sort, sortItems };