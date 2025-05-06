'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

interface ItemProps {
  size: '48' | '50' | '52';
  name: string;
  number: number;
  team: string;
  brand: string;
  image: string;
  selected: boolean;
  onSelect?: () => void;
  onClose?: () => void;
}

export default function Item({ size, name, number, team, brand, image, selected, onSelect, onClose }: ItemProps) {

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
      <h2>{name}</h2>
      <p>Number: {number}</p>
      <p>Team: {team}</p>
      <p>Size: {size}</p>
      <p>Brand: {brand}</p>
      <img src={image} alt="Item Image" />
    </div>
  );
}