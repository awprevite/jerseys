'use client';

import './globals.css';
import SearchBar from './components/SearchBar';
import ItemGrid from './components/ItemGrid';
import Sort from './components/Sort';
import Filter from './components/Filter';

export default function Home() {
  return (
    <div className='page-container'>
      <div className='search-bar-container'>
        <SearchBar onSearch={() => alert('Searching..')} />
      </div>
      <div className='content'>
        <div className='sidebar'>
          <Sort
            label='Sort By'
            options={['Name', 'Year', 'Price']}
            onSelect={(option) => alert(`Selected: ${option}`)}
          />
          <Filter
            label='Filter'
            options={['Adidas', 'Reebok', 'Fanatics']}
            onSelect={(option) => alert(`Selected: ${option}`)}
          />
        </div>
        <ItemGrid />
      </div>
    </div>
  );
}
