import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Box, IconButton } from '@mui/material';
import { Home, Person, Description, Work, Build, Email, Facebook, Twitter, LinkedIn, Phone } from '@mui/icons-material';
import j1 from "../image/j1.jpg";

const drawerWidth = 240;

export const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1a1a2e',
          color: '#fff',
        },
      }}
    >
      <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          src={j1} // Replace with your image URL
          sx={{ width: 100, height: 100, marginBottom: 1 }}
        />
        <Typography variant="h6">Jahid Hasan</Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <IconButton 
            sx={{ 
              backgroundColor: '#2c2c54',
              color: '#fff', 
              borderRadius: '50%',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: '#42a5f5',
              },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton 
            sx={{ 
              backgroundColor: '#2c2c54',
              color: '#fff', 
              borderRadius: '50%',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: '#42a5f5',
              },
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton 
            sx={{ 
              backgroundColor: '#2c2c54',
              color: '#fff', 
              borderRadius: '50%',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: '#42a5f5',
              },
            }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton 
            sx={{ 
              backgroundColor: '#2c2c54',
              color: '#fff', 
              borderRadius: '50%',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: '#42a5f5',
              },
            }}
          >
            <Phone />
          </IconButton>
        </Box>
      </Box>

      <List>
        <ListItem 
          button 
          sx={{ 
            '&:hover': { backgroundColor: '#2c2c54', transition: 'background-color 0.3s ease' },
            '& .MuiListItemIcon-root': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemIcon-root': { color: '#42a5f5' },
            '& .MuiListItemText-primary': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemText-primary': { color: '#ffffff' },
          }}
        >
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            '&:hover': { backgroundColor: '#2c2c54', transition: 'background-color 0.3s ease' },
            '& .MuiListItemIcon-root': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemIcon-root': { color: '#42a5f5' },
            '& .MuiListItemText-primary': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemText-primary': { color: '#ffffff' },
          }}
        >
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            '&:hover': { backgroundColor: '#2c2c54', transition: 'background-color 0.3s ease' },
            '& .MuiListItemIcon-root': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemIcon-root': { color: '#42a5f5' },
            '& .MuiListItemText-primary': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemText-primary': { color: '#ffffff' },
          }}
        >
          <ListItemIcon><Description /></ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            '&:hover': { backgroundColor: '#2c2c54', transition: 'background-color 0.3s ease' },
            '& .MuiListItemIcon-root': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemIcon-root': { color: '#42a5f5' },
            '& .MuiListItemText-primary': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemText-primary': { color: '#ffffff' },
          }}
        >
          <ListItemIcon><Work /></ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            '&:hover': { backgroundColor: '#2c2c54', transition: 'background-color 0.3s ease' },
            '& .MuiListItemIcon-root': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemIcon-root': { color: '#42a5f5' },
            '& .MuiListItemText-primary': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemText-primary': { color: '#ffffff' },
          }}
        >
          <ListItemIcon><Build /></ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            '&:hover': { backgroundColor: '#2c2c54', transition: 'background-color 0.3s ease' },
            '& .MuiListItemIcon-root': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemIcon-root': { color: '#42a5f5' },
            '& .MuiListItemText-primary': { color: '#b0b0b0', transition: 'color 0.3s ease' },
            '&:hover .MuiListItemText-primary': { color: '#ffffff' },
          }}
        >
          <ListItemIcon><Email /></ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
