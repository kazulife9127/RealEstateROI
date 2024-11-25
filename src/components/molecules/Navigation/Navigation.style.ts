import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";

/**
 * Styles
 * @package
 */
export const DrawerStyled = styled(Drawer)(({ theme }) => ({
  position: "relative",
  zIndex: theme.zIndex.drawer,
  gridRow: "1 / 3",
  gridColumn: "1 / 2",
}));

export const HeaderPadding = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  minHeight: 48,
  justifyContent: "flex-end",
}));
