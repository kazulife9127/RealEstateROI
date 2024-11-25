/**
 * node_modules
 */
import React, { memo } from "react";
import { type SvgIconComponent } from "@mui/icons-material";
/**
 * project modules
 */

/**
 * private modules
 */
import { useNavigationItem } from "./NavigationItem.hook";
import { NavigationItemView } from "./NavigationItem.view";

/**
 * Props
 * @package
 */
export interface Props {
  /**
   * 子要素
   */
  children?: React.ReactNode;
  /**
   * 遷移先
   */
  toUri: string;
  /**
   * アイコン
   */
  Icon: SvgIconComponent;
  /**
   * 選択中か
   */
  selected: boolean;
  /**
   * 表示させるか？
   */
  isShow?: boolean | undefined;
  /**
   * 無効化？
   */
  disabled?: boolean | undefined;
  /**
   * Tooltipタイトル
   */
  tooltipTitle: NonNullable<React.ReactNode>;
}

/**
 * NavigationItem Component
 * @package
 */
export const NavigationItem: React.FC<Props> = memo(
  ({
    children,
    toUri,
    Icon,
    selected,
    isShow,
    disabled,
    tooltipTitle,
  }): JSX.Element => {
    const viewProps = useNavigationItem({
      children,
      toUri,
      Icon,
      selected,
      isShow,
      disabled,
      tooltipTitle,
    });
    return <NavigationItemView {...viewProps} />;
  }
);
