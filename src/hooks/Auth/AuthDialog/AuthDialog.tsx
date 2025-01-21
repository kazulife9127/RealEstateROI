// src/hooks/Auth/AuthDialog.tsx
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {
    StyledDialog,
    StyledDialogTitle,
    StyledCloseButton,
    StyledDialogContent,
    StyledAuthMessageBox,
    StyledSignOutButton,
    StyledTypography,
  } from './AuthDialog.style';


interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <StyledDialogTitle>
        <StyledTypography variant="h6" component="div">Account</StyledTypography>
        <StyledCloseButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </StyledCloseButton>
      </StyledDialogTitle>
      <StyledDialogContent dividers>
        <Authenticator>
          {({ signOut, user }) => (
            <StyledAuthMessageBox>
              <StyledTypography variant="h6" gutterBottom>
                {user ? `ID: ${user.username}` : 'ログインに成功しました'}
              </StyledTypography>
              {user && (
                <StyledSignOutButton variant="contained" color="primary" onClick={signOut}>
                  signOut
                </StyledSignOutButton>
              )}
            </StyledAuthMessageBox>
          )}
        </Authenticator>
      </StyledDialogContent>
    </StyledDialog>
  );
};
