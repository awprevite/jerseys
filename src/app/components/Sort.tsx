'use client';

import { useState } from 'react';
import Button from './Button';
import { Square, SquareCheck } from 'lucide-react';

interface SortProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

export default function Sort({ label, options, onSelect }: SortProps) {
  
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