import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Email } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1a1a2e', color: '#fff', padding: { xs: 3, md: 6 } }}>
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>About Us</Typography>
          <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: { xs: '0.875rem', md: '1rem' } }}>
            We are a team of designers and developers dedicated to delivering high-quality design and development solutions tailored to meet your needs.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Quick Links</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#home" sx={{ color: '#b0b0b0', textDecoration: 'none', '&:hover': { color: '#42a5f5' } }}>Home</Link>
            <Link href="#about" sx={{ color: '#b0b0b0', textDecoration: 'none', '&:hover': { color: '#42a5f5' } }}>About</Link>
            <Link href="#resume" sx={{ color: '#b0b0b0', textDecoration: 'none', '&:hover': { color: '#42a5f5' } }}>Resume</Link>
            <Link href="#services" sx={{ color: '#b0b0b0', textDecoration: 'none', '&:hover': { color: '#42a5f5' } }}>Services</Link>
            <Link href="#contact" sx={{ color: '#b0b0b0', textDecoration: 'none', '&:hover': { color: '#42a5f5' } }}>Contact</Link>
          </Box>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Contact Us</Typography>
          <Typography variant="body2" sx={{ color: '#b0b0b0', marginBottom: 1 }}>
            123 Main Street, New York, NY 10001
          </Typography>
          <Typography variant="body2" sx={{ color: '#b0b0b0', marginBottom: 1 }}>+1 234 567 890</Typography>
          <Typography variant="body2" sx={{ color: '#b0b0b0', marginBottom: 2 }}>info@example.com</Typography>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ color: '#b0b0b0', '&:hover': { color: '#42a5f5' } }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: '#b0b0b0', '&:hover': { color: '#42a5f5' } }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: '#b0b0b0', '&:hover': { color: '#42a5f5' } }}>
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ color: '#b0b0b0', '&:hover': { color: '#42a5f5' } }}>
              <Email />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Footer Text */}
      <Box sx={{ textAlign: 'center', marginTop: 4, borderTop: '1px solid #444', paddingTop: 2 }}>
        <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
