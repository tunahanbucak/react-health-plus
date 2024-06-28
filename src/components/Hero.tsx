import { useEffect, useState } from 'react';
import Doctor from '../assets/doctor-picture.png';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TodayIcon from '@mui/icons-material/Today';

export default function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookAppointmentClick = () => {
    navigate('/appointment');
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener('scroll', onPageScroll);

    return () => {
      window.removeEventListener('scroll', onPageScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        py: 10,
        px: 3,
        background: 'linear-gradient(to right, #ECF2FF, #FBFCFF)',
      }}>
      <Box
        sx={{
          padding: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          flexDirection: { xs: 'column', md: 'row' },
        }}>
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
            padding: { xs: '0', md: '0 32px' },
          }}>
          <Typography
            variant="h6"
            sx={{
              marginBottom: '12px',
              color: 'rgb(77, 75, 75)',
              fontFamily: 'Rubik, sans-serif',
              fontSize: '22px',
              fontWeight: 'bold',
              letterSpacing: '.7px',
            }}>
            ❤️ Önce sağlık gelir
          </Typography>
          <Typography
            variant="h2"
            sx={{
              width: { xs: '100%', md: '500px' },
              color: 'black',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '40px',
              fontWeight: 'bold',
            }}>
            Doktorunuzu bulun ve randevu alın
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: { xs: '100%', md: '475px' },
              margin: '32px 0',
              color: 'rgb(77, 75, 75)',
              fontFamily: 'Rubik, sans-serif',
              fontSize: '18px',
              letterSpacing: '.7px',
              lineHeight: '1.6rem',
            }}>
            Çevrimiçi doktorlarla konuşun, tıbbi tavsiyeler alın, çevrimiçi
            reçeteleri dakikalar içinde edinin ve tıbbi notları saklayın. Sağlık
            hizmetleri parmaklarınızın ucunda.
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: '14px 20px',
              color: 'white',
              borderRadius: '28px',
              backgroundColor: '#1A8EFD',
              fontSize: '18px',
              fontFamily: 'Rubik, sans-serif',
              letterSpacing: '.8px',
              gap: 1,
              display: 'flex',
              textTransform: 'none',
              transition: 'all .4s ease',
              '&:hover': {
                color: '#1A8EFD',
                backgroundColor: 'transparent',
                border: '1px solid #1A8EFD',
              },
            }}
            onClick={handleBookAppointmentClick}>
            <TodayIcon />
            Randevu Al
          </Button>
          <Box
            sx={{
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: { xs: '18px', md: '48px' },
            }}>
            {[
              { value: '145k+', label: 'Hasta Kabul ' },
              { value: '50+', label: 'Uzman Doktorlar' },
              { value: '10+', label: 'Yılların Deneyimi' },
            ].map((stat, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                }}>
                <Typography
                  sx={{
                    pb: '8px',
                    color: '#1A8EFD',
                    fontSize: { xs: '22px', md: '32px' },
                    fontWeight: 'bold',
                  }}>
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgb(77, 75, 75)',
                    fontSize: { xs: '16px', md: '22px' },
                    letterSpacing: '.7px',
                  }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            maxWidth: '100%',
            textAlign: 'center',
            display: { xs: 'none', md: 'block' },
          }}>
          <img
            className="hero-image1"
            src={Doctor}
            alt="Doctor"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
      <IconButton
        onClick={scrollToTop}
        sx={{
          width: '45px',
          height: '45px',
          display: goUp ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          border: '3px solid white',
          borderRadius: '50%',
          backgroundColor: '#1A8EFD',
          position: 'fixed',
          bottom: { xs: '32px', md: '50px' },
          right: { xs: '32px', md: '50px' },
          fontSize: '24px',
          zIndex: '20',
          cursor: 'pointer',
          ':hover': {
            backgroundColor: '#1A8EFD',
          },
        }}>
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
}
