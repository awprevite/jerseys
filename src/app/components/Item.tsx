'use client';

import { useState } from 'react';
import Button from './Button';

interface ItemProps {
  size: 'small' | 'large';
  name: string;
  number: number;
  team: string;
  selected: boolean;
  onSelect?: () => void;
  onClose?: () => void;
}

export default function Item({ size, name, number, team, selected, onSelect, onClose }: ItemProps) {
  
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
    </div>
  );
}