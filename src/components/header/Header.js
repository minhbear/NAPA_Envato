import React from 'react';
import { Box } from '@mui/material';
import { NavHeader } from './NavHeader';
import NavList from './NavList';

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        zIndex: '100',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <NavHeader />
      <NavList />
    </Box>
  )
}

export default Header