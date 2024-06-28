import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './views/Home';
import Appointment from './views/Appointment';
import Legal from './views/Legal';
import NotFound from './views/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Box>
  );
}

export default App;
