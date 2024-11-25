/**
 * node_modules
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * project modules
 */

/**
 * private modules
 */
import { type Props as ViewProps } from "./MainLayout.view";

/**
 * MainLayout Hooks
 * @package
 */
export const useMainLayout = (): ViewProps => {
  const [isNavigationOpened, setIsNavigationOpened] = useState<boolean>(false);
  const location = useLocation();
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsNavigationOpened(false);
  }, [location]);

  const handleToggleNavigationOpen = useCallback((): void => {
    setIsNavigationOpened((prev: boolean): boolean => {
      return !prev;
    });
  }, []);

  return {
    isNavigationOpened,
    onToggleNavigationOpen: handleToggleNavigationOpen,
  };
};
