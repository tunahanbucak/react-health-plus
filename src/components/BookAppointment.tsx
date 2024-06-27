import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Doctor from '../assets/doctor-book-appointment.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const steps = [
  {
    title: 'En iyi profesyonel Doktorlar',
  },
  {
    title: 'Acil Bakım',
  },
  {
    title: '7/24 Canlı Sohbeti Destekleyin',
  },
  {
    title: 'Kayıt Kolay ve Hızlı',
  },
];

export default function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate('/appointment');
  };
  return (
    <Box
      sx={{
        padding: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        background: 'white',
      }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={Doctor} alt="Doctor Group" style={{ maxWidth: '100%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '40px',
              fontWeight: 'bold',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '75%',
                height: '4px',
                backgroundColor: '#9D2553',
                borderRadius: '8px',
                left: '0',
                bottom: '-12px',
              },
            }}>
            Neden Sağlık Seçmelisiniz
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: '32px 0',
              color: '#4d4b4b',
              fontFamily: 'Rubik, sans-serif',
              fontSize: '18px',
              letterSpacing: '.7px',
              lineHeight: '1.7rem',
            }}>
            Sağlık ihtiyaçlarınız için Health Plus'ı seçmenin nedenlerini
            keşfedin. Uzman bakımı, rahatlığı ve kişiselleştirilmiş çözümleri
            deneyimleyin, refahınızı en büyük önceliğimiz haline getirmek. Bir
            yolculuğa bize katılın daha iyi sağlık ve daha mutlu bir yaşam.
          </Typography>

          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                margin: '16px 0',
                display: 'flex',
                alignItems: 'center',
              }}>
              <CheckCircleOutlineIcon
                sx={{ color: '#1E8FFD', marginRight: '12px' }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    letterSpacing: '.7px',
                  }}>
                  {step.title}
                </Typography>
              </Box>
            </Box>
          ))}

          <Button
            onClick={handleBookAppointmentClick}
            sx={{
              padding: '18px 24px',
              color: 'white',
              border: ' 1px solid transparent',
              borderRadius: '50px',
              outline: 'transparent',
              background: '#1A8EFD',
              fontSize: '20px',
              letterSpacing: '.8px',
              cursor: 'pointer',
              transition: 'all .4s aese',
              ':hover': {
                color: '#1A8EFD',
                background: 'transparent',
                border: '1px solid #1A8EFD',
              },
            }}>
            <Typography
              sx={{
                display: 'flex',
                gap: 2,
              }}>
              <CalendarMonthIcon />
              Randevu Al
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
