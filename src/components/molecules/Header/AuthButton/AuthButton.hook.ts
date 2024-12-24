// src/components/AuthButton.hook.ts
import { useAuth } from '@/hooks/Auth/AuthContext';

export const useAuthButton = () => {
  const { showAuthDialog } = useAuth();

  const onAccountButtonClick = () => {
    showAuthDialog();
  };

  return {
    onAccountButtonClick,
  };
};
