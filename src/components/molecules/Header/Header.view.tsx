/**
 * node_modules
 */
import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { AuthButton } from "./AuthButton";

/**
 * project modules
 */

/**
 * private modules
 */4
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
  isNavigationOpened: boolean;
}

/**
 * Header View Component
 */
export const HeaderView: React.FC<Props> = ({
  isNavigationOpened,
  onNavigationButtonClick,
}): JSX.Element => {

  return (
    <AppBarStyled position="sticky" open={isNavigationOpened}>
      <ToolbarStyled variant="dense">
        <MenuButtonStyled
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onNavigationButtonClick}
          sx={{ mr: 2, ...(isNavigationOpened && { display: "none" }) }}
        >
          <MenuIcon />
        </MenuButtonStyled>
        <TitleStyled textAlign="left" variant="h6">
        不動産投資収益率シミュレーション
        </TitleStyled>
        <AuthButton/>
      </ToolbarStyled>
    </AppBarStyled>
  );
};
