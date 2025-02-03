import React from 'react';
import { Box } from '@mui/material';
import { Sidebar } from "../components/Sidebar";
import { SkillsSection } from '../components/SkillsSection';
import { ResumeSection } from '../components/ResumeSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Footer } from '../components/Footer';



const Resume = () => {
    return (
      <Box >
        <Sidebar />
        <ResumeSection />
        <SkillsSection />
        <TestimonialsSection />
        <Footer />
      </Box>
    );
  };
  
  export default Resume;