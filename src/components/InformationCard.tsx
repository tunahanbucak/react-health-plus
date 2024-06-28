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
        height: '100%',
        border: '2px solid #d7d3d3',
        borderRadius: '12px',
        backgroundColor: 'white',
        position: 'relative',
        padding: '24px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
        ':hover': {
          backgroundColor: '#f0f0f0',
        },
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
          padding: '12px 0 24px 0',
          color: 'black',
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'rgb(77, 75, 75)',
          padding: 2,
          fontSize: '18px',
          lineHeight: '1.5rem',
          textAlign: 'center',
        }}>
        {description}
      </Typography>
    </Paper>
  );
}
