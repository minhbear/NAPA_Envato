import React from 'react';

import {
    Box
} from '@mui/material';
import DeliveryCus from './DeliveryCus';
import Benifit from './Benifit';
import Table from './Table'
import Fact from './Fact';

const AdvantageArea = () => {
  return (
    <Box
        sx={{
            backgroundColor: '#f4f4f4'
        }}
    >
        <DeliveryCus />
        <Benifit />
        <Table />
        <Fact />
    </Box>
  )
}

export default AdvantageArea