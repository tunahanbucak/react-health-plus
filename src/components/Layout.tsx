import { Box } from '@mui/material';
import React from 'react';
import Appbar from './Appbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 2px)',
        pt: '80px',
      }}>
      <Appbar />
      <Box
        sx={{
          flex: 1,
          zIndex: 1,
        }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
