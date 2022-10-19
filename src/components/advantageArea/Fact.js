import { Card, Typography, Box, Container } from "@mui/material";
import React from "react";

const styles = {
  containerFluid: {
    padding: "120px 0",
    backgroundColor: "#f4f4f4",
  },
  container: {
    width: "1180px",
    display: "flex",
    padding: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: "24px",
    margin: "0 auto",
  },
  card: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "18px",
    color: "#494949",
    fontWeight: "600",
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
  },
  title: {
    margin: "0 auto",
    fontSize: "80px",
    color: "#212121",
    fontFamily: "'Fraunces', serif",
    textAlign: "center",
    lineHeight: "1.2",
    fontWeight: "600",
    letterSpacing: "-0.01em",
    marginBottom: "5px",
  },
};

function Fact() {
  const facts = [
    {
      title: "650k",
      subTitle: "Active app Installation",
    },
    {
      title: "95%",
      subTitle: "Satisfied customer percentage",
    },
    {
      title: "60+",
      subTitle: "Countries avialable",
    },
  ];
  return (
      <Box className="container-fluid" style={styles.containerFluid}>
        <Container style={styles.container}>
          {facts.map((fact, index) => (
            <Card style={styles.card} key={index}>
              <Typography sx={styles.title}>{fact.title}</Typography>
              {fact.subTitle}
            </Card>
          ))}
        </Container>
      </Box>
  );
}

export default Fact;
