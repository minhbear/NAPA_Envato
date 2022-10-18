import React from 'react';

import {
    Box
} from '@mui/material';

import CustomContainer from './CustomContainer';
import SolutionContainer from './SolutionContainer';

const InforContainer = () => {
  return (
    <Box
        sx={{
            width: '100%',
            backgroundColor: '#f4f4f4'
        }}
    >
        <CustomContainer />
        <SolutionContainer />
    </Box>
  )
}

export default InforContainer