/**
 * node_modules
 */
import type React from "react";
import { useCallback } from "react";

/**
 * project modules
 */

/**
 * private modules
 */
import { type Props as ViewProps } from "./Drawer.view";

/**
 * Paramas
 * @package
 */
export interface Params {
  onToggleNavigationOpen: () => void;
  isNavigationOpened: boolean;
}

/**
 * Drawer Hooks
 * @package
 */
export const useDrawer = ({
  isNavigationOpened,
  onToggleNavigationOpen,
}: Params): ViewProps => {
  const handleNavigationButtonClick = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      onToggleNavigationOpen();
    },
    [onToggleNavigationOpen]
  );

  return {
    isNavigationOpened,
    onNavigationButtonClick: handleNavigationButtonClick,
  };
};
