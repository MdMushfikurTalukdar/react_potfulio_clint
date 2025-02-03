import React from 'react';
import { Box } from '@mui/material';
import { Sidebar } from "../components/Sidebar";
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Footer } from '../components/Footer';



const Services = () => {
    return (
      <Box >
        <Sidebar />
        <ServicesSection />
        <TestimonialsSection />
        <Footer />
      </Box>
    );
  };
  
  export default Services;