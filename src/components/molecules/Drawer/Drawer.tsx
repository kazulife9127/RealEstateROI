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

  isNavigationOpend: boolean;
}

/**
 * Drawer Component
 */
export const Drawer: React.FC<Props> = ({
  onToggleNavigationOpen,
  isNavigationOpend,
}): JSX.Element => {
  const viewProps = useDrawer({
    onToggleNavigationOpen,
    isNavigationOpend,
  });
  return <DrawerView {...viewProps} />;
};
