'use client';

import { useState } from 'react';
import Button from './Button';

interface NavbarProps {
  loggedIn: boolean;
  onLoginClick: () => void;
}

export default function Navbar( {loggedIn, onLoginClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className='navbar-title'>Jersey Collection</div>
      <Button type='primary' text={loggedIn ? 'Logout' : 'login'} onClick={() => onLoginClick()} />
    </nav>
  );
}
