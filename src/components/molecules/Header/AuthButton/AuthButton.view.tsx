// src/components/AuthButton.view.tsx
import React from 'react';
import { AccountButtonStyled } from './AuthButton.style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export interface AuthButtonViewProps {
  onAccountButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const AuthButtonView: React.FC<AuthButtonViewProps> = ({
  onAccountButtonClick,
}): JSX.Element => {
  return (
    <AccountButtonStyled onClick={onAccountButtonClick}>
      <AccountCircleIcon />
    </AccountButtonStyled>
  );
};
