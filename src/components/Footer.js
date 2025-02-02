import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        bottom: '0',
        // marginTop: "100%",

      }}
    >
      <Typography variant="body2" color="textSecondary">
        © The site active <strong>2025</strong>
      </Typography>

      <IconButton
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#17a2b8',
          color: 'white',
          '&:hover': { backgroundColor: '#138496' },
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
