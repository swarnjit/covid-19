import React, { useState, useEffect } from "react";
import {
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
  CardContent,
  Grid,
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
  root: {
    flexGrow: 1,
  },
  table: {
    width: "100%",
  },
  row: {
    maxWidth: "16%",
  },
  container: {
    maxHeight: 800,
  },
  worldFacts: {
    minWidth: 200,
    width: "100%",
    backgroundColor: "#245175",
  },
  bar: {
    width: "100%",
    "& > * + *": {
      marginTop: 16,
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Tracker() {
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
    };
    fetchData();
  }, []);

  const recoveredPercentage = (total, recovered) => {
    return (recovered * 100) / total;
  };

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} md={3}>
          <Card className={classes.worldFacts} align="center">
            <CardContent>
              <Typography variant="h5" style={{ color: "white" }}>
                Total Confirmed Cases
                {data.response
                  .filter((item) => item.country === "All")
                  .map((item) => (
                    <Box>
                      <Typography
                        variant="h4"
                        key={item.country}
                        style={{ color: "#65dd9b" }}
                      >
                        {item.cases.total}
                      </Typography>
                      <Typography variant="h5" style={{ color: "white" }}>
                        Total Recovered
                      </Typography>
                      <Typography
                        variant="h4"
                        key={item.country}
                        style={{ color: "#65dd9b" }}
                      >
                        {item.cases.recovered}
                      </Typography>
                      <Typography variant="h5" style={{ color: "white" }}>
                        Total Died
                      </Typography>
                      <Typography
                        variant="h4"
                        key={item.country}
                        style={{ color: "red" }}
                      >
                        {item.deaths.total}
                      </Typography>
                      <Typography variant="h5" style={{ color: "white" }}>
                        Total Recovered %
                      </Typography>
                      <Typography
                        variant="h4"
                        key={item.country}
                        style={{ color: "#65dd9b" }}
                      >
                        {recoveredPercentage(
                          item.cases.total,
                          item.cases.recovered
                        ).toFixed(2) + "%"}
                      </Typography>
                    </Box>
                  ))}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper className={classes.table}>
            <TableContainer className={classes.container}>
              <Table
                stickyHeader
                aria-label="sticky table"
                style={{ overflow: "wrap" }}
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Country</StyledTableCell>
                    <StyledTableCell>Recovered</StyledTableCell>
                    <StyledTableCell align="right">Total Cases</StyledTableCell>
                    <StyledTableCell align="right">New Cases</StyledTableCell>
                    <StyledTableCell align="right">
                      Active Cases
                    </StyledTableCell>
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
                      <TableCell component="th" scope="row">
                        {recoveredPercentage(
                          item.cases.total,
                          item.cases.recovered
                        ).toFixed(2) + "%"}
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
                      <StyledTableCell
                        align="right"
                        style={{ background: "green" }}
                      >
                        {item.cases.recovered}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ background: "red" }}
                      >
                        {item.deaths.total}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
export default Tracker;
