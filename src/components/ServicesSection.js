import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { Work, Description, Build, Layers, WbSunny, Storage } from '@mui/icons-material';

const servicesData = [
  {
    icon: <Work sx={{ fontSize: 40, color: '#3498db' }} />,
    title: "Lorem Ipsum",
    description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  },
  {
    icon: <Description sx={{ fontSize: 40, color: '#3498db' }} />,
    title: "Dolor Sitema",
    description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata."
  },
  {
    icon: <Layers sx={{ fontSize: 40, color: '#3498db' }} />,
    title: "Sed ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    icon: <Build sx={{ fontSize: 40, color: '#3498db' }} />,
    title: "Magni Dolores",
    description: "Excepturi sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    icon: <WbSunny sx={{ fontSize: 40, color: '#3498db' }} />,
    title: "Nemo Enim",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
  },
  {
    icon: <Storage sx={{ fontSize: 40, color: '#3498db' }} />,
    title: "Eiusmod Tempor",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi."
  }
];

export const ServicesSection = () => {
  return (
    <Box sx={{ padding: 6, backgroundColor: '#f4f7fc' }}>
      {/* Section Title */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: 3 }}>Services</Typography>
      <Typography variant="body1" sx={{ color: '#7f8c8d', marginBottom: 6 }}>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#ffffff',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <Box
                sx={{
                  marginBottom: 2,
                  transition: 'color 0.3s',
                  '&:hover svg': {
                    color: '#e67e22' // Change icon color on hover
                  }
                }}
              >
                {React.cloneElement(service.icon)}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
