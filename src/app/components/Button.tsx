'use client';

import React from 'react';

interface ButtonProps {
  className: string;
  text: React.ReactNode; // string or JSX
  onClick: (() => void) | React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ className, text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}