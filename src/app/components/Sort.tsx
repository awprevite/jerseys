'use client';

import { useState } from 'react';
import Button from './Button';
import { Square, SquareCheck } from 'lucide-react';
import { ItemData } from '../lib/jerseys';

interface SortProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

function Sort({ label, options, onSelect }: SortProps) {
  
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleSelect = (option: string) => {
    if (selectedOption === option){
      setSelectedOption(null)
    } else {
      setSelectedOption(option);
    }
    onSelect(option);
  };

  return (
    <div className='sort'>
      <label className='sort-title'>{label}</label>
      <div className='sort-menu'>
        {options.map((option) => (
          <div className='sort-item' key={option}> 
            <Button className='checkbox' text={selectedOption === option ? <SquareCheck/> : <Square />} onClick={() => handleSelect(option)}/>
            <label className='sort-label'>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SortItemsProps {
  items: ItemData[];
  sortBy: string;
}

function sortItems({ items, sortBy}: SortItemsProps) {
  if (sortBy === 'Name') {
    return [...items].sort((a, b) => {
      if (a.lastName === 'Blank' && b.lastName !== 'Blank') return -1;
      if (b.lastName === 'Blank' && a.lastName !== 'Blank') return 1;
      return a.lastName.localeCompare(b.lastName);
    });
  }
  if (sortBy === 'Number') {
    return [...items].sort((a, b) => a.number - b.number);
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
  if (sortBy === 'Team') {
    return [...items].sort((a, b) => a.team.localeCompare(b.team));
  }
  return items;
}

export { Sort, sortItems };