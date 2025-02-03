import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Typography, Box, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, Description, Work, Build, Email, Facebook, Twitter, LinkedIn, Menu } from '@mui/icons-material';
import j1 from '../image/j1.jpg';

export const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Resume & Experiences', icon: <Description />, path: '/resume' },
    { text: 'Blog', icon: <Work />, path: '/blog' },
    { text: 'Services', icon: <Build />, path: '/services' },
    { text: 'Contact', icon: <Email />, path: '/contact' }
  ];

  const drawerContent = (
    <Box sx={{ width: 250, backgroundColor: '#1a1a2e', height: '100vh', padding: 2 }}>
      {/* Avatar Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
        <Avatar src={j1} sx={{ width: 50, height: 50 }} />
        <Typography variant="h6" sx={{ color: '#fff' }}>Jahid Hasan</Typography>
      </Box>

      {/* Navigation Links */}
      <List>
        {navLinks.map((item, index) => (
          <ListItem 
            button 
            key={index} 
            sx={{ '&:hover': { backgroundColor: '#2c2c54' } }}
            component={Link}
            to={item.path}
          >
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
          zIndex: 1300  // Ensure it stays on top of other components
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
            {navLinks.map((item, index) => (
              <Button
                key={index}
                startIcon={item.icon}
                component={Link}
                to={item.path}
                sx={{ color: '#b0b0b0', '&:hover': { color: '#ffffff' } }}
              >
                {item.text}
              </Button>
            ))}
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

      {/* Add this Box to prevent content from being hidden behind the AppBar */}
      <Box sx={{ height: '70px' }} />
    </>
  );
};

export default Sidebar;
