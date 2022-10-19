import React from 'react'

import {
    Box,
    Grid,
    Typography
} from '@mui/material';

import ceo from '../../img/ceoDescription/ceo.png';
import chat from '../../img/ceoDescription/chat.png';
import equal from '../../img/ceoDescription/equal.png';
import subtract from '../../img/ceoDescription/subtract.png';
import Rate from './Rate';

const ceoDesStyle = {
    container: {
        backgroundColor: '#212121',
        padding: '100px 0'
    },
    mainDetail: {
        width: "1176px",
        margin: '0 auto',
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rightcontain: {
        position: "relative",
        zIndex: "0",
        width: "461px",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto"
    },
    rightBackground: {
        position: "absolute",
        bottom: "0",
        backgroundColor: '#bfbae4',
        width: '100%',
        height: "calc(100% - 85px)",
        borderTopLeftRadius: "290px",
        borderTopRightRadius: "290px",
        zIndex: "0",
    }
}

const CeoDescription = () => {
    return (
        <Box
            sx={ceoDesStyle.container}
        >
            <Box
                sx={ceoDesStyle.mainDetail}
            >
                <Grid container
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Grid item xs={6}>
                        <Typography
                            sx={{
                                fontSize: "60px",
                                color: "#fff",
                                fontFamily: "'Fraunces', serif",
                                lineHeight: "64px",
                            }}
                        >
                            Happy customer
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "60px",
                                color: "#FF824C",
                                fontFamily: "'Fraunces', serif",
                                lineHeight: "78px",
                            }}
                        >
                            testimonials
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "400",
                                color: "#fff",
                                marginTop: "40px",
                                marginBottom: "34px",
                                fontFamily: "'Arimo', sans-serif",
                                paddingRight: '110px'
                            }}
                        >
                            “Connect to a multitude of sources like files and feeds, popular
                            business apps, cloud and onpremise databases, custom apps and
                            more”
                        </Typography>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: "24px",
                                fontStyle: "italic",
                                display: "inline-block",
                                fontFamily: "'Arimo', sans-serif",
                            }}
                        >
                            Jonah Jameson,&nbsp;
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    display: "inline-block",
                                    fontFamily: "'Arimo', sans-serif",
                                }}
                            >
                                CEO of youngtech
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={ceoDesStyle.rightcontain}
                        >
                            <Box
                                sx={ceoDesStyle.rightBackground}
                            ></Box>
                            <Box
                                sx={{
                                    zIndex: "1",
                                    margin: "0",
                                    padding: "0",
                                    display: "block",
                                    position: "absolute",
                                    top: "74px",
                                    left: "36px",
                                    transform: "rotate(6.035deg)",
                                }}
                            >
                                <img src={chat} alt="" />
                            </Box>
                            <Box
                                sx={{
                                    zIndex: "1",
                                    margin: "0",
                                    padding: "0",
                                    display: "block",
                                    position: "absolute",
                                    bottom: "6px",
                                    right: "-94px",
                                }}
                            >
                                <img src={equal} alt="" />
                            </Box>
                            <Box
                                sx={{
                                    zIndex: 2,
                                    bottom: '0',
                                    margin: '0 auto'
                                }}
                            >
                                <img src={ceo} alt="" />
                            </Box>
                            <Box
                                sx={{
                                    zIndex: "1",
                                    margin: "0",
                                    padding: "0",
                                    display: "block",
                                    position: "absolute",
                                    bottom: "-38px",
                                    left: "-38px",
                                }}
                            >
                                <img src={subtract} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Rate />
        </Box>
    )
}

export default CeoDescription