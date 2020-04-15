import React from "react";
import Navbar from "./Navbar";
import { Paper, Typography, Box, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const About = () => {
  return (
    <>
      <Navbar />
      <Paper
        container="div"
        align="center"
        style={{
          background: "lightblue",
          minHeight: 800,
          WrapText: "center",
        }}
      >
        <Typography variant="h4" style={{ color: "white", fontWeight: "bold" }}>
          About the COVID-19 LiveStats
        </Typography>
        <Typography
          variant="subtitle1"
          align="justify"
          style={{ maxWidth: 500 }}
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
        <Box>
          <Typography variant="h6" style={{ color: "Blue" }}>
            Connect with me
          </Typography>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/swarnjit-chahal-2239492a/"
              )
            }
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="GitHub.com"
            onClick={() => window.open("https://github.com/swarnjit/covid-19")}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Paper>
    </>
  );
};

export default About;
