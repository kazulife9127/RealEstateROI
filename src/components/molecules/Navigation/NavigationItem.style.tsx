import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  display: "block",
  color: theme.palette.text.secondary,
}));
