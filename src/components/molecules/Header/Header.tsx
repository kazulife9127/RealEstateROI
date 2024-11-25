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
import { useHeader } from "./Header.hook";
import { HeaderView } from "./Header.view";

/**
 * Props
 */
export interface Props {
  children?: never;
  onToggleNavigationOpen: () => void;
  isNavigationOpend: boolean;
}

/**
 * Header Component
 */
export const Header: React.FC<Props> = ({
  onToggleNavigationOpen,
  isNavigationOpend,
}): JSX.Element => {
  const viewProps = useHeader({
    onToggleNavigationOpen,
    isNavigationOpend,
  });
  return <HeaderView {...viewProps} />;
};
