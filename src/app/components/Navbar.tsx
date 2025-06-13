'use client';

import Button from './Button';

interface NavbarProps {
  loggedIn: boolean;
  onLoginClick: () => void;
}

export default function Navbar( {loggedIn, onLoginClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className='navbar-title'>Hockey Jersey Collection</div>
      <Button className='login-button' text={loggedIn ? 'Logout' : 'login'} onClick={() => onLoginClick()} />
    </nav>
  );
}
