import { Box, Link, Typography } from "@mui/material";
import React from "react";

import logo from '../img/logoEnvato.png';

const styles = {
  footerItem: {
    color: "#A6A6A4",
    fontSize: "16px",
    textDecoration: "none",
    marginTop: "20px",
  },
  iconItem: {
    width: "20px",
    height: "20px",
    margin: "0 10px",
    color: "#A6A6A4",
  },
};

function Footer() {
  return (
    <>
      <Box
        sx={{
          paddingTop: "120px",
          backgroundColor: "#212121",
        }}
      >
        <Box
          sx={{
            width: "1180px",
            display: "flex",
            flexDirection: "row",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: "calc(100% / 3)",
            }}
          >
            <div>
              <img src={logo}></img>
            </div>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "'Arimo', sans-serif",

                color: "#fff",
                lineHeight: "22px",
                marginTop: "45px",
              }}
            >
              Call us
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#FF824C",
                margin: "10px 0",
                fontWeight: "500",
                lineHeight: "27px",
                letterSpacing: "0.01em",
                fontFamily: "'Arimo', sans-serif",
              }}
            >
              925-465-3762
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#A6A6A4",
                marginBottom: "16px",
                fontFamily: "'Arimo', sans-serif",
              }}
            >
              2627 Park Street, San Francisco, CA
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#A6A6A4",
                marginBottom: "16px",
                fontFamily: "'Arimo', sans-serif",
              }}
            >
              Support@droitlab.com
            </Typography>
          </Box>
          <Box
            sx={{
              width: "calc(100% / 4)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "'Arimo', sans-serif",

                color: "#fff",
                lineHeight: "24px",
                marginBottom: "15px",
              }}
            >
              About Us
            </Typography>
            <Link color={"inherit"} sx={styles.footerItem}>
              About Agency
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              About Business
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Our Mission
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Our History
            </Link>
          </Box>
          <Box
            sx={{
              width: "calc(100% / 4)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "'Arimo', sans-serif",

                color: "#fff",
                lineHeight: "24px",
                marginBottom: "15px",
              }}
            >
              Workflow
            </Typography>
            <Link color={"inherit"} sx={styles.footerItem}>
              Contact Us
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Classic Fullwidth
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Classic Boxed
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Creative Boxed
            </Link>
          </Box>
          <Box
            sx={{
              width: "calc(100% / 6)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "'Arimo', sans-serif",

                color: "#fff",
                lineHeight: "24px",
                marginBottom: "15px",
              }}
            >
              Help & Support
            </Typography>
            <Link color={"inherit"} sx={styles.footerItem}>
              Support
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              FAQ
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Privacy
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Term & conditions
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Reporting
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "170px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "#909090",
                paddingBottom: "20px",
                lineHeight: "36px",
                fontFamily: "'Arimo', sans-serif",
              }}
            >
              © 2022 Terra. All Rights Reserved
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Link sx={styles.iconItem}>
                <i
                  style={{
                    fontSize: "20px",
                  }}
                  class="fa-brands fa-instagram"
                ></i>
              </Link>
              <Link sx={styles.iconItem}>
                <i
                  style={{
                    fontSize: "20px",
                  }}
                  class="fa-brands fa-dribbble"
                ></i>
              </Link>
              <Link sx={styles.iconItem}>
                <i
                  style={{
                    fontSize: "20px",
                  }}
                  class="fa-brands fa-behance"
                ></i>
              </Link>
              <Link sx={styles.iconItem}>
                <i
                  style={{
                    fontSize: "20px",
                  }}
                  class="fa-brands fa-spotify"
                ></i>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
