import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './Login.tsx';
import CreateAcc from './Acc.tsx';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCreateAcc, setShowCreateAcc] = useState(false);
  return (
    <StrictMode>
      {isLoggedIn ? (
        <App onLogout={() => setIsLoggedIn(false)} />
      ) : showCreateAcc ? (
        <CreateAcc onCreateAcc={() => setShowCreateAcc(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} onShowCreateAcc={() => setShowCreateAcc(true)} />
      )}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
