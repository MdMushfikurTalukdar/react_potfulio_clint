import React from 'react';
import { Box, Typography, Divider, Fade, Slide } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const summaryData = {
  name: "Brandon Johnson",
  description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
  details: [
    "Portland par 127, Orlando, FL",
    "(123) 456-7891",
    "alice.barkley@example.com",
  ],
};

const educationData = [
  {
    degree: "Master of Fine Arts & Graphic Design",
    year: "2015 - 2016",
    institution: "Rochester Institute of Technology, Rochester, NY",
    description: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem est."
  },
  {
    degree: "Bachelor of Fine Arts & Graphic Design",
    year: "2010 - 2014",
    institution: "Rochester Institute of Technology, Rochester, NY",
    description: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae incidunt et quis eius."
  }
];

const experienceData = [
  {
    title: "Senior Graphic Design Specialist",
    years: "2019 - Present",
    company: "Experion, New York, NY",
    responsibilities: [
      "Lead in the design, development, and implementation of the graphic, layout, and production communication materials.",
      "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
      "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design.",
      "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000."
    ]
  },
  {
    title: "Graphic Design Specialist",
    years: "2017 - 2018",
    company: "Stepping Stone Advertising, New York, NY",
    responsibilities: [
      "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).",
      "Managed up to 5 projects or tasks at a given time while under pressure.",
      "Recommended and consulted with clients on the most appropriate graphic design.",
      "Created 4+ design presentations and proposals a month for clients and account managers."
    ]
  }
];

export const ResumeSection = () => {
  return (
    <Fade in timeout={1000}>
      <Box sx={{ padding: 8, backgroundColor: '#f4f7fc' }}>
        {/* Section Heading */}
        <Slide direction="down" in timeout={800}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: 3 }}>
            Resume
          </Typography>
        </Slide>
        <Typography variant="body1" sx={{ color: '#7f8c8d', marginBottom: 6 }}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
          {/* Summary and Education Section */}
          <Box>
            <Slide direction="right" in timeout={1000}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: 2 }}>Summary</Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', marginBottom: 4 }}>
                  <FiberManualRecordIcon sx={{ color: '#3498db', fontSize: 18, marginTop: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2980b9' }}>{summaryData.name}</Typography>
                    <Typography variant="body2" sx={{ color: '#7f8c8d', marginBottom: 2 }}>{summaryData.description}</Typography>
                    {summaryData.details.map((detail, index) => (
                      <Typography key={index} variant="body2" sx={{ color: '#7f8c8d' }}>{detail}</Typography>
                    ))}
                  </Box>
                </Box>

                {/* Styled Divider */}
                <Divider
                  sx={{
                    marginY: 4,
                    borderBottomWidth: 2,
                    background: 'linear-gradient(to right, #3498db, #8e44ad)',
                  }}
                />

                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: 2 }}>Education</Typography>
                {educationData.map((education, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', marginBottom: 3 }}>
                    <FiberManualRecordIcon sx={{ color: '#3498db', fontSize: 18, marginTop: 0.5 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2980b9' }}>{education.degree}</Typography>
                      <Typography variant="body2" sx={{ color: '#95a5a6' }}>{education.year}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#34495e' }}>{education.institution}</Typography>
                      <Typography variant="body2" sx={{ color: '#7f8c8d' }}>{education.description}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Slide>
          </Box>

          {/* Professional Experience Section */}
          <Box>
            <Slide direction="left" in timeout={1000}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: 2 }}>Professional Experience</Typography>
                {experienceData.map((experience, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', marginBottom: 4 }}>
                    <FiberManualRecordIcon sx={{ color: '#3498db', fontSize: 18, marginTop: 0.5 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2980b9' }}>{experience.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#95a5a6' }}>{experience.years}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#34495e' }}>{experience.company}</Typography>
                      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                        {experience.responsibilities.map((task, taskIndex) => (
                          <li key={taskIndex} style={{
                            color: '#7f8c8d',
                            marginBottom: 6,
                            transition: '0.3s',
                            '&:hover': { color: '#3498db' }
                          }}>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Slide>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default ResumeSection;
