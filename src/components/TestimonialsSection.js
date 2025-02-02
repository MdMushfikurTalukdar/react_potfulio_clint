import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonialsData = [
  {
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Saul Goodman",
    title: "CEO & Founder",
    image: "https://via.placeholder.com/80"
  },
  {
    text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    name: "Sara Wilsson",
    title: "Designer",
    image: "https://via.placeholder.com/80"
  },
  {
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    name: "Jena Karlis",
    title: "Store Owner",
    image: "https://via.placeholder.com/80"
  },
  {
    text: "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    name: "Matt Damon",
    title: "Marketing Manager",
    image: "https://via.placeholder.com/80"
  }
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Helper function to get displayed testimonials
  const getDisplayedTestimonials = () => {
    if (testimonialsData.length <= 3) return testimonialsData;
    return [
      testimonialsData[activeIndex % testimonialsData.length],
      testimonialsData[(activeIndex + 1) % testimonialsData.length],
      testimonialsData[(activeIndex + 2) % testimonialsData.length],
    ];
  };

  return (
    <Box sx={{ padding: 6, backgroundColor: '#f4f7fc' }}>
      {/* Section Title */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: 3 }}>Testimonials</Typography>
      <Typography variant="body1" sx={{ color: '#7f8c8d', marginBottom: 6 }}>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </Typography>

      {/* Testimonials Grid */}
      <Grid container spacing={4} justifyContent="center">
        {getDisplayedTestimonials().map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              {/* Testimonial Card */}
              <Paper
                elevation={2}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 4,
                  textAlign: 'center',
                  borderRadius: 2,
                  backgroundColor: '#ffffff',
                  height: '100%'
                }}
              >
                <Typography variant="body2" sx={{ color: '#7f8c8d', fontStyle: 'italic', marginBottom: 2 }}>
                  {testimonial.text}
                </Typography>
              </Paper>

              {/* Profile Section (Outside the Card) */}
              <Avatar
                src={testimonial.image}
                sx={{
                  width: 80,
                  height: 80,
                //   border: '4px solid #3498db'
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#95a5a6' }}>{testimonial.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Dots */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        {testimonialsData.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setActiveIndex(idx)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: activeIndex === idx ? '#3498db' : '#dcdde1',
              marginX: 1,
              transition: 'background-color 0.3s',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#3498db'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
