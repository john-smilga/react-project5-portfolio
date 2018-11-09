import React, { Component } from "react";
import Header from "../GlobalSections/Header";
import Services from "./Services";
import Info from "./Info";
import Footer from "../GlobalSections/Footer";

export default class About extends Component {
  render() {
    const url =
      "https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350";
    return (
      <React.Fragment>
        <Header title="about me" url={url} />
        <Services />
        <Info />
        <Footer />
      </React.Fragment>
    );
  }
}
