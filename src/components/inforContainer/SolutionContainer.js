import React from 'react';

import {
    Box,
    Typography
} from '@mui/material';
import SolutionCard from './SolutionCard';

const solutionStyle = {
    title: {
        margin: "0 auto",
        display: "inline",
        fontSize: "60px",
        fontWeight: "700",
        color: "#212121",
        fontFamily: "'Fraunces', serif",
        textAlign: "center",
        lineHeight: "78px",
    },
    subTitle: {
        marginTop: '20px',
        lineHeight: "30px",
        marginBottom: "10px",
        fontFamily: "'Arimo', sans-serif",
    }
}

const SolutionContainer = () => {
    return (
        <Box
            sx={{
                paddingBottom: '120px'
            }}
        >
            <Box
                sx={{ marginBottom: '75px', textAlign: 'center' }}
            >
                <Typography
                    sx={solutionStyle.title}
                >
                    Singular&nbsp;
                    <span
                        style={{
                            color: '#FC6B75',
                            position: 'relative'
                        }}
                    >
                        solution<span
                            style={{
                                width: '100%', height: '3px',
                                backgroundColor: '#FC6B75',
                                position: 'absolute', bottom: '0',
                                left: 'calc(0%)'
                            }}></span>
                    </span>
                    &nbsp;to all
                    <br />
                    of your activities
                </Typography>
                <Typography
                    sx={solutionStyle.subTitle}
                >
                    You said I'd feel better if I just worked hard without lifting me up
                </Typography>
            </Box>
            <SolutionCard />
        </Box>
    )
}

export default SolutionContainer