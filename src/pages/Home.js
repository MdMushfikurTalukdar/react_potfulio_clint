import React from 'react';
import { Box } from '@mui/material';
import { Sidebar } from "../components/Sidebar";
import { HomeContent } from "./HomeContent";
import Footer from '../components/Footer';


const Home = () => {
    return (
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <HomeContent />
        <Footer />
      </Box>
    );
  };
  
  export default Home;