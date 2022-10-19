import React from 'react';

import {
    Box,
    CardMedia,
    Link,
    Typography,
    Container
} from '@mui/material';

import app_bg from '../../img/deliveryCus/app_bg.png';
import bell from '../../img/deliveryCus/bell.png';
import dashboard from '../../img/deliveryCus/dash_board.png';
import mobile from '../../img/deliveryCus/mobile.png';
import zigzag from '../../img/deliveryCus/zigzag.png';

const styles = {
    containerFluid: {
      paddingTop: "140px",
      paddingBottom: "180px",
      backgroundColor: "#F4F4F4",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "1180px",
      margin: "0 auto",
      padding: "0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
    },
    exAppImg: {
      width: "700px",
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
    roundSharp: {
      width: "515px",
      height: "515px",
      borderRadius: "50%",
      backgroundColor: "#d3c3fc",
      position: "relative",
      overflow: "hidden",
    },
    content: {
      width: "calc(100% - 748px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    heading: {
      fontSize: "50px",
      color: "#212121",
      fontFamily: "'Fraunces', serif",
      fontWeight: "500",
      lineHeight: "1.1",
      letterSpacing: "-0.01em",
      display: "inline",
    },
    subHeading: {
      fontSize: "16px",
      marginBottom: "20px",
      color: "#414141",
      marginTop: "16px",
      fontFamily: "'Arimo', sans-serif",
    },
    link: {
      fontSize: "17px",
      fontWeight: "500",
      marginBottom: "20px",
      color: "#868686",
      fontStyle: "italic",
      lineHeight: "22px",
    },
};

const DeliveryCus = () => {
    return (
        <Box className="container-fluid" sx={styles.containerFluid}>
        <CardMedia
          component="img"
          image={bell}
          sx={{
            width: "auto",
            position: "absolute",
            right: "40px",
            top: "40px",
            zIndex: "1",
          }}
          alt="Paella dish"
        ></CardMedia>
        <Container sx={styles.container}>
          <CardMedia
            component="img"
            image={dashboard}
            sx={{
              width: "auto",
              position: "absolute",
              left: "-38px",
              top: "32px",
              zIndex: "1",
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={mobile}
            sx={{
              width: "auto",
              position: "absolute",
              left: "462px",
              top: "147px",
              zIndex: "1",
            }}
            alt="Paella dish"
          ></CardMedia>
          <Box sx={styles.exAppImg}>
            <CardMedia
              component="img"
              image={zigzag}
              sx={{
                width: "auto",
                position: "absolute",
                bottom: "-155px",
              }}
              alt="Paella dish"
            ></CardMedia>
            <Box sx={styles.roundSharp}>
              <CardMedia
                component="img"
                image={app_bg}
                alt="Paella dish"
              ></CardMedia>
            </Box>
          </Box>
          <Box className="content" sx={styles.content}>
            <Typography sx={styles.heading}>
              We deliver the <br></br> better&nbsp;
              <Typography
                sx={{
                  display: "inline",
                  fontSize: "50px",
                  color: "#FC6B75",
                  fontFamily: "'Fraunces', serif",
                  position: "relative",
                  lineHeight: "1.1",
                  marginBottom: "20px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#FC6B75",
                    bottom: "4px",
                  },
                }}
              >
                customer
              </Typography>
              <br></br>experiences .
            </Typography>
            <Typography sx={styles.subHeading}>
              Lorem Ipsum is simply dummy text of the printing and <br></br>
              typesetting industry. Lorem Ipsum has.
            </Typography>
            <Link sx={styles.link} color="inherit">
              Learn more
            </Link>
          </Box>
        </Container>
      </Box>
    )
}

export default DeliveryCus