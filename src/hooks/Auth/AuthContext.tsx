// src/hooks/Auth/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { AuthDialog } from './AuthDialog/AuthDialog';

interface AuthContextType {
  isAuthenticated: boolean;
  showAuthDialog: () => void;
  hideAuthDialog: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // 認証ダイアログの表示状態を管理
  const [showAuth, setShowAuth] = useState(false);
  // ユーザーの認証状態(ログインしているかどうか)を管理
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 認証ダイアログを表示する
  const showAuthDialog = () => setShowAuth(true);
  // 認証ダイアログを非表示にする
  const hideAuthDialog = () => setShowAuth(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // 現在のユーザーを取得し、認証が成功すれば、認証状態をTrueにする
        await getCurrentUser();
        setIsAuthenticated(true);
      } catch {
        // 認証が失敗していれば、認証状態をFalseにする
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, showAuthDialog, hideAuthDialog }}>
      {children}
      {/* 認証ダイアログを表示する */}
      <AuthDialog open={showAuth} onClose={hideAuthDialog} />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
