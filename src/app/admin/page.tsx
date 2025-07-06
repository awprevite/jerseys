'use client';

import ItemInput from '../components/ItemInput';
import Button from '../components/Button';
import AdminItem from '../components/AdminItem';
import { useState, useEffect } from 'react';
import { ItemData, getJerseys } from '../lib/jerseys';

export default function Admin() {

  const [showInput, setShowInput] = useState(false);
  const [allItems, setAllItems] = useState<ItemData[]>([]);

  const fetchItems = async () => {
    const items = await getJerseys();
    setAllItems(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fields = [
    'firstName',
    'lastName',
    'number',
    'team',
    'brand',
    'size',
    'forSale',
    'price',
    'sold',
  ]

  return (
    <div>
      <Button className='input-button' text={showInput ? 'Hide Input' : 'Show Input'} onClick={() => setShowInput(!showInput)}/>
      {showInput && <ItemInput fields={fields}/>}
      {allItems.map((item, index) => (
        <AdminItem
          key={index}
          id={item.id}
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
          onDelete={fetchItems}
        />
      ))}
    </div>
  );
}