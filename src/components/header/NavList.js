import React from 'react';

import {
    Box,
    Stack,
    Typography,
    Button
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import logo from '../../img/logoEnvato.png';

const NavList = () => {
    const listMenu = ['Home', 'Pages', 'Portfolio', 'Blog', 'Contact']

    return (
        <Box
            sx={{
                width: '100%', height: '72px', padding: '0 60px 0 60px', backgroundColor: '#212121',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}
        >
            <Box>
                <img src={logo} alt="" />
            </Box>
            <Stack direction="row" spacing="36px">
                {listMenu.map((item, index) => (
                    <Box 
                        display="flex"
                        sx={{ color: "white" }}
                        key={index}
                    >
                        <Typography>{item}</Typography>
                        {item !== 'Contact' && <KeyboardArrowDownIcon />}
                    </Box>
                ))}
            </Stack>
            <Box>
                <Button
                    sx={{
                        marginRight: '25px', color: "white"
                    }}
                >
                    Login
                </Button>
                <Button variant='outlined'
                    sx={{
                        height: '55px',width: '130px',color: "white",
                        border: "1px solid white"
                    }}
                >
                    Sign Up
                </Button>
            </Box>
        </Box>
    )
}

export default NavList