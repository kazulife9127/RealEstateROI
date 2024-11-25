import { styled } from "@mui/material/styles";

export const Root = styled("div")(() => ({
  backgroundColor: "#eaeff1",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "auto 1fr",
  minHeight: "100vh",
}));

export const MainStyled = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  gridRow: "2 / 3",
  gridColumn: "2 / 3",
  padding: theme.spacing(2),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open === true && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `218.5px`,
  }),
}));
