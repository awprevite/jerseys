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

  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    setImage(frontImageUrl);
  }, [frontImageUrl])

  return (
    <div className='item'
      onClick={() => {
        onSelect?.();
      }}
    >
      {selected && (
        <Button
          type='close'
          text='X'
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        />
      )}
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
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>Number: {number}</p>
      <p>Team: {team}</p>
      <p>Size: {size}</p>
      <p>Brand: {brand}</p>
    </div>
  
  );
}