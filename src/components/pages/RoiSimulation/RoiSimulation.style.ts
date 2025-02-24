import { styled } from '@mui/material/styles';
import { Grid2, Box, Typography } from "@mui/material";

export const GridStyled = styled(Grid2)(({}) => ({}));

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

export const SubTitleStyled = styled(Typography)({
    fontSize: "25px",
    fontWeight: "350",
    height: "50px",
    marginLeft: "15px",
    marginTop: "5px",
});

// 新たに追加する：箇条書き用のスタイル
export const FeatureListStyled = styled('ul')(({ theme }) => ({
  listStyleType: 'disc',
  paddingLeft: theme.spacing(3),
  margin: theme.spacing(0),
}));

export const FeatureListItemStyled = styled('li')(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: '16px',
}));
