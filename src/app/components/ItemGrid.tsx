'use client';

import { useState } from 'react';
import Item from './Item';
import { mockItems, ItemData } from '../lib/mockItems';

export default function ItemContainer({ items }: { items: ItemData[] }) {

  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);

  return (
    <>
      {selectedItem ? (
        <Item
          size={selectedItem.size}
          name={selectedItem.name}
          number={selectedItem.number}
          team={selectedItem.team}
          brand={selectedItem.brand}
          image={selectedItem.image}
          selected={true}
          onClose={() => setSelectedItem(null)}
        />
      ) : (
        <div className='item-grid-container'>
          <h1>{`${items.length} results`}</h1>
          <div className='item-grid'>
            {items.map((item, index) => (
              <Item
                key={index}
                size={item.size}
                name={item.name}
                number={item.number}
                team={item.team}
                brand={item.brand}
                image={item.image}
                selected={false}
                onSelect={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>
    )}
  </>
  );
}