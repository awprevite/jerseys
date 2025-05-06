'use client';

import { useState } from 'react';
import Button from './Button';
import { Square, SquareCheck } from 'lucide-react';

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
            <Button type='primary' text={selectedOptions.includes(option) ? <SquareCheck /> : <Square/>} onClick={() => toggleOption(option)}/>
            <label className='sort-label'>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FilterItemsProps {
  items: any[];
  filterBy: {
    [key: string]: string[];
  };
}

function filterItems({ items, filterBy }: FilterItemsProps) {
  return items.filter((item) => {
    return Object.entries(filterBy).every(([key, values]) => {
      if (values.includes('all') || values.length === 0) return true;
      return values.includes(item[key]);
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
  const allFilters = ['All', 'Adidas', 'Reebok', 'Fanatics', '50', '52'];
  let filterKey = '';
  if ( newFilter === '50' || newFilter === '52') {
    filterKey = 'size';
  } else if ( newFilter === 'Adidas' || newFilter === 'Reebok' || newFilter === 'Fanatics') { 
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
