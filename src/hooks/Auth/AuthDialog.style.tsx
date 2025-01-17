// src/hooks/Auth/style.ts
import { styled } from '@mui/material/styles';
import { DialogTitle, Dialog }from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// ダイアログのスタイルをカスタマイズ
export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '600px', // 希望の幅に設定
    maxWidth: 'none', // デフォルトのmaxWidthを無効化
    padding: theme.spacing(2),
  },
}));

// ダイアログタイトルのスタイル
export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

// クローズボタンのスタイル
export const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[500],
  // 以下のスタイルを追加して、ボタンが前面に表示されるようにする
  zIndex: 1,
}));

// ダイアログコンテンツのスタイル
export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

// 認証メッセージのボックススタイル
export const StyledAuthMessageBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(2),
}));

// サインアウトボタンのスタイル
export const StyledSignOutButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const StyledTypography = styled(Typography)(({  }) => ({
}));
