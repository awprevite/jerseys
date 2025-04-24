'use client';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
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
