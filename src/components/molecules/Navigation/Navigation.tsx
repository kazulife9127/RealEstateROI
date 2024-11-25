/**
 * node_modules
 */
import React, { memo } from "react";
/**
 * project modules
 */

/**
 * private modules
 */
import { useNavigation } from "./Navigation.hook";
import { NavigationView } from "./Navigation.view";

/**
 * Props
 */
export interface Props {
  /**
   * 子要素
   */
  children?: never;
  /**
   * Navigation開閉
   */
  isNavigationOpened: boolean;
}

/**
 * Navigation Component
 */
export const Navigation: React.FC<Props> = memo(
  ({ isNavigationOpened }: Props): JSX.Element => {
    const viewProps = useNavigation({ isNavigationOpened });
    return <NavigationView {...viewProps} />;
  }
);
