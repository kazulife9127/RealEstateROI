/**
 * node_modules
 */
import React, { memo } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { type SvgIconComponent } from "@mui/icons-material";
/**
 * project modules
 */

/**
 * private modules
 */
import { LinkStyled } from "./NavigationItem.style";

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
   * 表示させるか？
   */
  isShow?: boolean | undefined;
  /**
   * 無効か？
   */
  disabled?: boolean | undefined;
  /**
   * Tooltipタイトル ※このアプリケーションではDrawerがクローズ時はNavigationが表示されないため利用できないが、仕様変更もあり得るので残す。
   */
  tooltipTitle: NonNullable<React.ReactNode>;
}

/**
 * NavigationItem View Component
 * @package
 */
export const NavigationItemView: React.FC<Props> = memo(
  ({
    children,
    toUri,
    Icon,
    disabled = false,
    isShow = true,
    tooltipTitle,
  }) => {
    return (
      <li>
        {isShow && (
          <Tooltip title={tooltipTitle}>
            <LinkStyled to={toUri}>
              <ListItemButton disabled={disabled} selected={false}>
                <ListItemIcon>
                  <Icon htmlColor={"iconColor"} />
                </ListItemIcon>
                <ListItemText primary={children} />
              </ListItemButton>
            </LinkStyled>
          </Tooltip>
        )}
      </li>
    );
  }
);
