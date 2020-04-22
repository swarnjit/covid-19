import React from "react";
import Home from "./screens/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import Map from "./screens/Map";
import About from "./screens/About";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/map-tracker" component={Map} />
      <Route path="/about" component={About} />
    </>
  );
}
export default App;
