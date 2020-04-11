import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Card,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import axios from "axios";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Home() {
  const classes = useStyles();
  const [data, setData] = useState({ response: [] });
  const [updatedNumbers, setupdatedNumbers] = useState({ body: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://covid-193.p.rapidapi.com/statistics",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key":
              "8529a60fe1msh86abdd1bb20286cp190477jsnc68714d9e22c",
          },
        }
      );
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://covid-19-live-stats.p.rapidapi.com/livestats",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "covid-19-live-stats.p.rapidapi.com",
            "x-rapidapi-key":
              "8529a60fe1msh86abdd1bb20286cp190477jsnc68714d9e22c",
          },
        }
      );
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <AppBar position="static" style={{ background: "#911" }}>
        <Toolbar>
          <Typography>COVID-19 Tracker</Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Typography variant="h3" style={{ color: "lightblue" }}>
          Tracker Map for COVID-19
        </Typography>
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
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
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell align="right">Total Cases</StyledTableCell>
              <StyledTableCell align="right">New Cases</StyledTableCell>
              <StyledTableCell align="right">Active Cases</StyledTableCell>
              <StyledTableCell align="right">Recovered</StyledTableCell>
              <StyledTableCell align="right">Deaths</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.response.map((item) => (
              <StyledTableRow key={item.country}>
                <TableCell component="th" scope="row">
                  {item.country}
                </TableCell>
                <StyledTableCell align="right">
                  {item.cases.total}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.cases.new}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.cases.active}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.cases.recovered}
                </StyledTableCell>
                <StyledTableCell align="right" style={{ background: "red" }}>
                  {item.deaths.total}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default Home;
