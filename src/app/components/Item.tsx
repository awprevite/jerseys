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
      <div className='image-wrapper'>
        <img src={image} alt="Item Image" />
        {selected && (
          <Button
            className='image-close-button'
            text='X'
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
          />
        )}
        <Button
          className='toggle-button'
          text='Flip'
          onClick={(e) => {
            e.stopPropagation();
            setImage(image === frontImageUrl ? backImageUrl : frontImageUrl);
          }}
        />
      </div>
      {selected ? (
        <div className='item-deatails'>
          {firstName != 'Blank' && <h2>{`${firstName} ${lastName}`}</h2>}
          {number > -1 && <p>Number: {number}</p>}
          <p>Team: {team}</p>
          <p>Brand: {brand}</p>
          <p>Size: {size}</p>
          <p>For Sale: {forSale ? 'Yes' : 'No'}</p>
          <p>Price: {forSale ? `$${price}` : 'N/A'}</p>
          <p>Sold: {sold ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <div className='item-deatails'>
          {firstName != 'Blank' && <h2>{`${firstName} ${lastName}`}</h2>}
          {number > -1 && <p>Number: {number}</p>}
          <p>Team: {team}</p>
          <p>Brand: {brand}</p>
          <p>Size: {size}</p>
        </div>
      )}
    </div>
  );
}