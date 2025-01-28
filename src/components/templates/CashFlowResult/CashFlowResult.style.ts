
import { styled } from '@mui/material/styles';
import {
  Paper,
  Grid2,
  Typography,
  TextField,
  InputAdornment,
  Button,
  FormHelperText
} from "@mui/material";

export const TitleTypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  marginBottom: theme.spacing(3), 
}));

export const ResultTypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  marginBottom: theme.spacing(1),
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));


export const TextFieldStyled = styled(TextField)(({  }) => ({
}));

export const InputAdornmentStyled = styled(InputAdornment)(({  }) => ({
  // カスタムスタイルを定義
}));

export const Grid2Styled = styled(Grid2)(({ theme }) => ({
  marginBottom: theme.spacing(1), // 各Grid間の余白を増やす
}));

export const NoteTypographyStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const FormHelperTextStyled = styled(FormHelperText)(({  }) => ({
}));
