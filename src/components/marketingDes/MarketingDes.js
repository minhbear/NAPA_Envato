import React from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import mark_cardGreen from '../../img/maketingArea/mark_cardGreen.png';
import mark_cardYellow from '../../img/maketingArea/mark_cardYellow.png';
import mark_dashboard from '../../img/maketingArea/mark_dashboard.png';

import {
    Box,
    Typography
} from '@mui/material'

const markStyle = {
    container: {
        paddingTop: '170px',
        backgroundColor: '#212121',
        textAlign: 'center',
        position: 'relative'
    },
    containerTextDes: {
        fontSize: '80px',
        color: 'white',
        fontFamily: "'Fraunces', serif",
        lineHeight: '80px'
    },
    containerTextSub: {
        color: 'white',
        fontSize: "20px",
        lineHeight: "78px",
        fontFamily: "'Arimo', sans-serif",
    },
    containerBoxText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: "18px",
        padding: "13px 33px",
        display: "flex",
    }
}

const MarketingDes = () => {
    return (
        <Box
            sx={markStyle.container}
        >
            <Box>
                <Typography
                    sx={markStyle.containerTextDes}
                >
                    Transform the way you
                    <br />
                    think about
                    <span style={{ color: '#fc6b75', position: 'relative', marginLeft: '20px' }}>
                        marketing
                        <span
                            style={{
                                position: 'absolute',
                                height: '3px', width: '100%',
                                backgroundColor: '#fc6b75',
                                bottom: '15px', left: 'calc(0%)'
                            }}></span>
                    </span>
                </Typography>
                <Typography
                    sx={markStyle.containerTextSub}
                >
                    You said I'd feel better if I just worked hard without lifting my head up
                </Typography>

                <Box display='flex'
                    sx={{ justifyContent: 'center', alignItems: 'center', color: 'white', marginTop: '48px' }}
                >
                    <Box
                        sx={{
                            ...markStyle.containerBoxText,
                            borderRadius: "3px",
                            backgroundColor: "#FF824C",
                        }}
                    >
                        <ArrowDownwardIcon sx={{ marginRight: '2px' }} />
                        <Typography>Try for free</Typography>
                    </Box>
                    <Box
                        sx={markStyle.containerBoxText}
                    >
                        <PlayArrowIcon sx={{ marginRight: '2px' }} />
                        <Typography >Watch video</Typography>
                    </Box>

                </Box>
                <Box
                    sx={{ marginTop: '100px' }}
                >
                    <img src={mark_dashboard} alt="" />
                </Box>
            </Box>

            <div
                style={{
                    position: 'absolute',
                    bottom: '200px',
                    left: '-100px'
                }}
            >
                <img src={mark_cardGreen} alt="" />
            </div>

            <div
                style={{
                    bottom: '200px',
                    right: '50px',
                    position: 'absolute'
                }}
            >
                <img src={mark_cardYellow} alt="" />
            </div>
        </Box>
    )
}

export default MarketingDes