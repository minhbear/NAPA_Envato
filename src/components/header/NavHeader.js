import React from 'react';
import { Box, Button } from '@mui/material';

export const NavHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex', justifyContent: 'space-between', padding: '20px',
        height: '54px', backgroundColor: '#262626', alignItems: "center",
        borderBottom: '1px solid black'
      }}
    >
      <p
        style={{ fontSize: "20px", color: "white" }}
      >
        envato<span style={{ color: "#6e973b" }}>market</span>
      </p>
      <Button variant="contained"
        sx={{ width: '95px', height: '31px', fontSize: '12px', backgroundColor: '#6f9a37' }}
      >Buy now</Button>
    </Box>
  )
}
