// src/hooks/Auth/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // 必要に応じてスタイルをインポート
import { getCurrentUser } from 'aws-amplify/auth';

// スタイルのインポート
import {
  StyledDialog,
  StyledDialogTitle,
  StyledCloseButton,
  StyledDialogContent,
  StyledAuthMessageBox,
  StyledSignOutButton,
  StyledTypography,
} from './AuthDialog.style';

import CloseIcon from '@mui/icons-material/Close';

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
  const [showAuth, setShowAuth] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const showAuthDialog = () => {
    setShowAuth(true);
  };

  const hideAuthDialog = () => {
    setShowAuth(false);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getCurrentUser();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return (
      <AuthContext.Provider value={{ isAuthenticated, showAuthDialog, hideAuthDialog }}>
        {children}
        <StyledDialog open={showAuth} onClose={hideAuthDialog}>
          <StyledDialogTitle>
            <StyledTypography variant="h6">ログイン認証</StyledTypography>
            <StyledCloseButton aria-label="close" onClick={hideAuthDialog}>
              <CloseIcon />
            </StyledCloseButton>
          </StyledDialogTitle>
          <StyledDialogContent dividers>
            <Authenticator
            >
              {({ signOut, user }) => (
                <StyledAuthMessageBox>
                  <StyledTypography variant="h6" gutterBottom>
                    {user ? `ID: ${user.username}` : 'ログインに成功しました'}
                  </StyledTypography>
                  {user && (
                    <StyledSignOutButton
                      variant="contained"
                      color="primary"
                      onClick={signOut}
                    >
                      サインアウト
                    </StyledSignOutButton>
                  )}
                </StyledAuthMessageBox>
              )}
            </Authenticator>
          </StyledDialogContent>
        </StyledDialog>
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
