import React, { useState } from 'react';
import { customerReviews } from '../scripts/reviews';
import { Box, Typography } from '@mui/material';

export default function Reviews() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const handleBackClick = () => {
    setReviewIndex((prevIndex) =>
      prevIndex <= 0 ? customerReviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setReviewIndex((prevIndex) =>
      prevIndex >= customerReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, location, message } = customerReviews[reviewIndex];
  return (
    <Box
      id="reviews"
      sx={{
        padding: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        background: 'linear-gradient(to right, #ECF2FF, #FBFCFF)',
      }}>
      <Box
        sx={{
          width: '100%',
        }}>
        <Typography
          sx={{
            margin: '16px 0',
            color: '#6F7074',
            fontSize: '32px',
            fontWeight: 'bold',
          }}>
          Dahası
          <span
            style={{
              color: '#178BFF',
            }}>
            1500'den Fazla Müşteri
          </span>
        </Typography>

        <Typography
          sx={{
            margin: '16px 0',
            color: 'black',
            fontSize: '36px',
            fontWeight: 'bold',
            lineHeight: '2.6rem',
          }}>
          Bize inanma, müşterilerin sözünü kontrol et
        </Typography>

        <Typography
          sx={{
            margin: '64px 0',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'relative',
          }}>
          <span
            style={{
              position: 'absolute',
              top: '-18px',
              left: '-24px',
              color: '#178BFF',
              fontSize: '40px',
              fontWeight: 'bold',
              letterSpacing: '2px',
            }}>
            ''
          </span>
          <span
            style={{
              display: 'block',
              margin: '0 0 0 8px',
              color: 'black',
              fontSize: '24px',
              lineHeight: '2.2rem',
            }}>
            {message}
          </span>
          <span
            style={{
              position: 'absolute',
              top: '-18px',
              left: '-24px',
              color: '#178BFF',
              fontSize: '40px',
              fontWeight: 'bold',
              letterSpacing: '2px',
            }}>
            ''
          </span>
        </Typography>
      </Box>
    </Box>
  );
}
