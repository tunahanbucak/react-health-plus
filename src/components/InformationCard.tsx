import React, { ReactNode } from 'react';
import { Typography, Paper, IconButton } from '@mui/material';

interface InformationCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function InformationCard({
  title,
  description,
  icon,
}: InformationCardProps) {
  return (
    <Paper
      sx={{
        height: 'auto',
        border: '2px solid #d7d3d3',
        borderRadius: '12px',
        backgroundColor: 'white',
        position: 'relative',
        padding: '24px',
      }}>
      <IconButton
        sx={{
          position: 'absolute',
          top: '-24px',
          left: '44%',
          backgroundColor: '#DCE6FF',
          borderRadius: '30px',
          padding: '10px',
        }}>
        {icon}
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          margin: '32px 0 40px 0',
          color: 'black',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '28px',
          fontWeight: 'bold',
          letterSpacing: '.8px',
        }}>
        {title}
      </Typography>
      <Typography
        sx={{
          margin: '24px',
          color: 'rgb(77, 75, 75)',
          fontFamily: 'Rubik, sans-serif',
          fontSize: '18px',
          letterSpacing: '.8px',
          lineHeight: '1.5rem',
        }}>
        {description}
      </Typography>
    </Paper>
  );
}
