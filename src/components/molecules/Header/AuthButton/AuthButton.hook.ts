import { useState } from 'react';
import { Props as ViewProps } from './AuthButton.view';

export const useAuthButton = (): ViewProps => {
  const [showAuth, setShowAuth] = useState(false);

  const onAccountButtonClick = () => {
    setShowAuth(true);
  };

  const onCloseAuth = () => {
    setShowAuth(false);
  };

  return {
    onAccountButtonClick,
    showAuth,
    onCloseAuth,
  };
};
