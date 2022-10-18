import React from 'react';

import {
    Box,
    Typography,
    Stack
} from '@mui/material';

import baver from '../../img/customContainer/baver.png';
import copixel from '../../img/customContainer/copixel.png';
import mechanix from '../../img/customContainer/mechanix.png';
import reverland from '../../img/customContainer/reverland.png';
import teakwood from '../../img/customContainer/teakwood.png';

const customersContain = {
    container: {
        padding: '140px 0',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: "25px",
        textAlign: "center",
        fontFamily: "'Arimo', sans-serif",
        marginBottom: '70px'
    }
}

const CustomContainer = () => {
    return (
        <Box
            sx={customersContain.container}
        >
            <Typography
                sx={customersContain.title}
            >
                We take care of more than <strong>100k</strong> customers
            </Typography>

            <Stack direction='row' spacing={15}>
                <img src={baver} alt="" />
                <img src={copixel} alt="" />
                <img src={reverland} alt="" />
                <img src={mechanix} alt="" />
                <img src={teakwood} alt="" />
            </Stack>
        </Box>
    )
}

export default CustomContainer