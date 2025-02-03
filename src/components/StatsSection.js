import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { EmojiPeople, Assignment, HeadsetMic, Group } from '@mui/icons-material';

const statsData = [
  { icon: <EmojiPeople sx={{ fontSize: 40, color: '#42a5f5' }} />, value: 232, label: 'Happy Clients', description: 'consequuntur quae' },
  { icon: <Assignment sx={{ fontSize: 40, color: '#42a5f5' }} />, value: 521, label: 'Projects', description: 'adipisci atque cum quia aut' },
  { icon: <HeadsetMic sx={{ fontSize: 40, color: '#42a5f5' }} />, value: 1453, label: 'Hours Of Support', description: 'aut commodi quaerat' },
  { icon: <Group sx={{ fontSize: 40, color: '#42a5f5' }} />, value: 32, label: 'Hard Workers', description: 'reum asperiores dolor' },
];

export const StatsSection = () => {
  return (
    <Box sx={{ padding: { xs: 3, md: 5 }, backgroundColor: '#f8f9fa' }}>
      <Grid container spacing={4} justifyContent="center">
        {statsData.map((stat, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={3} 
            key={index} 
            sx={{ textAlign: 'center', padding: { xs: 2, md: 3 } }}
          >
            <Box>{stat.icon}</Box>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: { xs: '2rem', md: '2.5rem' } 
              }}
            >
              {stat.value}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.25rem' } 
              }}
            >
              {stat.label}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'gray', 
                fontSize: { xs: '0.875rem', md: '1rem' } 
              }}
            >
              {stat.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
