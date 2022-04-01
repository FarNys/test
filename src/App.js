import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import "./App.scss";
import Why from "./Pages/Why/Why";
import { Features } from "./Pages/Features/Features";
import Footer from "./Components/Footer";
import NavbarMenu from "./Components/NavbarMenu";

function App() {
  return (
    <div className="app_container">
      {/* <Router> */}
      {/* <ScrollToTop /> */}
      <Navbar />
      <NavbarMenu />
      {/* <SliderMenu /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/why-aibi" exact>
          <Why />
        </Route>
        <Route path="/features" exact>
          <Features />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <Footer />

      {/* </Router> */}
    </div>
  );
}

export default App;
