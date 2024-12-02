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
import { type Props as ViewProps } from "./Header.view";

/**
 * Params
 */
export interface Params {
  onToggleNavigationOpen: () => void;
  isNavigationOpened: boolean;
}

/**
 * Header Hooks
 * @package
 */
export const useHeader = ({
  isNavigationOpened,
  onToggleNavigationOpen,
}: Params): ViewProps => {
  const handleToggleNavigationButtonClick = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      onToggleNavigationOpen();
    },
    [onToggleNavigationOpen]
  );


  return {
    isNavigationOpened,
    onNavigationButtonClick: handleToggleNavigationButtonClick,
  };
};
