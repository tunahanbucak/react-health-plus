import { Box, Typography } from '@mui/material';
import React from 'react';

export default function DoctorCard() {
  return (
    <Box>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '40px',
            fontWeight: 'bold',
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
      </Box>
    </Box>
  );
}
