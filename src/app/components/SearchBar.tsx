'use client';

import { useState } from 'react';
import Button from './Button';
import { ItemData } from '../lib/jerseys';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  
  return (
    <>
      <input className='search-bar'
        type='text'
        placeholder='Search for jerseys...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(query);
          }
        }}
      />
      <Button className='info-button' text='Go' onClick={() => onSearch(query)} />
      <Button className='delete-button' text='Reset'onClick={() => { setQuery(''); onSearch(''); }} />
    </>
  );
}

interface SearchItemsProps {
  items: ItemData[];
  query: string;
}

function searchItems({ items, query }: SearchItemsProps) {
  if (!query) return items;
  return items.filter(item => 
    item.firstName.toLowerCase().includes(query.toLowerCase()) ||
    item.lastName.toLowerCase().includes(query.toLowerCase()) ||
    item.number.toString().includes(query) ||
    item.team.toLowerCase().includes(query.toLowerCase()));
}

export { SearchBar, searchItems };
