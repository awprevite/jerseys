'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

interface AdminItemProps {
  id: string;
  firstName: string;
  lastName: string;
  number: number;
  team: string;
  brand: string;
  size: string;
  frontImageUrl: string;
  backImageUrl: string;
  forSale: boolean;
  price: number;
  sold: boolean;
  selected: boolean;
  onDelete: () => void;
}

export default function AdminItem({id, firstName, lastName, number, team, brand, size, frontImageUrl, backImageUrl, forSale, price, sold, onDelete}: AdminItemProps) {
  const [image, setImage] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setImage(frontImageUrl);
  }, [frontImageUrl]);

  const deleteItem = async (id: string) => {
    await fetch(`/api/deleteItem?id=${id}`, {
      method: 'DELETE',
    });
    onDelete();
  }

  return (
    <div className='item'>
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>Number: {number}</p>
      <p>Team: {team}</p>

      {showDetails && (
        <>
          {image ? (
            <img src={image} alt="Item Image" />
          ) : (
            <p>No images to display</p>
          )}
          <Button
            type='primary'
            text={image === frontImageUrl ? '>' : '<'}
            onClick={(e) => {
              e.stopPropagation();
              setImage(image === frontImageUrl ? backImageUrl : frontImageUrl);
            }}
          />
          <p>Size: {size}</p>
          <p>Brand: {brand}</p>
          <p>For Sale: {forSale ? 'Yes' : 'No'}</p>
          <p>Sold: {sold ? 'Yes' : 'No'}</p>
          <p>Price: ${price}</p>
        </>
      )}

      <Button
        type='primary'
        text={showDetails ? 'Hide Info' : 'More Info'}
        onClick={(e) => {
          e.stopPropagation();
          setShowDetails(!showDetails);
        }}
      />
      <Button type='primary' text='Delete' onClick={(e) => {deleteItem(id)}} />
    </div>
  );
}
