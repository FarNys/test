import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import "./App.scss";

function App() {
  return (
    <div className="app_container">
      {/* <Router> */}
      {/* <ScrollToTop /> */}
      <Navbar />
      {/* <SliderMenu /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>

      {/* </Router> */}
    </div>
  );
}

export default App;
