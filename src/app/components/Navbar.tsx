'use client';

import Button from './Button';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Jersey Collection</h1>
      <Button type='primary' text='Log In' onClick={() => alert('Logging in...')} />
    </nav>
  );
}
