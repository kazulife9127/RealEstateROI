import { styled } from '@mui/material/styles';
import {
  Paper,
  Typography,
  Slider,
  MenuItem,
  Stack,
  TextField
} from "@mui/material";

export const PaperStyled = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export const TitleTypographyStyled = styled(Typography)(({ theme }) => ({
    fontSize: '1.8rem', // フォントサイズを大きくする
    marginBottom: theme.spacing(3), // 下に余白を追加
}));

export const NoteTypographyStyled = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

export const SliderStyled = styled(Slider)(({  }) => ({
}));

export const MenuItemStyled = styled(MenuItem)(({  }) => ({
}));

export const StackStyled = styled(Stack)(({  }) => ({
}));

export const TextFieldStyled = styled(TextField)(({  }) => ({
}));