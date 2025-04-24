'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import Login from './components/Login';

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  
  const route = useRouter();
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    if (loggedIn) {
      setLoggedIn(false);
      route.push('/');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <>
      <Navbar loggedIn={loggedIn} onLoginClick={handleLoginClick} />
      {showLogin && <Login onClose={() => setShowLogin(false)} onLogin={() => setLoggedIn(true)} />}
      {children}
    </>
  );
}
