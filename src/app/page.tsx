'use client';

import { useState } from 'react';
import './globals.css';
import { SearchBar, searchItems } from './components/SearchBar';
import ItemGrid from './components/ItemGrid';
import { Sort, sortItems } from './components/Sort';
import { Filter, filterItems, setFilterItems } from './components/Filter';
import { useJerseys } from './lib/jerseys';

export default function Home() {

  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState<{ [key: string]: string[] }>({
    'size': ['all'],
    'brand': ['all']
  });
  const allItems = useJerseys();

  const searchedItems = searchItems({ items: allItems, query })
  const filteredItems = filterItems({ items: searchedItems, filterBy })
  const sortedItems = sortItems({ items: filteredItems, sortBy });

  return (
    <div className='page-container'>
      <div className='search-bar-container'>
        <SearchBar onSearch={(option) => setQuery(option)} />
      </div>
      <div className='content'>
        <div className='sidebar'>
          <Sort
            label='Sort By'
            options={['Name', 'Number', 'Size', 'Brand']}
            onSelect={(option) => setSortBy(option)}
          />
          <Filter
            label='Filter'
            options={['Adidas', 'Reebok', 'Fanatics', 'Nike', 'Troy', '48', '50', '52', 'S', 'M', 'L', 'XL']}
            onSelect={(option) => setFilterBy(setFilterItems({ newFilter: option, filterBy }))}
          />
        </div>
        <ItemGrid items={sortedItems}/>
      </div>
    </div>
  );
}
