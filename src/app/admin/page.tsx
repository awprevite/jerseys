'use client';

import ItemInput from '../components/ItemInput';

export default function Admin() {
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
    <ItemInput fields={fields}/>
  );
}