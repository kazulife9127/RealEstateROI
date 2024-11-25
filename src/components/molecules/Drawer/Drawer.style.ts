import { styled } from "@mui/material/styles";

export const HeaderPadding = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  minHeight: 48,
  minWidth: 218.5,
  justifyContent: "flex-end",
}));
