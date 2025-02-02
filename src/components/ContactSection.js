import React from 'react';
import { Box, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';

export const ContactSection = () => {
  return (
    <Box sx={{ padding: 6, backgroundColor: '#f4f7fc' }}>
      {/* Section Title */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: 3 }}>Contact</Typography>
      <Typography variant="body1" sx={{ color: '#7f8c8d', marginBottom: 6 }}>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </Typography>

      <Grid container spacing={4}>
        {/* Left Side - Contact Information */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ padding: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
              <LocationOn sx={{ fontSize: 30, color: '#3498db', marginRight: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Address</Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                  A108 Adam Street, New York, NY 535022
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
              <Phone sx={{ fontSize: 30, color: '#3498db', marginRight: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Call Us</Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>+1 5589 55488 55</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
              <Email sx={{ fontSize: 30, color: '#3498db', marginRight: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Email Us</Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>info@example.com</Typography>
              </Box>
            </Box>

            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8716119516833!2d-74.00597268459233!3d40.71277597932857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQyJzQ2LjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2s!4v1646412788375!5m2!1sen!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </Paper>
        </Grid>

        {/* Right Side - Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ padding: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  size="small"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    backgroundColor: '#3498db',
                    '&:hover': {
                      backgroundColor: '#2980b9',
                    },
                    padding: 1,
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
