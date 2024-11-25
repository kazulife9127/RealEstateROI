/**
 * node_modules
 */
import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";

/**
 * project modules
 */

/**
 * private modules
 */
import {
  AppBarStyled,
  ToolbarStyled,
  MenuButtonStyled,
  TitleStyled,
} from "./Header.style";

/**
 * Props
 */
export interface Props {
  onNavigationButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;

  isNavigationOpend: boolean;
}

/**
 * Header View Component
 */
export const HeaderView: React.FC<Props> = ({
  isNavigationOpend,
  onNavigationButtonClick,
}): JSX.Element => {
  return (
    <AppBarStyled position="sticky" open={isNavigationOpend}>
      <ToolbarStyled variant="dense">
        <MenuButtonStyled
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onNavigationButtonClick}
          sx={{ mr: 2, ...(isNavigationOpend && { display: "none" }) }}
        >
          <MenuIcon />
        </MenuButtonStyled>
        <TitleStyled textAlign="left" variant="h6">
          不動産投資シュミレーター
        </TitleStyled>
      </ToolbarStyled>
    </AppBarStyled>
  );
};
