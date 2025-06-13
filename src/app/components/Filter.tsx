'use client';

import { useState } from 'react';
import Button from './Button';
import { Square, SquareCheck } from 'lucide-react';
import { ItemData } from '../lib/jerseys';

interface FilterProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

function Filter({ label, options, onSelect }: FilterProps) {

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
            <Button className='checkbox' text={selectedOptions.includes(option) ? <SquareCheck /> : <Square/>} onClick={() => toggleOption(option)}/>
            <label className='sort-label'>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FilterItemsProps {
  items: ItemData[];
  filterBy: {
    [key: string]: string[];
  };
}

function filterItems({ items, filterBy }: FilterItemsProps) {
  return items.filter((item) => {
    return Object.entries(filterBy).every(([key, values]) => {
      if (values.includes('all') || values.length === 0) return true;
      if (key in item) {
        const itemProperty = key as keyof ItemData;
        const itemValue = item[itemProperty];
        const itemValueAsString = String(itemValue);
        return values.includes(itemValueAsString);
      }
      return true;
    });
  });
}

interface SetFilterItemsProps {
  newFilter: string;
  filterBy: {
    [key: string]: string[];
  };
}

function setFilterItems({ newFilter, filterBy }: SetFilterItemsProps) {

  const updated = { ...filterBy };
  const allFilters = ['Adidas', 'Reebok', 'Fanatics', 'Nike', 'Troy', 'Champro', '48', '50', '52', 'S', 'M', 'L', 'XL'];
  let filterKey = '';
  if (['48', '50', '52', 'S', 'M', 'L', 'XL'].includes(newFilter)) {
    filterKey = 'size';
  } else if (['Adidas', 'Reebok', 'Fanatics', 'Nike', 'Troy', 'Champro'].includes(newFilter)) { 
    filterKey = 'brand';
  }

  for (const filter of allFilters) {
    if(newFilter === filter) {
      if (updated[filterKey].includes(filter)) {
        updated[filterKey] = updated[filterKey].filter((item) => item !== filter);
        if (updated[filterKey].length === 0) {
          updated[filterKey].push('all');
        }
      } else {
        updated[filterKey].push(filter);
        updated[filterKey] = updated[filterKey].filter((item) => item !== 'all');
      }
      return updated;
    }
  }
  return updated;
}

export { Filter, filterItems, setFilterItems };
