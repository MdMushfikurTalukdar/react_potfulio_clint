import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Typography, Box, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Person, Description, Work, Build, Email, Facebook, Twitter, LinkedIn, Phone, Menu } from '@mui/icons-material';
import j1 from '../image/j1.jpg';

export const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250, backgroundColor: '#1a1a2e', height: '100vh', padding: 2 }}>
      {/* Avatar Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
        <Avatar src={j1} sx={{ width: 50, height: 50 }} />
        <Typography variant="h6" sx={{ color: '#fff' }}>Jahid Hasan</Typography>
      </Box>

      {/* Navigation Links */}
      <List>
        {[
          { text: 'Home', icon: <Home /> },
          { text: 'About', icon: <Person /> },
          { text: 'Resume', icon: <Description /> },
          { text: 'Portfolio', icon: <Work /> },
          { text: 'Services', icon: <Build /> },
          { text: 'Contact', icon: <Email /> }
        ].map((item, index) => (
          <ListItem button key={index} sx={{ '&:hover': { backgroundColor: '#2c2c54' } }}>
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: '#fff' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#1a1a2e',
          padding: 1,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Section - Avatar and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={j1} sx={{ width: 50, height: 50 }} />
            <Typography variant="h6" sx={{ color: '#fff' }}>Jahid Hasan</Typography>
          </Box>

          {/* Center Section - Navigation Links (Hidden on Mobile) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3
            }}
          >
            <Button startIcon={<Home />} sx={{ color: '#b0b0b0', '&:hover': { color: '#ffffff' } }}>Home</Button>
            <Button startIcon={<Person />} sx={{ color: '#b0b0b0', '&:hover': { color: '#ffffff' } }}>About</Button>
            <Button startIcon={<Description />} sx={{ color: '#b0b0b0', '&:hover': { color: '#ffffff' } }}>Resume</Button>
            <Button startIcon={<Work />} sx={{ color: '#b0b0b0', '&:hover': { color: '#ffffff' } }}>Portfolio</Button>
            <Button startIcon={<Build />} sx={{ color: '#b0b0b0', '&:hover': { color: '#ffffff' } }}>Services</Button>
            <Button startIcon={<Email />} sx={{ color: '#b0b0b0', '&:hover': { color: '#ffffff' } }}>Contact</Button>
          </Box>

          {/* Right Section - Social Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ backgroundColor: '#2c2c54', color: '#fff', '&:hover': { backgroundColor: '#42a5f5' } }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ backgroundColor: '#2c2c54', color: '#fff', '&:hover': { backgroundColor: '#42a5f5' } }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ backgroundColor: '#2c2c54', color: '#fff', '&:hover': { backgroundColor: '#42a5f5' } }}>
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ backgroundColor: '#2c2c54', color: '#fff', '&:hover': { backgroundColor: '#42a5f5' } }}>
              <Phone />
            </IconButton>
          </Box>

          {/* Menu Icon for Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { backgroundColor: '#1a1a2e' }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
