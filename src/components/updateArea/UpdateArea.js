import BackgroundImg from "../../img/updatearea/zigzag.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { CardMedia, Link, Typography, Box, Container } from "@mui/material";

import zigzag_two from '../../img/updatearea/zigzag_two.png';
import line from '../../img/updatearea/line.png';

const styles = {
  containerFluid: {
    padding: "120px 0",
    background: `url(${BackgroundImg}) no-repeat scroll center 0/cover`,
    backgroundColor: "#f9dfdf",
    position: "relative",
  },
  container: {
    width: "1180px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    padding: "0",
  },
  backgroundImg: {
    position: "absolute",
    right: "0px",
    top: "0px",
    left: "0px",
    bottom: "0px",
    zIndex: "1",
    display: "flex",
    alignItems: "center",
  },
  heading: {
    margin: "0 auto",
    fontSize: "70px",
    color: "#212121",
    fontFamily: "'Fraunces', serif",
    textAlign: "center",
    lineHeight: "1.2",
    fontWeight: "600",
    letterSpacing: "-0.01em",
    marginBottom: "15px",
    position: "relative",
  },
  subHeading: {
    width: "50%",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "30px",
    color: "#494949",
    fontFamily: "'Arimo', sans-serif",
  },
  link: {
    padding: "24px 64px",
    backgroundColor: "#ff824c",
    color: "#fff",
    fontSize: "20px",
    lineHeight: "30px",
    textDecoration: "none",
    boxShadow: "0px 12px 50px 15px rgb(170 139 139 / 40%)",
    marginTop: "50px",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
};

function UpdateArea() {
  return (
    <>
      <Box className="container-fluid" sx={styles.containerFluid}>
        <CardMedia
          component="img"
          image={zigzag_two}
          style={styles.backgroundImg}
          alt="Paella dish"
        ></CardMedia>
        <Container sx={styles.container}>
          <Typography
            sx={styles.heading}
          >
            Never miss an update
            <div
              style={{
                position: "absolute",
                right: "-48px",
                top: "-36px",
                zIndex: "1",
              }}
            >
              <img src={line}></img>
            </div>
          </Typography>
          <Typography
            sx={styles.subHeading}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
            <br></br>
            do eiusmod tempor incididunt ut labore.
          </Typography>
          <Link
            sx={styles.link}
            color="inherit"
          >
            Work with us
            <ArrowForwardIcon
              sx={{
                marginLeft: "3px",
                width: "20px",
                height: "20px",
              }}
            ></ArrowForwardIcon>
          </Link>
        </Container>
      </Box>
    </>
  );
}

export default UpdateArea;
