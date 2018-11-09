import React, { Component } from "react";
import Header from "../GlobalSections/Header";
import Footer from "../GlobalSections/Footer";
export default class Contact extends Component {
  render() {
    const url =
      "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350";
    return (
      <React.Fragment>
        <Header title="contact me" url={url} />

        <Footer />
      </React.Fragment>
    );
  }
}
