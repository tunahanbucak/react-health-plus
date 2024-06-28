import React from 'react';
import profile1 from '../assets/profile-1.png';
import profile2 from '../assets/profile-2.png';
import profile3 from '../assets/profile-3.png';
import profile4 from '../assets/profile-4.png';
import profile5 from '../assets/profile-5.png';
import profile6 from '../assets/profile-6.png';

import { Box, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

const doctors = [
  {
    image: profile1,
    name: 'Dr. Kathryn Murphy',
    title: 'Genel Cerrah',
    stars: '4.9',
    reviews: '1800',
  },
  {
    image: profile2,
    name: 'Dr. Jacob Jones',
    title: 'Hematolog',
    stars: '4.8',
    reviews: '700',
  },
  {
    image: profile3,
    name: 'Dr. Jenny Wilson',
    title: 'Endokrinolog',
    stars: '4.7',
    reviews: '500',
  },
  {
    image: profile4,
    name: 'Dr. Albert Flores',
    title: 'Kardiyolog',
    stars: '4.8',
    reviews: '450',
  },
  {
    image: profile6,
    name: ' Dr. Sinem Öz',
    title: 'Genel Cerrah',
    stars: '4.8',
    reviews: '450',
  },
  {
    image: profile5,
    name: 'Dr. Sanjay Gupta',
    title: 'Beyin Cerrahı ',
    stars: '5.0',
    reviews: '4500',
  },
];

export default function Doctors() {
  return (
    <Box>
      <Box
        sx={{
          py: 5,
          px: 7,
        }}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '40px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            <span style={{ position: 'relative' }}>
              Doktorlarımızla Tanışın
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
            sx={{
              margin: '64px auto 0',
              textAlign: 'center',
              color: 'rgb(77,75,75)',
              fontSize: '20px',
              lineHeight: '1.8rem',
            }}>
            Uzman doktorlardan oluşan olağanüstü ekibimizle tanışın, adanmış
            health Plus'ta birinci sınıf sağlık hizmetleri sunmak. Güven onların
            sizi daha sağlıklı ve daha mutlu bir hayata götürecek bilgi ve
            deneyim hayat.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            pt: 8,
          }}>
          {doctors.map((doctor) => (
            <Box
              sx={{
                width: '332px',
                height: '400px',
                gap: '32px',
                textAlign: 'left',
              }}>
              <img
                src={doctor.image}
                alt=""
                style={{
                  width: '80%',
                  height: '275px',
                  padding: '16px 32px 0',
                  backgroundPosition: 'center',
                  background: '#DDE5F8',
                  borderRadius: '20px',
                }}
              />
              <Typography
                sx={{
                  margin: '12px 0 0',
                  fontSize: '22px',
                  fontWeight: 'bold',
                }}>
                {doctor.name}
              </Typography>
              <Typography
                sx={{
                  margin: '6px 0 8px',
                  color: '#494949',
                  fontSize: '18px',
                }}>
                {doctor.title}
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  gap: '12px',
                }}>
                <StarRateIcon
                  sx={{
                    color: '#F7BB50',
                  }}
                />
                {doctor.stars}
                <span
                  style={{
                    color: '#5a5a5a',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}>
                  ({doctor.reviews}+ Yorumlar)
                </span>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
