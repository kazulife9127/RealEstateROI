// src/components/RequireAuth.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { isAuthenticated, showAuthDialog } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
    } else {
      showAuthDialog();
      setLoading(false);
    }
  }, [isAuthenticated, showAuthDialog]);

  if (loading) {
    return <div>Loading...</div>; // ローディングスピナーなどを表示
  }

  return isAuthenticated ? children : undefined;
};
