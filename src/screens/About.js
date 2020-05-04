import React from "react";
import Navbar from "./Navbar";
import { Paper, Typography } from "@material-ui/core";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Paper
        container="div"
        align="center"
        style={{
          background: "lightblue",
          height: "100%",
          WrapText: "center",
        }}
      >
        <Typography variant="h4" style={{ color: "white", fontWeight: "bold" }}>
          About the COVID-19 LiveStats
        </Typography>
        <Typography
          variant="subtitle1"
          align="justify"
          style={{ maxWidth: 500, margin: "0 10px" }}
        >
          The COVID-19 LiveStates updates about every 15 minutes. Map is updated
          frequently by Johns Hopkins Center for Systems Science and
          Engineering. Data is fetched from third party sources using APIs
          provided by the source.
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "white", fontWeight: "bold", padding: 10 }}
        >
          Designed by:
        </Typography>
        <Typography variant="body1">Swarnjit Singh Chahal</Typography>
      </Paper>
      <Footer />
    </>
  );
};

export default About;
