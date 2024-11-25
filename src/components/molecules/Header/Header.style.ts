import { styled } from "@mui/material/styles";
import { Toolbar, Typography, IconButton } from "@mui/material";
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const ToolbarStyled = styled(Toolbar)(() => ({
  paddingRight: 24,
  backgroundColor: "#2196F3",
}));
export const MenuButtonStyled = styled(IconButton)(() => ({
  marginRight: 36,
}));
export const TitleStyled = styled(Typography)(() => ({
  component: "h1",
  variants: "h6",
  color: "inherit",
  flexGrow: 1,
}));

const drawerWidth = 218.5;

export const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open === true && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
