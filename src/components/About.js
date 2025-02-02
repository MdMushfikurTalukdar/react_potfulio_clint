import React from 'react';
import { Typography, Box, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import j1 from '../image/j1.jpg';


const AboutContainer = styled(Box)({
  padding: '50px',
  backgroundColor: '#f9f9f9',
  marginTop: '0',
});

const InfoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '10px',
  '& .label': {
    fontWeight: 'bold',
    marginRight: '10px',
  },
});

export const About = () => {
  return (
    <Box >
        <AboutContainer>
      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        About
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Avatar
            src={j1} // Replace with your image URL
            sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            UI/UX Designer & Web Developer
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InfoItem>
                <span className="label">Birthday:</span> 1 May 1995
              </InfoItem>
              <InfoItem>
                <span className="label">Website:</span> www.example.com
              </InfoItem>
              <InfoItem>
                <span className="label">Phone:</span> +123 456 7890
              </InfoItem>
              <InfoItem>
                <span className="label">City:</span> New York, USA
              </InfoItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem>
                <span className="label">Age:</span> 30
              </InfoItem>
              <InfoItem>
                <span className="label">Degree:</span> Master
              </InfoItem>
              <InfoItem>
                <span className="label">Email:</span> email@example.com
              </InfoItem>
              <InfoItem>
                <span className="label">Freelance:</span> Available
              </InfoItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AboutContainer>
    </Box>
  );
};

export default About;
