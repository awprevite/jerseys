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
    <div className='admin-item'>
      <div className='admin-item-header'>
        <h2>{`${firstName} ${lastName} ${number} ${team}`}</h2>
        <Button
          className='info-button'
          text={showDetails ? 'Hide Info' : 'More Info'}
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails(!showDetails);
          }}
        />
        <Button className='delete-button' text='Delete' onClick={(e) => {deleteItem(id)}} />
      </div>
      {showDetails && image && (
        <div className='expanded-admin-item'>
          <div className='image-wrapper'>
            <img src={image} alt="Item Image" />
            <Button
              className='toggle-button'
              text='Flip'
              onClick={(e) => {
                e.stopPropagation();
                setImage(image === frontImageUrl ? backImageUrl : frontImageUrl);
              }}
            />
          </div>
          
          <p>Size: {size}</p>
          <p>Brand: {brand}</p>
          <p>For Sale: {forSale ? 'Yes' : 'No'}</p>
          <p>Sold: {sold ? 'Yes' : 'No'}</p>
          <p>Price: ${price}</p>
        </div>
      )}
    </div>
  );
}
