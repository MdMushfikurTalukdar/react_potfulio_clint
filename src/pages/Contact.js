import React from 'react';
import { Box } from '@mui/material';
import { Sidebar } from "../components/Sidebar";
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';


const Contact = () => {
    return (
      <Box >
        <Sidebar />
        <ContactSection />
        <Footer />
      </Box>
    );
  };
  
  export default Contact;