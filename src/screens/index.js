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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Home() {
  const classes = useStyles();
  const [data, setData] = useState({ response: [] });
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

  return (
    <>
      <AppBar position="static" style={{ background: "#911" }}>
        <Toolbar>
          <Typography>COVID-19 Tracker</Typography>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">Total Cases</TableCell>
              <TableCell align="right">New Cases</TableCell>
              <TableCell align="right">Active Cases</TableCell>
              <TableCell align="right">Recovered</TableCell>
              <TableCell align="right">Deaths</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.response.map((item) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {item.country}
                </TableCell>
                <TableCell align="right">{item.cases.total}</TableCell>
                <TableCell align="right">{item.cases.new}</TableCell>
                <TableCell align="right">{item.cases.active}</TableCell>
                <TableCell align="right">{item.cases.recovered}</TableCell>
                <TableCell align="right" style={{ background: "red" }}>
                  {item.deaths.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ul>
        {data.response.map((item) => (
          <li key={item.id}>
            <Typography variant="h5">
              Country-{item.country}-- New-{item.cases.new}, Active-
              {item.cases.active}
            </Typography>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Home;
