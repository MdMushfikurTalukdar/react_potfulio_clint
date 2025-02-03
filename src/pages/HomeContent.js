import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import j2 from "../image/j2.jpg";

const titles = ["Photographer", "Freelancer", "Worker", "Personal Assistant", "Developer"];

export const HomeContent = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = titles[currentWordIndex];
    let typingInterval;

    if (isTyping) {
      // Typing forward
      typingInterval = setInterval(() => {
        if (charIndex < currentWord.length) {
          setDisplayedText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(false), 1000); // Pause before erasing
        }
      }, 150);
    } else {
      // Erasing backward
      typingInterval = setInterval(() => {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          clearInterval(typingInterval);
          setIsTyping(true);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }, 100);
    }

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [isTyping, charIndex, currentWordIndex]);

  return (
    <Box
      sx={{
        // width: '100%',
        minHeight: '100vh',
        padding: { xs: 3, md: 6 }, // Adjust padding for small and large screens
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${j2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      {/* Main Heading */}
      <Typography 
        variant="h3" 
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3.5rem' }, // Responsive font size
        }}
      >
        S. M. Jahid Hasan
      </Typography>

      {/* Typing Effect */}
      <Typography 
        variant="h5" 
        sx={{ 
          marginTop: 1, 
          fontSize: { xs: '1.2rem', md: '2rem' }  // Responsive font size
        }}
      >
        I'm {displayedText}
      </Typography>
    </Box>
  );
};

export default HomeContent;
