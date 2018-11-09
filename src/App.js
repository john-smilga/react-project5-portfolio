import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/GlobalSections/Navbar";
import Home from "./Components/HomePage/Home";
import About from "./Components/AboutPage/About";
import Portfolio from "./Components/PorftolioPage/Portfolio";
import Content from "./Components/ContentPage/Content";
import Contact from "./Components/ContactPage/Contact";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/content" component={Content} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default App;
