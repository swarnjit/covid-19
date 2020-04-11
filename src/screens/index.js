import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import axios from "axios";
function Home() {
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
