/**
 * node_modules
 */
import React from "react";

/**
 * project modules
 */
import { Header } from "../components/molecules/Header";
/**
 * private modules
 */
import { Root, MainStyled } from "./MainLayout.style";
import { Drawer } from "../components/molecules/Drawer";
import { CssBaseline } from "@mui/material/";
import { Outlet } from "react-router-dom";

/**
 * Props
 */
export interface Props {
  isNavigationOpened: boolean;
  onToggleNavigationOpen: () => void;
}

/**
 * MainLayout View Component
 */
export const MainLayoutView: React.FC<Props> = ({
  isNavigationOpened,
  onToggleNavigationOpen,
}): JSX.Element => {
  return (
    <Root>
      <CssBaseline />
      <Header
        onToggleNavigationOpen={onToggleNavigationOpen}
        isNavigationOpened={isNavigationOpened}
      />
      <Drawer
        onToggleNavigationOpen={onToggleNavigationOpen}
        isNavigationOpened={isNavigationOpened}
      />
      <MainStyled open={isNavigationOpened}>
        <Outlet />
      </MainStyled>
    </Root>
  );
};
