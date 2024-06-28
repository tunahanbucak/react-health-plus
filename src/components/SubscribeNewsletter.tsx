import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Button, Typography, Box } from '@mui/material';

function SubscribeNewsletter() {
  const [inputEmail, setInputEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      emailRegex.test(inputEmail)
        ? toast.success('Subscribed to Newsletter!', {
            position: 'top-center',
            onOpen: () => {
              setIsButtonDisabled(true);
              setInputEmail('');
            },
            onClose: () => setIsButtonDisabled(false),
          })
        : toast.error('Invalid Email Address!', {
            position: 'top-center',
            onOpen: () => setIsButtonDisabled(true),
            onClose: () => setIsButtonDisabled(false),
          });
    }
  };

  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography
        variant="h6"
        sx={{
          color: 'white',
          fontSize: '22px',
          fontWeight: 'bold',
        }}>
        Stay Updated with our Newsletter
      </Typography>
      <TextField
        type="email"
        label="Enter your email address"
        variant="outlined"
        fullWidth
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="email"
        sx={{
          width: '300px',
          margin: '20px 8px 0 0',
          padding: '16px 22px',
          color: 'white ',
          background: '#293241',
          border: '1px solid transparent',
          borderRadius: '50px',
          outline: 'transparent',
          fontSize: '18px',
        }}
      />
      <Button
        sx={{
          padding: { xs: '10px 16px', md: '14px 20px' },
          color: 'white',
          border: '1px solid transparent',
          borderRadius: '28px',
          outline: 'transparent',
          background: '#1A8EFD',
          fontSize: { xs: '14px', md: '18px' },
          letterSpacing: '.8px',
          cursor: 'pointer',
          transition: 'all .4s ease',
          textTransform: 'none',
          display: { xs: 'none', md: 'flex' },
        }}
        variant="contained"
        color="primary"
        disabled={isButtonDisabled}
        onClick={handleBookAppointmentClick}>
        Subscribe
      </Button>
      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </Box>
  );
}

export default SubscribeNewsletter;
