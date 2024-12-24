import React from 'react';
import {AuthButtonView } from './AuthButton.view';
import { useAuthButton } from './AuthButton.hook';
interface Props {
}

export const AuthButton: React.FC<Props> = (): JSX.Element => {
  const viewProps = useAuthButton();
  return <AuthButtonView {...viewProps} />;
};