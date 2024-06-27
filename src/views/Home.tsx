import { Box } from '@mui/material';
import React from 'react';
import Appbar from '../components/Appbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import About from '../components/About';
import BookAppointment from '../components/BookAppointment';
import Reviews from '../components/Reviews';
import Doctors from '../components/Doctors';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Box>
      <Appbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </Box>
  );
}
