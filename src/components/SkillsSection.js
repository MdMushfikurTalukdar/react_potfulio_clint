import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const skillsData = [
  { skill: 'HTML', value: 100 },
  { skill: 'CSS', value: 90 },
  { skill: 'JavaScript', value: 75 },
  { skill: 'PHP', value: 80 },
  { skill: 'WordPress/CMS', value: 90 },
  { skill: 'Photoshop', value: 55 },
];

export const SkillsSection = () => {
  return (
    <Box sx={{ padding: 5, backgroundColor: '#f8f9fa' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Skills
      </Typography>
      <Typography variant="body1" sx={{ color: 'gray', marginBottom: 4 }}>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3 }}>
        {skillsData.map((skill, index) => (
          <Box key={index}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {skill.skill}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {skill.value}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              sx={{
                height: 8,
                borderRadius: 2,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#42a5f5',
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;
