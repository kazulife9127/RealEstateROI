import { styled } from '@mui/material/styles';
import {
  Grid2,
  Box,
} from "@mui/material";

export const GridStyled = styled(Grid2)(({}) => ({
    
}));

export const LeftGridStyled = styled(Grid2)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),

}));

export const RightGridStyled = styled(Grid2)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    
}));


export const UnderGridStyled = styled(Grid2)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    
}));

export const BoxStyled = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));