import { Box, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const deployedURL = window.location.href;
  const location = useLocation();
  return (
    <Box>
      <Typography variant="h1">Page Not Found</Typography>
      <Typography>
        The requested URL {deployedURL} was not found on this server.
      </Typography>
      <Typography>
        The requested URL {location.pathname} was not found on this server.
      </Typography>
    </Box>
  );
}
