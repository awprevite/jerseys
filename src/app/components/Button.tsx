'use client';

import React from 'react';

interface ButtonProps {
  type: 'primary' | 'close';
  text: React.ReactNode; // string or JSX
  onClick: (() => void) | React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ type, text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`button ${type}`}>
      {text}
    </button>
  );
}