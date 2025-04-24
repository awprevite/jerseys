'use client';

import { useState } from 'react';
import Button from './Button';
import { Square, SquareCheck } from 'lucide-react';

interface FilterProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

export default function Filter({ label, options, onSelect }: FilterProps) {

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const toggleOption = (option: string) => {
    const selected = selectedOptions.includes(option);
    const updated = selected ? selectedOptions.filter((o) => o !== option) : [...selectedOptions, option];

    setSelectedOptions(updated);
    onSelect(option);
  }

  return (
    <div className='sort'>
      <label className='sort-title'>{label}</label>
      <div className='sort-menu'>
        {options.map((option) => (
          <div className='sort-item' key={option}>
            <Button type='primary' text={selectedOptions.includes(option) ? <SquareCheck /> : <Square/>} onClick={() => toggleOption(option)}/>
            <label className='sort-label'>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
} 