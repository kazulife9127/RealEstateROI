/**
 * node_modules
 */
import React from "react";

/**
 * project modules
 */

/**
 * private modules
 */
import { useDrawer } from "./Drawer.hook";
import { DrawerView } from "./Drawer.view";

/**
 * Props
 */
export interface Props {
  onToggleNavigationOpen: () => void;

  isNavigationOpened: boolean;
}

/**
 * Drawer Component
 */
export const Drawer: React.FC<Props> = ({
  onToggleNavigationOpen,
  isNavigationOpened,
}): JSX.Element => {
  const viewProps = useDrawer({
    onToggleNavigationOpen,
    isNavigationOpened,
  });
  return <DrawerView {...viewProps} />;
};
