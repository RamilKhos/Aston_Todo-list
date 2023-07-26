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

export const btnThemeColor = {
  position: 'absolute',
  top: '4%',
  right: '3%',
};

export const list = {
  width: '100%',
  color: '#FCFAF1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const accordion = {
  width: '100%',
  padding: '0 2rem 0 3.5rem',
  wordBreak: 'break-all',
  background: 'rgba(197, 169, 163, 0.863)',
  boxShadow: `rgb(155, 134, 129) -5px 5px, 
                rgba(155, 134, 129, 0.718) -10px 10px, 
                rgba(155, 134, 129, 0.508) -15px 15px, 
                rgba(155, 134, 129, 0.304) -20px 20px, 
                #9b868100 -25px 25px`,
};

export const accordionSummary = { wordBreak: 'break-all', padding: '0 3rem 0 2rem' };

export const btnToArchive = {
  minWidth: 0,
  position: 'absolute',
  left: '-3rem',
  top: '15%',
};

export const btnChangeStatus = {
  marginRight: '1rem',
  minWidth: 0,
  position: 'absolute',
  left: '-1rem',
  top: '15%',
};

export const btnChangeTodo = {
  minWidth: 0,
  position: 'absolute',
  right: '.3rem',
  top: '15%',
};

export const btnDelete = {
  minWidth: 0,
  position: 'absolute',
  right: '-1.7rem',
  top: '15%',
};

export const boxModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
};

export const btnClosedModal = {
  minWidth: 0,
  position: 'absolute',
  right: 0,
  top: 0,
};
