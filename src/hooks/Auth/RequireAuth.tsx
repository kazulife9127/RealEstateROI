// src/components/RequireAuth.tsx
import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  // アカウント認証されているかどうか(boolean)が入ってくる
  const { isAuthenticated, showAuthDialog } = useAuth();

  // アカウント認証されていない場合、認証ダイアログを表示する
  useEffect(() => {
    if (!isAuthenticated) {
      showAuthDialog();
    } 
  }, [isAuthenticated]);

  // アカウント認証されている場合のみ、Spreadsheetページを表示させる
  return isAuthenticated ? children : undefined;
};
