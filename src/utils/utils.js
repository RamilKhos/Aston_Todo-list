import { TextField, Button } from '@mui/material';
import styled from '@emotion/styled';

export const CssTextField = styled(TextField)({
  '& label': {
    color: '#8A3F1B',
  },
  '& label.Mui-focused': {
    color: '#8A3F1B',
  },
  '& .MuiInputBase-input': {
    color: '#8A3F1B',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#8A3F1B',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8A3F1B',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8A3F1B',
    },
    '&:hover fieldset': {
      borderColor: '#8A3F1B',
    },
  },
});

export const CssButton = styled(Button)({
  '&.MuiButtonBase-root': {
    backgroundColor: '#F23A29',
  },
  '&.MuiButtonBase-root:hover': {
    backgroundColor: 'red',
  },
});
