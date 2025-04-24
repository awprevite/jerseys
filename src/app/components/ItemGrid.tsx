'use client';

import { useState } from 'react';
import Item from './Item';

interface ItemData {
  size: 'small' | 'large';
  name: string;
  number: number;
  team: string;
}

const mockItems: ItemData[] = [
  {size: 'small', name: 'Connor McDavid', number: 97, team: 'Edmonton Oilers'},
  {size: 'small', name: 'Auston Matthews', number: 34, team: 'Toronto Maple Leafs'},
  {size: 'small', name: 'Sidney Crosby', number: 87, team: 'Pittsburgh Penguins'},
  {size: 'small', name: 'Alex Ovechkin', number: 8, team: 'Washington Capitals'},
  {size: 'small', name: 'Nathan MacKinnon', number: 29, team: 'Colorado Avalanche'},  
  {size: 'small', name: 'Leon Draisaitl', number: 29, team: 'Edmonton Oilers'},
  {size: 'small', name: 'Patrick Kane', number: 88, team: 'Chicago Blackhawks'},
  {size: 'small', name: 'Steven Stamkos', number: 91, team: 'Tampa Bay Lightning'},
  {size: 'small', name: 'Brad Marchand', number: 63, team: 'Boston Bruins'},
];

export default function ItemContainer() {

  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);

  return (
    <>
      {selectedItem ? (
        <Item
          size={selectedItem.size}
          name={selectedItem.name}
          number={selectedItem.number}
          team={selectedItem.team}
          selected={true}
          onClose={() => setSelectedItem(null)}
        />
      ) : (
        <div className='item-grid'>
          {mockItems.map((item, index) => (
            <Item
              key={index}
              size={item.size}
              name={item.name}
              number={item.number}
              team={item.team}
              selected={false}
              onSelect={() => setSelectedItem(item)}
            />
          ))}
        </div>
    )}
  </>
  );
}