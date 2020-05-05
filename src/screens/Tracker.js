import React, { useState, useEffect } from "react";
import * as _ from "lodash";
import {
  Typography,
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Grid,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import { fetchDataGlobal } from "../apis/apiCore";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#4267b2",
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
    marginBottom: 6,
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
    width: "100%",
    marginTop: 20,
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
  card: {
    margin: "0 0 2% 2%",
    boxShadow: "0 3px 5px 2px rgba(105,105,105, .9)",
    borderBottom: "10px solid rgba(0, 255, 10, 0.5)",
  },
  cardDeath: {
    margin: "0 0 2% 2%",
    boxShadow: "0 3px 5px 2px rgba(105,105,105, .9)",
    borderBottom: "10px solid rgba(205,92,92, 0.5)",
  },
});

function Tracker() {
  const classes = useStyles();
  const [data, setData] = useState({ response: [] });
  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchDataGlobal());
    };
    fetchData();
  }, []);

  const recoveredPercentage = (total, recovered) => {
    return (recovered * 100) / total;
  };
  const item = data.response;

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        {item
          .filter((item) => item.country === "All")
          .map((item) => (
            <Grid container className={classes.worldFacts} justify="center">
              <Grid
                item
                xs={12}
                md={2}
                component={Card}
                className={classes.card}
              >
                <CardContent>
                  <Typography variant="h5" style={{ color: "lightblue" }}>
                    Total Confirmed
                  </Typography>
                  <Typography
                    variant="h4"
                    key={item.country}
                    style={{ color: "#65dd9b" }}
                  >
                    <CountUp start={0} end={item.cases.total} separator="," />
                  </Typography>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                component={Card}
                className={classes.card}
              >
                <CardContent>
                  <Typography variant="h5" style={{ color: "lightblue" }}>
                    Total Recovered
                  </Typography>
                  <Typography
                    variant="h4"
                    key={item.country}
                    style={{ color: "#65dd9b" }}
                  >
                    <CountUp
                      start={0}
                      end={item.cases.recovered}
                      separator=","
                    />
                  </Typography>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                component={Card}
                className={classes.cardDeath}
              >
                <CardContent>
                  <Typography variant="h5" style={{ color: "lightblue" }}>
                    Total Deaths
                  </Typography>
                  <Typography
                    variant="h4"
                    key={item.country}
                    style={{ color: "#CD5C5C" }}
                  >
                    <CountUp start={0} end={item.deaths.total} separator="," />
                  </Typography>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                component={Card}
                className={classes.card}
              >
                <CardContent>
                  <Typography variant="h5" style={{ color: "lightblue" }}>
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
                </CardContent>
              </Grid>
            </Grid>
          ))}
        <Grid item xs={12} md={12}>
          <Paper className={classes.table}>
            <TableContainer className={classes.container}>
              <Table
                stickyHeader
                aria-label="sticky table"
                style={{ overflow: "wrap" }}
              >
                <caption>
                  Countries with 0 recovered cases means there is no data
                  recieved from that country
                </caption>
                <TableHead>
                  <TableRow style={{ backgroundColor: "#4267b2" }}>
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
                  {_.sortBy(item, "cases.total")
                    .reverse()
                    .map((item) => (
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
