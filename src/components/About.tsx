import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import Doctor from '../assets/doctor-group.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const steps = [
  {
    title: 'Bir Uzman Seçin',
    description:
      "Mükemmel uzmanınızı bulun ve Health Plus'ta kolaylıkla rezervasyon yapın. Uzman doktorlar, özel bakım sunarak sağlığınıza öncelik verir.",
  },
  {
    title: 'Bir Program Yapın',
    description:
      'Size en uygun tarih ve saati seçin ve özel tıp uzmanları ekibimizin kişiselleştirilmiş bakımla refahınızı sağlamasına izin verin.',
  },
  {
    title: 'Çözümlerinizi Alın',
    description:
      'Deneyimli doktorlarımız ve uzmanlarımız, mümkün olan en iyi sağlığınıza ulaşmanıza yardımcı olmak için uzman tavsiyesi ve kişiselleştirilmiş tedavi planları sunmak için buradalar.',
  },
];

export default function About() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #ECF2FF, #FBFCFF)',
      }}
      id="about">
      <Box
        sx={{
          px: 7,
          py: 10,
        }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={Doctor}
                alt="Doctor Group"
                style={{ maxWidth: '100%' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '40px',
                fontWeight: 'bold',
              }}>
              <span style={{ position: 'relative' }}>
                Hakkımızda
                <Box
                  component="span"
                  sx={{
                    content: '""',
                    position: 'absolute',
                    width: '75%',
                    height: '4px',
                    backgroundColor: '#9D2553',
                    borderRadius: '8px',
                    left: 0,
                    bottom: '-12px',
                  }}
                />
              </span>
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
              Erişilebilir ve güvenilir ortağınız Health Plus'a hoş geldiniz
              kişiselleştirilmiş sağlık hizmetleri. Uzman doktorlarımız
              çevrimiçi konsültasyonlar sunar ve refahınıza öncelik veren özel
              hizmetler. Bize katılın daha sağlıklı bir size doğru bu yolculuk.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                margin: '0 0 24px 0',
                color: '#4d4b4b',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '24px',
                fontWeight: 'bold',
                letterSpacing: '.7px',
              }}>
              Çözümleriniz
            </Typography>
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  padding: '16px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}>
                <CheckCircleOutlineIcon sx={{ color: '#9D2553' }} />
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
                  <Typography
                    variant="body1"
                    sx={{
                      margin: '8px 0',
                      color: '#4d4b4b',
                      letterSpacing: '.7px',
                      lineHeight: '1.6rem',
                    }}>
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
