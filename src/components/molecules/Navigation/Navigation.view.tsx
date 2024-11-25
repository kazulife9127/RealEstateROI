/**
 * node_modules
 */
import React, { memo } from "react";
import { List } from "@mui/material";
/**
 * project modules
 */

/**
 * private modules
 */
import { NavigationItem, type Props as ItemProps } from "./NavigationItem";

/**
 * Props
 * @package
 */
export interface Props {
  /**
   * 子要素
   */
  children?: never;
  /**
   * ナビゲーションアイテムリスト
   */
  navigationItemList: ItemProps[];
}

/**
 * Navigation View Component
 * @package
 */
export const NavigationView: React.FC<Props> = memo(
  ({ navigationItemList }): JSX.Element => {
    return (
      <List>
        {navigationItemList.map<JSX.Element>(
          (navigationItem: ItemProps): JSX.Element => {
            return (
              <NavigationItem key={navigationItem.toUri} {...navigationItem} />
            );
          }
        )}
      </List>
    );
  }
);
