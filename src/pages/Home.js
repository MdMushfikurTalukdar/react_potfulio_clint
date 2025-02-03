import React from 'react';
import { Box } from '@mui/material';
import { Sidebar } from "../components/Sidebar";
import { HomeContent } from "./HomeContent";
import { About } from '../components/About';
import { StatsSection } from '../components/StatsSection';
import { SkillsSection } from '../components/SkillsSection';
import { ResumeSection } from '../components/ResumeSection';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';



const Home = () => {
    return (
      <Box >
        <Sidebar />
        <HomeContent />
        <About />
        <StatsSection />
        <SkillsSection />
        <ResumeSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </Box>
    );
  };
  
  export default Home;