import React from 'react';
import { Box, Typography } from '@mui/material';
import { EmojiPeople, Assignment, HeadsetMic, Group } from '@mui/icons-material';

const statsData = [
  { icon: <EmojiPeople sx={{ fontSize: 40, color: '#42a5f5' }} />, value: 232, label: 'Happy Clients', description: 'consequuntur quae' },
  { icon: <Assignment sx={{ fontSize: 40, color: '#42a5f5' }} />, value: 521, label: 'Projects', description: 'adipisci atque cum quia aut' },
  { icon: <HeadsetMic sx={{ fontSize: 40, color: '#42a5f5' }} />, value: 1453, label: 'Hours Of Support', description: 'aut commodi quaerat' },
  { icon: <Group sx={{ fontSize: 40, color: '#42a5f5' }} />, value: 32, label: 'Hard Workers', description: 'reum asperiores dolor' },
];

export const StatsSection = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 8, padding: 5, backgroundColor: '#f8f9fa' }}>
      {statsData.map((stat, index) => (
        <Box key={index} sx={{ textAlign: 'center' }}>
          <Box>{stat.icon}</Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{stat.value}</Typography>
          <Typography variant="h6">{stat.label}</Typography>
          <Typography variant="body2" sx={{ color: 'gray' }}>{stat.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StatsSection;
