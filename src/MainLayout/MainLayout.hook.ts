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
  const [isNavigationOpend, setIsNavigationOpend] = useState<boolean>(false);
  const location = useLocation();
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsNavigationOpend(false);
  }, [location]);

  const handleToggleNavigationOpen = useCallback((): void => {
    setIsNavigationOpend((prev: boolean): boolean => {
      return !prev;
    });
  }, []);

  return {
    isNavigationOpend,
    onToggleNavigationOpen: handleToggleNavigationOpen,
  };
};
