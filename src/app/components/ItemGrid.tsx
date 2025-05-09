'use client';

import { useState } from 'react';
import Item from './Item';
import { ItemData } from '../lib/jerseys';

export default function ItemContainer({ items }: { items: ItemData[] }) {

  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);

  return (
    <>
      {selectedItem ? (
        <div className='selected-item-container'>
          <Item
            firstName={selectedItem.firstName}
            lastName={selectedItem.lastName}
            number={selectedItem.number}
            team={selectedItem.team}
            brand={selectedItem.brand}
            size={selectedItem.size}
            frontImageUrl={selectedItem.frontImageUrl}
            backImageUrl={selectedItem.backImageUrl}
            forSale={selectedItem.forSale}
            price={selectedItem.price}
            sold={selectedItem.sold}
            selected={true}
            onClose={() => setSelectedItem(null)}
          />
        </div>
      ) : (
        <div className='item-grid-container'>
          <h1>{`${items.length} results`}</h1>
          <div className='item-grid'>
            {items.map((item, index) => (
              <Item
                key={index}
                firstName={item.firstName}
                lastName={item.lastName}
                number={item.number}
                team={item.team}
                brand={item.brand}
                size={item.size}
                frontImageUrl={item.frontImageUrl}
                backImageUrl={item.backImageUrl}
                forSale={item.forSale}
                price={item.price}
                sold={item.sold}
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