import React from "react";
import Navbar from "./Navbar";
import { Typography, Box } from "@material-ui/core";

const Map = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Typography variant="h3" color="textSecondary">
          Tracker Map for COVID-19
        </Typography>
        <iframe
          width="100%"
          height="400"
          frameborder="5"
          scrolling="yes"
          marginheight="0"
          marginwidth="0"
          title="2019-nCoV"
          src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
        ></iframe>
        <Typography>
          Map Data by{" "}
          <a href="https://systems.jhu.edu/research/public-health/ncov/">
            Johns Hopkins Center for Systems Science and Engineering
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Map;
