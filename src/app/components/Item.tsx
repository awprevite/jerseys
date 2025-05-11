'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

interface ItemProps {
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
  onSelect?: () => void;
  onClose?: () => void;
}

export default function Item({ firstName, lastName, number, team, brand, size, frontImageUrl, backImageUrl, forSale, price, sold, selected, onSelect, onClose }: ItemProps) {

  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    setImage(frontImageUrl);
  }, [frontImageUrl])

  return (
    <div className='item' onClick={() => { onSelect?.() }}>
      {selected && (
        <Button
          className='close'
          text='X'
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        />
      )}
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
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>Number: {number}</p>
      <p>Team: {team}</p>
      <p>Size: {size}</p>
      <p>Brand: {brand}</p>
    </div>
  
  );
}