import React from "react";
import { Paper, Typography, IconButton, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "lightblue",
  },
  copyright: {
    backgroundColor: "#333",
    color: "white",
  },
  icons: {
    height: theme.spacing(6),
    width: theme.spacing(6),
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.footer}>
        <Box align="center">
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
            <LinkedInIcon className={classes.icons} />
          </IconButton>
          <IconButton
            aria-label="GitHub.com"
            onClick={() => window.open("https://github.com/swarnjit")}
          >
            <GitHubIcon className={classes.icons} />
          </IconButton>
        </Box>
      </Paper>
      <Paper className={classes.copyright}>
        <Typography align="center">Copyright © Swarnjit Chahal</Typography>
      </Paper>
    </>
  );
};

export default Footer;
