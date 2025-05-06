'use client';

import { useState } from 'react';
import './globals.css';
import { SearchBar, searchItems } from './components/SearchBar';
import ItemGrid from './components/ItemGrid';
import { Sort, sortItems } from './components/Sort';
import { Filter, filterItems, setFilterItems } from './components/Filter';
import { mockItems } from './lib/mockItems';

export default function Home() {

  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('Name');
  const [filterBy, setFilterBy] = useState<{ [key: string]: string[] }>({
    'size': ['all'],
    'brand': ['all']
  });
  const [allItems, setAllItems] = useState(mockItems);

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
            options={['Adidas', 'Reebok', 'Fanatics', '50', '52']}
            onSelect={(option) => setFilterBy(setFilterItems({ newFilter: option, filterBy }))}
          />
        </div>
        <ItemGrid items={sortedItems}/>
      </div>
    </div>
  );
}
