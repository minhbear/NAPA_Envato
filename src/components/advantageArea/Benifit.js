import { CardMedia, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

import dot from '../../img/benefit/dot.png';
import flexible from '../../img/benefit/flexible.png';
import flower from '../../img/benefit/flower.png';
import leaf_bottom from '../../img/benefit/leaf_bottom.png';
import leaf_top from '../../img/benefit/leaf_top.png';
import scalable from '../../img/benefit/scalable.png';
import success_img from '../../img/benefit/success_img.png';
import Union from '../../img/benefit/Union.png';

const styles = {
  containerFluid: {
    padding: "0 60px",
  },
  board: {
    maxWidth: "100%",
    paddingTop: "140px",
    paddingBottom: "100px",
    margin: "0",
    backgroundColor: "#eaecf1",
    borderRadius: "10px",
    position: "relative",
  },
  container: {
    width: "1180px",
    margin: "0 auto",
    padding: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginTop: "20px",
    fontSize: "18px",
    color: "#494949",
    lineHeight: "30px",
    fontWeight: "400",
    fontFamily: "'Arimo', sans-serif",
  },
  featureList: {
    width: "calc(100% - 500px)",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  featureItem: {
    display: "flex",
    flexDirection: "column",
    width: "calc(50% - 50px)",
    marginLeft: "50px",
    marginBottom: "45px",
  },
};

function Benefit() {
  const features = [
    {
      img: flower,
      title: "Reliable",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      img: flexible,
      title: "Reliable",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      img: Union,
      title: "Reliable",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      img: scalable,
      title: "Reliable",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
  ];
  return (
      <Box className="container-fluid" sx={styles.containerFluid}>
        <Box sx={styles.board}>
          <Container style={styles.container}>
            <Box
              sx={{
                width: "428px",
              }}
            >
              <Typography sx={styles.heading}>
                We offer&nbsp;
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: "50px",
                    color: "#FC6B75",
                    fontFamily: "'Fraunces', serif",
                    position: "relative",
                    lineHeight: "1.1",
                    marginBottom: "20px",
                    fontWeight: "500",
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
                  benefits
                </Typography>
                <br></br>that are unique only to us
              </Typography>
              <Typography sx={styles.subHeading}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text .
              </Typography>
            </Box>
            <Box container className="feature-list" sx={styles.featureList}>
              {features.map((feature) => (
                <Box
                  item
                  xs={6}
                  className="feature-item"
                  sx={styles.featureItem}
                >
                  <CardMedia
                    component="img"
                    image={feature.img}
                    sx={{
                      width: "fit-content",
                    }}
                    alt="Paella dish"
                  ></CardMedia>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      marginTop: "15px",
                      marginBottom: "8px",
                      fontFamily: "'Arimo', sans-serif",
                    }}
                  >
                    Reliable
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      marginBottom: "16px",
                      fontFamily: "'Arimo', sans-serif",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </Typography>
                  <ArrowForwardIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                    }}
                  ></ArrowForwardIcon>
                </Box>
              ))}
            </Box>
          </Container>
          <CardMedia
            component="img"
            image={success_img}
            sx={{
              width: "auto",
              position: "absolute",
              bottom: "0",
              left: "0",
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={leaf_bottom}
            sx={{
              width: "auto",
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={leaf_top}
            sx={{
              width: "auto",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={dot}
            sx={{
              width: "auto",
              position: "absolute",
              bottom: "125px",
              left: "35%",
            }}
            alt="Paella dish"
          ></CardMedia>
        </Box>
      </Box>
  );
}

export default Benefit;
