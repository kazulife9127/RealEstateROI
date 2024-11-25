/**
 * node_modules
 */
import React from "react";
import { Drawer, Divider, IconButton } from "@mui/material";
// icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

/**
 * project modules
 */
import { Navigation } from "../Navigation";
/**
 * private modules
 */
import { HeaderPadding } from "./Drawer.style";

/**
 * Props
 */
export interface Props {
  onNavigationButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;

  isNavigationOpened: boolean;
}

export const DrawerView: React.FC<Props> = ({
  onNavigationButtonClick,
  isNavigationOpened,
}): JSX.Element => {
  return (
    <Drawer variant="persistent" anchor="left" open={isNavigationOpened}>
      <HeaderPadding>
        <IconButton onClick={onNavigationButtonClick}>
          <ChevronLeftIcon />
        </IconButton>
      </HeaderPadding>
      <Divider />
      <Navigation isNavigationOpened={isNavigationOpened} />
    </Drawer>
  );
};
