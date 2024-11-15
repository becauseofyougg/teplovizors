import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { styled } from '@mui/material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
    position: 'absolute',
    bottom: '0 !important',
    left: '0 !important',
    alignItems: 'start',
    width: '100%',
    height: '60px',

  '& .MuiPaper-root': {
    borderRadius: '8px',
    padding: '16px',
    color: 'black',
    fontWeight: 'bold',
    boxShadow: theme.shadows[5],
    backgroundColor: '#fff',
  },
}));

interface CustomSnackbarProps {
  open: boolean;
  message: string;
  onClose: (event?: React.SyntheticEvent, reason?: string) => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({ open, message, onClose }) => {
  return (
    <StyledSnackbar open={open} autoHideDuration={3000} onClose={() => onClose()}>
      <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </StyledSnackbar>
  );
};

export default CustomSnackbar;