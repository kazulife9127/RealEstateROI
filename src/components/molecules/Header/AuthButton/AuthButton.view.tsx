import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { AccountButtonStyled } from './AuthButton.style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dialog } from '@mui/material';
import '@aws-amplify/ui-react/styles.css';

export interface Props {
  onAccountButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  showAuth: boolean;
  onCloseAuth: () => void;
}

export const AuthButtonView: React.FC<Props> = ({
  onAccountButtonClick,
  showAuth,
  onCloseAuth,
}): JSX.Element => {
  return (
    <>
      <AccountButtonStyled onClick={onAccountButtonClick}>
        <AccountCircleIcon />
      </AccountButtonStyled>
      <Dialog open={showAuth} onClose={onCloseAuth} fullWidth maxWidth="sm">
        <Authenticator>
          {({ signOut, user }) => (
            <div style={{ padding: '20px' }}>
              <h1>こんにちは、{user?.username}さん</h1>
              <button
                onClick={() => {
                  signOut?.();
                  onCloseAuth();
                }}
              >
                サインアウト
              </button>
            </div>
          )}
        </Authenticator>
      </Dialog>
    </>
  );
};
