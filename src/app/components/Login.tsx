'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

interface LoginProps {
  onClose: () => void;
  onLogin: () => void;
};

export default function Login({ onClose, onLogin }: LoginProps) {

  const route = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logging in with ${username} / ${password}`);
    // Insert auth logic here
    onLogin();
    onClose();
    route.push('/admin');
  };

  return (
    <div className='login-overlay' onClick={() => onClose()}>
      <div className='login'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        />
        <Button type='primary' text='Login' onClick={() => {handleLogin()}}/>
        <Button type='close' text='back' onClick={() => {onClose()}}/>
      </div>
    </div>
  );
}