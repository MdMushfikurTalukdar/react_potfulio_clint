import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import j2 from "../image/j2.jpg";

const titles = ["Photographer", "Freelancer", "Worker", "Personal Assistant", "Developer"];

export const HomeContent = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Tracks which word to show
  const [displayedText, setDisplayedText] = useState(""); // The text being typed
  const [isTyping, setIsTyping] = useState(true); // Controls typing vs. erasing
  const [charIndex, setCharIndex] = useState(0); // Tracks current character position

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
          setIsTyping(true); // Switch back to typing
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % titles.length); // Move to next word
        }
      }, 100);
    }

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [isTyping, charIndex, currentWordIndex]);

  return (
    <>
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(100% - 240px)', // Adjust width for sidebar
        minHeight: '100vh',
        marginLeft: '240px', // Space to the right of the sidebar
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                          url(${j2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>S. M. Jahid Hasan</Typography>
      <Typography variant="h5" sx={{ marginTop: 1 }}>
        I'm {displayedText}
      </Typography>
    </Box>

</>
  );
};

export default HomeContent;
