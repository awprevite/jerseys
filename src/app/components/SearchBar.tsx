'use client';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  
  return (
    <input className='search-bar'
      type='text'
      placeholder='Search for jerseys...'
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSearch((e.target as HTMLInputElement).value);
        }
      }}
    />
  );
}

interface SearchItemsProps {
  items: any[];
  query: string;
}

function searchItems({ items, query }: SearchItemsProps) {
  if (!query) return items;
  return items.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.team.toLowerCase().includes(query.toLowerCase()));
}

export { SearchBar, searchItems };
