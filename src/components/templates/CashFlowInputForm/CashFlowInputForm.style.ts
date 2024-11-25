
import { styled } from '@mui/material/styles';
import {
  Paper,
  Grid2,
  Typography,
  TextField,
  InputAdornment,
  Button,
  MenuItem
} from "@mui/material";

export const TitleTypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem', // フォントサイズを大きくする
  marginBottom: theme.spacing(3), // 下に余白を追加
}));

export const TypographyStyled = styled(Typography)(({}) => ({
    
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
}));


export const TextFieldStyled = styled(TextField)(({  }) => ({
}));

export const InputAdornmentStyled = styled(InputAdornment)(({  }) => ({
    // カスタムスタイルを定義
  }));

export const Grid2Styled = styled(Grid2)(({  }) => ({
}));

export const NoteTypographyStyled = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  }));

export const ButtonStyled = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2), 
}));

export const MenuItemStyled = styled(MenuItem)(({  }) => ({
}));


