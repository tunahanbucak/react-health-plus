import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <Box>
      <BrowserRouter>
        {/* <Router basename="/Health-Plus"> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* </Router> */}
      </BrowserRouter>
    </Box>
  );
}

export default App;
