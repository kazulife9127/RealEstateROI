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
  isNavigationOpend: boolean;
  onToggleNavigationOpen: () => void;
}

/**
 * MainLayout View Component
 */
export const MainLayoutView: React.FC<Props> = ({
  isNavigationOpend,
  onToggleNavigationOpen,
}): JSX.Element => {
  return (
    <Root>
      <CssBaseline />
      <Header
        onToggleNavigationOpen={onToggleNavigationOpen}
        isNavigationOpend={isNavigationOpend}
      />
      <Drawer
        onToggleNavigationOpen={onToggleNavigationOpen}
        isNavigationOpend={isNavigationOpend}
      />
      <MainStyled open={isNavigationOpend}>
        <Outlet />
      </MainStyled>
    </Root>
  );
};
